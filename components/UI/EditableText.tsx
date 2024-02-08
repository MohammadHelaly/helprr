import React from "react";
import { Text, TextInput } from "react-native";
import GradientText from "./GradientText";

type EditableTextProps = {
	defaultValue: string;
	maxLength?: number;
	isEditing: boolean;
	style: any;
	onEndEditing: () => void;
	setCurrentText: (text: string) => void;
	isGradient?: boolean;
	colors?: string[];
};

const EditableText = (props: EditableTextProps) => {
	const {
		defaultValue,
		maxLength,
		isEditing,
		style,
		onEndEditing,
		setCurrentText,
		isGradient,
		colors,
	} = props;

	const displayedText = !maxLength
		? defaultValue
		: defaultValue?.length > maxLength
		? defaultValue?.substring(0, maxLength) + "..."
		: defaultValue;

	const handleTextChange = (text: string) => {
		setCurrentText(text);
	};

	return isEditing ? (
		<TextInput
			autoFocus
			style={style}
			returnKeyType="done"
			defaultValue={defaultValue}
			onChangeText={handleTextChange}
			onEndEditing={onEndEditing}
		/>
	) : isGradient ? (
		<GradientText style={style} colors={colors}>
			{displayedText}
		</GradientText>
	) : (
		<Text style={style}>{displayedText}</Text>
	);
};

export default EditableText;
