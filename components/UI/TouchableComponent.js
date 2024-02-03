import {
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from "react-native";

const TouchableComponent = (props) => {
	const Component =
		Platform.OS === "android" && Platform.Version >= 21
			? TouchableNativeFeedback
			: TouchableOpacity;

	return <Component {...props}>{props.children}</Component>;
};

export default TouchableComponent;
