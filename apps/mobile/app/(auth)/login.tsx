import React, { useState } from 'react';
import { View, Text, TextInput, Alert, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { Button } from '../../components/ui/Button';
import { api } from '../../services/api';
import { useAuthStore } from '../../stores/authStore';

export default function LoginScreen() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      Alert.alert('Required', 'Please enter your email and password.');
      return;
    }

    try {
      setLoading(true);
      const res = await api.post('/auth/login', { email: email.trim(), password });
      const { user, accessToken, refreshToken } = res.data;
      await setAuth(user, accessToken, refreshToken);
      router.replace('/(tabs)');
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Login failed. Please check your credentials.';
      Alert.alert('Authentication Error', Array.isArray(msg) ? msg.join('\n') : msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
        <ScrollView contentContainerClassName="p-6 justify-center flex-grow">
          <View className="items-center mb-6">
            <Image
              source={require('../../assets/icon.png')}
              className="w-16 h-16 rounded-2xl mb-3"
              contentFit="cover"
            />
            <Text className="text-3xl font-extrabold text-[#0B236E]">TradeLink</Text>
            <Text className="text-slate-500 mt-1 text-center text-sm">
              Sign in with your University of Cebu account to trade securely.
            </Text>
          </View>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-slate-700 mb-1.5">Campus Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="student@uc.edu.ph"
                keyboardType="email-address"
                autoCapitalize="none"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-900"
              />
            </View>

            <View className="mt-4">
              <Text className="text-sm font-semibold text-slate-700 mb-1.5">Password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                secureTextEntry
                className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-900"
              />
            </View>

            <Button
              title="Sign In"
              onPress={handleLogin}
              loading={loading}
              className="mt-6"
            />

            <View className="flex-row justify-center mt-6">
              <Text className="text-slate-500">Don't have an account yet? </Text>
              <Text
                onPress={() => router.push('/(auth)/register')}
                className="text-blue-600 font-bold"
              >
                Register
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
