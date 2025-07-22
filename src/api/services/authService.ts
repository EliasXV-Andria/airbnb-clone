import apiClient from '../client';
import { LoginDto, CreateUserDto, AuthResponse } from '@/types';

export const authService = {
  async login(credentials: LoginDto): Promise<AuthResponse> {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  },

  async register(userData: CreateUserDto): Promise<AuthResponse> {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  },

  async getProfile(): Promise<any> {
    const response = await apiClient.post('/auth/profile');
    return response.data;
  },

  setAuthToken(token: string) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  removeAuthToken() {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

