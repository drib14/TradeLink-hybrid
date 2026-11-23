import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import { UserSummary } from '@TradeLink/contracts';

interface AuthState {
  user: UserSummary | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (user: UserSummary, accessToken: string, refreshToken: string) => Promise<void>;
  logout: () => Promise<void>;
  initAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  setAuth: async (user, accessToken, refreshToken) => {
    await SecureStore.setItemAsync('accessToken', accessToken);
    await SecureStore.setItemAsync('refreshToken', refreshToken);
    set({ user, isAuthenticated: true, isLoading: false });
  },

  logout: async () => {
    await SecureStore.deleteItemAsync('accessToken');
    await SecureStore.deleteItemAsync('refreshToken');
    set({ user: null, isAuthenticated: false, isLoading: false });
  },

  initAuth: async () => {
    try {
      const token = await SecureStore.getItemAsync('accessToken');
      if (token) {
        // In real app, validate with GET /users/me
        set({ isAuthenticated: true, isLoading: false });
      } else {
        set({ isAuthenticated: false, isLoading: false });
      }
    } catch {
      set({ isAuthenticated: false, isLoading: false });
    }
  },
}));
