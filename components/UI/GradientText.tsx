import React from "react";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

type GradientTextProps = {
	style: any;
	children: any;
	colors: string[];
};

const GradientText = (props: GradientTextProps) => {
	const { style, children, colors } = props;

	const textStyles = {
		...style,
		opacity: 0,
	};

	const gradientCoordinates = {
		start: { x: 0, y: 0 },
		end: { x: 1, y: 1 },
	};

	return (
		<MaskedView maskElement={<Text style={style}>{children}</Text>}>
			<LinearGradient
				start={gradientCoordinates.start}
				end={gradientCoordinates.end}
				colors={colors}>
				<Text style={textStyles}>{children}</Text>
			</LinearGradient>
		</MaskedView>
	);
};

export default GradientText;
