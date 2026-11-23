import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { ShieldCheck, LogOut, ChevronRight, Bell, FileText, Lock } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../stores/authStore';

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    Alert.alert('Confirm Logout', 'Are you sure you want to log out of TradeLink?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log Out',
        style: 'destructive',
        onPress: async () => {
          await logout();
          router.replace('/(auth)/login');
        },
      },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView contentContainerClassName="p-5 pb-16">
        <Text className="text-2xl font-extrabold text-slate-900 mb-4">Student Profile</Text>

        {/* User Card */}
        <View className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm mb-6">
          <View className="flex-row items-center">
            <View className="w-16 h-16 rounded-2xl bg-[#0B236E] items-center justify-center mr-4">
              <Text className="text-2xl font-black text-[#F4B942]">
                {user?.displayName ? user.displayName.charAt(0) : 'U'}
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-lg font-bold text-slate-900">
                {user?.displayName || 'University of Cebu Student'}
              </Text>
              <Text className="text-xs text-slate-500 mt-0.5">
                {user?.email || 'student@uc.edu.ph'}
              </Text>
              <View className="flex-row items-center mt-2">
                <ShieldCheck color="#14B8A6" size={16} />
                <Text className="text-xs font-semibold text-teal-600 ml-1">
                  Campus Verified Student
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Account Settings List */}
        <View className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-6">
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-slate-100">
            <View className="flex-row items-center">
              <Bell size={20} color="#64748B" />
              <Text className="text-sm font-semibold text-slate-800 ml-3">Notification Preferences</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-slate-100">
            <View className="flex-row items-center">
              <Lock size={20} color="#64748B" />
              <Text className="text-sm font-semibold text-slate-800 ml-3">Security & Active Sessions</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center">
              <FileText size={20} color="#64748B" />
              <Text className="text-sm font-semibold text-slate-800 ml-3">Campus Policy & Safe Exchange Guide</Text>
            </View>
            <ChevronRight size={18} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        {/* Log Out */}
        <TouchableOpacity
          onPress={handleLogout}
          className="flex-row items-center justify-center bg-rose-50 border border-rose-200 py-3.5 rounded-2xl"
        >
          <LogOut size={18} color="#E11D48" />
          <Text className="text-rose-600 font-bold ml-2">Sign Out of TradeLink</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
