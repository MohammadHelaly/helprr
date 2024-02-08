import conversationReducer from "./slices/conversation-slice";
import ObjectDetectionReducer from "./slices/object-detection-slice";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	blacklist: ["objectDetection"], // objectDetection slice is not persisted
};

const rootReducer = combineReducers({
	conversations: conversationReducer,
	objectDetection: ObjectDetectionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (getDefaultMiddleware: any) =>
	getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	});

export const store = configureStore({
	reducer: persistedReducer,
	middleware: middleware,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
