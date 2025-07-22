import { useState, useEffect, createContext, useContext } from 'react';
import { User, LoginDto, CreateUserDto } from '@/types';
import { authService } from '@/api/services/authService';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (credentials: LoginDto) => Promise<void>;
  register: (userData: CreateUserDto) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthProvider = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authService.setAuthToken(token);
      // Optionally verify token with backend
      authService.getProfile()
        .then((userData) => {
          setUser(userData);
        })
        .catch(() => {
          localStorage.removeItem('token');
          authService.removeAuthToken();
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (credentials: LoginDto) => {
    try {
      const response = await authService.login(credentials);
      localStorage.setItem('token', response.access_token);
      authService.setAuthToken(response.access_token);
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData: CreateUserDto) => {
    try {
      const response = await authService.register(userData);
      localStorage.setItem('token', response.access_token);
      authService.setAuthToken(response.access_token);
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    authService.removeAuthToken();
    setUser(null);
  };

  return {
    user,
    isLoading,
    login,
    register,
    logout,
  };
};

