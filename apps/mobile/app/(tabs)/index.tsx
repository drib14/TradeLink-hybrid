import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, SafeAreaView, TouchableOpacity, RefreshControl } from 'react-native';
import { Search, SlidersHorizontal } from 'lucide-react-native';
import { Image } from 'expo-image';
import { ListingCard } from '../../components/ui/ListingCard';
import { ListingSummary, ListingCondition, ListingStatus } from '@tradelink/contracts';

// Seed sample items for instantaneous development preview
const INITIAL_LISTINGS: ListingSummary[] = [
  {
    id: '1',
    title: 'Data Structures and Algorithms in C++ (4th Ed)',
    price: 450,
    condition: ListingCondition.GOOD,
    status: ListingStatus.PUBLISHED,
    thumbnailUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80',
    categoryName: 'Books & Learning',
    sellerDisplayName: 'Sarah C.',
    campusName: 'UC Main',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'UC Official Department Uniform (Female Small)',
    price: 320,
    condition: ListingCondition.LIKE_NEW,
    status: ListingStatus.PUBLISHED,
    thumbnailUrl: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=500&q=80',
    categoryName: 'Uniforms',
    sellerDisplayName: 'Mark T.',
    campusName: 'UC Banilad',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Casio Scientific Calculator fx-991EX ClassWiz',
    price: 850,
    condition: ListingCondition.LIKE_NEW,
    status: ListingStatus.PUBLISHED,
    thumbnailUrl: 'https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?w=500&q=80',
    categoryName: 'Electronics',
    sellerDisplayName: 'Joshua R.',
    campusName: 'UC LM',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Drafting Board Table with T-Square and Carry Bag',
    price: 600,
    condition: ListingCondition.GOOD,
    status: ListingStatus.PUBLISHED,
    thumbnailUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80',
    categoryName: 'Learning Materials',
    sellerDisplayName: 'Ana P.',
    campusName: 'UC METC',
    createdAt: new Date().toISOString(),
  },
];

const CATEGORIES = ['All', 'Books', 'Uniforms', 'Electronics', 'Dorm', 'Food', 'Services'];

export default function HomeFeedScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 800);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Header */}
      <View className="px-5 pt-3 pb-2 bg-white border-b border-slate-100">
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/icon.png')}
              className="w-9 h-9 rounded-xl mr-2.5"
              contentFit="cover"
            />
            <View>
              <Text className="text-xl font-extrabold text-[#0B236E] tracking-tight">TradeLink</Text>
              <Text className="text-xs text-slate-500 font-medium">University of Cebu Marketplace</Text>
            </View>
          </View>
          <View className="bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full">
            <Text className="text-xs font-semibold text-teal-700">Verified UC</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center bg-slate-100 rounded-xl px-3.5 py-2.5 mb-2">
          <Search size={18} color="#64748B" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search books, uniforms, gadgets..."
            placeholderTextColor="#94A3B8"
            className="flex-1 ml-2.5 text-sm text-slate-900"
          />
          <TouchableOpacity activeOpacity={0.7} className="ml-1">
            <SlidersHorizontal size={18} color="#2563EB" />
          </TouchableOpacity>
        </View>

        {/* Category Pill Filters */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          keyExtractor={(item) => item}
          className="py-1"
          renderItem={({ item }) => {
            const isSelected = item === selectedCategory;
            return (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item)}
                className={`px-3.5 py-1.5 rounded-full mr-2 ${
                  isSelected ? 'bg-blue-600' : 'bg-slate-100'
                }`}
              >
                <Text
                  className={`text-xs font-semibold ${
                    isSelected ? 'text-white' : 'text-slate-600'
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Listing Feed */}
      <FlatList
        data={INITIAL_LISTINGS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperClassName="justify-between px-4"
        contentContainerClassName="pt-4 pb-12"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <View className="w-[48%]">
            <ListingCard
              listing={item}
              onPress={() => {
                // Navigate to listing detail
              }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
