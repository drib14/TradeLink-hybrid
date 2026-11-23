import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { ListingSummary, ListingCondition } from '@tradelink/contracts';

interface ListingCardProps {
  listing: ListingSummary;
  onPress: () => void;
}

const conditionLabels: Record<ListingCondition, { text: string; bg: string; color: string }> = {
  [ListingCondition.NEW]: { text: 'New', bg: 'bg-emerald-100', color: 'text-emerald-800' },
  [ListingCondition.LIKE_NEW]: { text: 'Like New', bg: 'bg-teal-100', color: 'text-teal-800' },
  [ListingCondition.GOOD]: { text: 'Good', bg: 'bg-blue-100', color: 'text-blue-800' },
  [ListingCondition.FAIR]: { text: 'Fair', bg: 'bg-amber-100', color: 'text-amber-800' },
  [ListingCondition.POOR]: { text: 'Poor', bg: 'bg-slate-200', color: 'text-slate-700' },
};

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onPress }) => {
  const condition = conditionLabels[listing.condition] || conditionLabels[ListingCondition.GOOD];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.88}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 mb-3"
    >
      <View className="relative w-full aspect-[4/3] bg-slate-100">
        {listing.thumbnailUrl ? (
          <Image
            source={{ uri: listing.thumbnailUrl }}
            className="w-full h-full"
            contentFit="cover"
            transition={150}
          />
        ) : (
          <View className="w-full h-full items-center justify-center bg-slate-200">
            <Text className="text-slate-400 font-medium">No Image</Text>
          </View>
        )}
        <View className="absolute top-2.5 left-2.5">
          <View className={`px-2 py-0.5 rounded-md ${condition.bg}`}>
            <Text className={`text-xs font-semibold ${condition.color}`}>{condition.text}</Text>
          </View>
        </View>
      </View>

      <View className="p-3">
        <Text className="text-lg font-bold text-slate-900">
          ₱{Number(listing.price).toLocaleString('en-PH', { minimumFractionDigits: 2 })}
        </Text>
        <Text numberOfLines={1} className="text-sm font-medium text-slate-800 mt-0.5">
          {listing.title}
        </Text>
        <View className="flex-row items-center justify-between mt-2 pt-2 border-t border-slate-100">
          <Text numberOfLines={1} className="text-xs text-slate-500 max-w-[65%]">
            {listing.campusName || 'UC Main'}
          </Text>
          <Text className="text-xs text-slate-400">{listing.categoryName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
