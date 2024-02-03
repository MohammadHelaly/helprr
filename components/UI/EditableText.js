import React from "react";
import { Text, TextInput } from "react-native";

const EditableText = (props) => {
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

	const TextComponent = isGradient ? GradientText : Text;

	const displayedText = !maxLength
		? defaultValue
		: defaultValue?.length > maxLength
		? defaultValue?.substring(0, maxLength) + "..."
		: defaultValue;

	const handleTextChange = (text) => {
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
	) : (
		<TextComponent style={style} colors={colors}>
			{displayedText}
		</TextComponent>
	);
};

export default EditableText;
