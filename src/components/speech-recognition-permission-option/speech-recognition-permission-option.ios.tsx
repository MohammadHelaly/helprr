import { SettingsOption } from "@/components/settings-option";

type Props = {
  hasPermission: boolean;
  onPress: () => void;
};

const SpeechRecognitionPermissionOption = (props: Props) => {
  const { hasPermission, onPress } = props;

  return (
    <SettingsOption
      label="Speech Recognition"
      trailingIcon={hasPermission ? "checkmark-sharp" : "chevron-forward-sharp"}
      onPress={onPress}
    />
  );
};

export { SpeechRecognitionPermissionOption };
