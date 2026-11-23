import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Button } from '../../components/ui/Button';

export default function FavoritesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="px-5 py-4 bg-white border-b border-slate-100">
        <Text className="text-2xl font-extrabold text-slate-900">Saved Items</Text>
        <Text className="text-xs text-slate-500">Keep track of items you want to purchase</Text>
      </View>

      <View className="flex-1 items-center justify-center px-8">
        <View className="w-16 h-16 rounded-full bg-blue-50 items-center justify-center mb-4">
          <Heart color="#2563EB" size={32} />
        </View>
        <Text className="text-lg font-bold text-slate-900 text-center">No Saved Items Yet</Text>
        <Text className="text-sm text-slate-500 text-center mt-2 mb-6 leading-relaxed">
          Tap the heart icon on any listing to bookmark uniforms, books, or gadgets you're interested in.
        </Text>
        <Button
          title="Browse Marketplace"
          onPress={() => router.replace('/(tabs)')}
          size="md"
        />
      </View>
    </SafeAreaView>
  );
}
