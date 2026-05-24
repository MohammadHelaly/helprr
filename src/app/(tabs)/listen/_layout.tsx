import { Stack } from 'expo-router';

export default function ListenLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#ffffff' },
        headerShadowVisible: false,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          color: '#000000',
          fontSize: 36,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" options={{ title: 'Listen' }} />
      <Stack.Screen name="conversation/[conversation-id]" options={{ title: 'Conversation' }} />
    </Stack>
  );
}
