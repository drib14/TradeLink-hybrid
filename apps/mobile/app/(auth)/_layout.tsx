import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#F3F6FA' },
        headerTintColor: '#14213D',
        headerTitleStyle: { fontWeight: '700' },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="login" options={{ title: 'Log In' }} />
      <Stack.Screen name="register" options={{ title: 'Create Account' }} />
    </Stack>
  );
}
