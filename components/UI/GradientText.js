import React from "react";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const GradientText = (props) => {
	const { style, children, colors } = props;
	return (
		<MaskedView maskElement={<Text style={style}>{children}</Text>}>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				colors={colors}>
				<Text style={{ ...style, opacity: 0 }}>{children}</Text>
			</LinearGradient>
		</MaskedView>
	);
};

export default GradientText;
