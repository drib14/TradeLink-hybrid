import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Camera, Image as ImageIcon } from 'lucide-react-native';
import { Button } from '../../components/ui/Button';
import { ListingCondition } from '@TradeLink/contracts';

export default function SellScreen() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState<ListingCondition>(ListingCondition.GOOD);
  const [pickupPreference, setPickupPreference] = useState('');

  const handlePublish = () => {
    if (!title.trim() || !price || !description.trim()) {
      Alert.alert('Required Fields', 'Please complete the title, price, and description.');
      return;
    }
    Alert.alert(
      'Listing Created',
      'Your listing is ready to be published to the University of Cebu community.',
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView contentContainerClassName="p-5 pb-16">
        <Text className="text-2xl font-extrabold text-slate-900 mb-1">Create Listing</Text>
        <Text className="text-sm text-slate-500 mb-6">
          Reach hundreds of verified UC students looking for second-hand items.
        </Text>

        {/* Photo Upload Box */}
        <Text className="text-sm font-semibold text-slate-700 mb-2">Item Photos (Up to 8)</Text>
        <View className="flex-row items-center space-x-3 mb-6">
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-24 h-24 rounded-2xl border-2 border-dashed border-blue-400 bg-blue-50 items-center justify-center mr-3"
          >
            <Camera color="#2563EB" size={26} />
            <Text className="text-[11px] font-bold text-blue-600 mt-1">Add Photo</Text>
          </TouchableOpacity>
          <View className="flex-1 bg-slate-100 p-3 rounded-xl">
            <Text className="text-xs text-slate-600 leading-relaxed">
              Clear photos of textbook covers, item condition, and labels help sell 3x faster.
            </Text>
          </View>
        </View>

        {/* Details Form */}
        <View className="space-y-4">
          <View>
            <Text className="text-sm font-semibold text-slate-700 mb-1.5">Listing Title</Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              maxLength={60}
              placeholder="e.g., General Chemistry 2 Textbook"
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900"
            />
          </View>

          <View className="mt-4">
            <Text className="text-sm font-semibold text-slate-700 mb-1.5">Price (PHP)</Text>
            <TextInput
              value={price}
              onChangeText={setPrice}
              placeholder="₱ 0.00"
              keyboardType="numeric"
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900 font-bold"
            />
          </View>

          <View className="mt-4">
            <Text className="text-sm font-semibold text-slate-700 mb-1.5">Item Condition</Text>
            <View className="flex-row flex-wrap gap-2">
              {[
                ListingCondition.NEW,
                ListingCondition.LIKE_NEW,
                ListingCondition.GOOD,
                ListingCondition.FAIR,
              ].map((cond) => (
                <TouchableOpacity
                  key={cond}
                  onPress={() => setCondition(cond)}
                  className={`px-3.5 py-2 rounded-xl border ${
                    condition === cond
                      ? 'bg-blue-600 border-blue-600'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <Text
                    className={`text-xs font-semibold ${
                      condition === cond ? 'text-white' : 'text-slate-700'
                    }`}
                  >
                    {cond.replace('_', ' ')}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="mt-4">
            <Text className="text-sm font-semibold text-slate-700 mb-1.5">Description</Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              placeholder="Describe condition, author/edition, inclusions, and reason for selling..."
              multiline
              numberOfLines={4}
              className="bg-white border border-slate-200 rounded-xl p-3.5 text-base text-slate-900 h-28"
              textAlignVertical="top"
            />
          </View>

          <View className="mt-4">
            <Text className="text-sm font-semibold text-slate-700 mb-1.5">
              Campus Meetup Preference
            </Text>
            <TextInput
              value={pickupPreference}
              onChangeText={setPickupPreference}
              placeholder="e.g., UC Main Canteen, 12PM-2PM MWF"
              className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900"
            />
          </View>

          <Button
            title="Publish Listing"
            onPress={handlePublish}
            className="mt-6"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
