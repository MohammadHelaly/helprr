import {
  Text,
  TextInput,
  type TextInputProps,
  type TextProps,
} from "react-native";

interface Props {
  className: string;
  editClassName?: string;
  isEditing: boolean;
  onChangeText: (text: string) => void;
  onSave: () => void;
  text: string;
  value: string;
  inputProps?: Omit<
    TextInputProps,
    | "autoFocus"
    | "className"
    | "onChangeText"
    | "onEndEditing"
    | "onSubmitEditing"
    | "value"
  >;
  textProps?: Omit<TextProps, "children" | "className">;
}

const EditableText = (props: Props) => {
  const {
    className,
    editClassName,
    inputProps,
    isEditing,
    onChangeText,
    onSave,
    text,
    textProps,
    value,
  } = props;

  if (isEditing) {
    return (
      <TextInput
        {...inputProps}
        autoFocus
        className={editClassName ?? className}
        onChangeText={onChangeText}
        onEndEditing={onSave}
        onSubmitEditing={onSave}
        value={value}
      />
    );
  }

  return (
    <Text {...textProps} className={className}>
      {text}
    </Text>
  );
};

export { EditableText };
