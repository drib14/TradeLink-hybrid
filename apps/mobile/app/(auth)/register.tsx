import React, { useState } from 'react';
import { View, Text, TextInput, Alert, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { Button } from '../../components/ui/Button';
import { api } from '../../services/api';

export default function RegisterScreen() {
  const router = useRouter();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!displayName.trim() || !email.trim() || !password) {
      Alert.alert('Required Fields', 'Please complete all required fields.');
      return;
    }

    try {
      setLoading(true);
      await api.post('/auth/register', {
        displayName: displayName.trim(),
        email: email.trim().toLowerCase(),
        password,
        campusId: 'default-uc-main',
      });

      Alert.alert(
        'Registration Received',
        'Verification link sent. Please verify your student email to activate marketplace participation.',
        [{ text: 'Continue to Login', onPress: () => router.replace('/(auth)/login') }],
      );
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Registration failed.';
      Alert.alert('Error', Array.isArray(msg) ? msg.join('\n') : msg);
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
            <Text className="text-3xl font-extrabold text-[#0B236E]">Join TradeLink</Text>
            <Text className="text-slate-500 mt-1 text-center text-sm">
              The verified peer-to-peer student marketplace for the University of Cebu community.
            </Text>
          </View>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-semibold text-slate-700 mb-1.5">Full Name / Display Name</Text>
              <TextInput
                value={displayName}
                onChangeText={setDisplayName}
                placeholder="Juan dela Cruz"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-900"
              />
            </View>

            <View className="mt-4">
              <Text className="text-sm font-semibold text-slate-700 mb-1.5">Campus Email (@uc.edu.ph)</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="juan.delacruz@uc.edu.ph"
                keyboardType="email-address"
                autoCapitalize="none"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-900"
              />
            </View>

            <View className="mt-4">
              <Text className="text-sm font-semibold text-slate-700 mb-1.5">Password (min 8 chars)</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                secureTextEntry
                className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-900"
              />
            </View>

            <Button
              title="Create Account"
              onPress={handleRegister}
              loading={loading}
              className="mt-6"
            />

            <View className="flex-row justify-center mt-6">
              <Text className="text-slate-500">Already have an account? </Text>
              <Text
                onPress={() => router.push('/(auth)/login')}
                className="text-blue-600 font-bold"
              >
                Log In
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
