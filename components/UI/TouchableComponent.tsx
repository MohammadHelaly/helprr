import {
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from "react-native";

type TouchableComponentProps =
	| React.ComponentProps<typeof TouchableOpacity>
	| React.ComponentProps<typeof TouchableNativeFeedback>;

const TouchableComponent = (props: TouchableComponentProps) => {
	return Platform.OS === "android" && Platform.Version >= 21 ? (
		<TouchableNativeFeedback {...props} />
	) : (
		<TouchableOpacity {...props} />
	);
};

export default TouchableComponent;
