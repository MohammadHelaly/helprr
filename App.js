import "react-native-gesture-handler";
import React from "react";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

LogBox.ignoreAllLogs();

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor} />
			<NavigationContainer>
				<AppNavigator />
				{/* <StatusBar style="auto" /> */}
				<StatusBar style="dark" />
			</NavigationContainer>
		</Provider>
	);
};

export default App;
