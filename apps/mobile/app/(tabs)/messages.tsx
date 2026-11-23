import React from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { ConversationSummary } from '@TradeLink/contracts';

const MOCK_CONVERSATIONS: ConversationSummary[] = [
  {
    id: 'c1',
    listingId: '1',
    listingTitle: 'Data Structures and Algorithms in C++',
    listingPrice: 450,
    listingThumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&q=80',
    otherParticipant: {
      id: 'u2',
      displayName: 'Sarah C.',
      profilePhoto: null,
    },
    lastMessage: 'Sure, let us meet at the Main Campus Library lobby around 2 PM.',
    lastMessageAt: '10m ago',
    unreadCount: 1,
  },
  {
    id: 'c2',
    listingId: '3',
    listingTitle: 'Casio Scientific Calculator fx-991EX',
    listingPrice: 850,
    listingThumbnail: 'https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?w=200&q=80',
    otherParticipant: {
      id: 'u3',
      displayName: 'Joshua R.',
      profilePhoto: null,
    },
    lastMessage: 'Is the calculator still available?',
    lastMessageAt: '2h ago',
    unreadCount: 0,
  },
];

export default function MessagesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="px-5 py-4 bg-white border-b border-slate-100">
        <Text className="text-2xl font-extrabold text-slate-900">Messages</Text>
        <Text className="text-xs text-slate-500">Coordinate campus meetups and purchases</Text>
      </View>

      <FlatList
        data={MOCK_CONVERSATIONS}
        keyExtractor={(item) => item.id}
        contentContainerClassName="p-4"
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            className="flex-row items-center bg-white p-3.5 rounded-2xl mb-3 border border-slate-100 shadow-sm"
          >
            <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center mr-3">
              <Text className="text-blue-700 font-bold text-base">
                {item.otherParticipant.displayName.charAt(0)}
              </Text>
            </View>

            <View className="flex-1 mr-2">
              <View className="flex-row justify-between items-center">
                <Text className="font-bold text-slate-900 text-sm">
                  {item.otherParticipant.displayName}
                </Text>
                <Text className="text-[11px] text-slate-400">{item.lastMessageAt}</Text>
              </View>
              <Text numberOfLines={1} className="text-xs text-slate-500 font-medium mt-0.5">
                Re: {item.listingTitle}
              </Text>
              <Text numberOfLines={1} className="text-xs text-slate-700 mt-1">
                {item.lastMessage}
              </Text>
            </View>

            {item.unreadCount > 0 && (
              <View className="bg-blue-600 rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-white text-[10px] font-bold">{item.unreadCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
