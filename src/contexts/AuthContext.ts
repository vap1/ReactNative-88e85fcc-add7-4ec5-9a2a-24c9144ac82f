
import React, { createContext, useState } from 'react';
import { UserLoginRequest, UserLoginResponse } from '../types/Types';
import { loginUser } from '../apis/AuthApi';

interface AuthContextProps {
  user: UserLoginResponse | null;
  login: (request: UserLoginRequest) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserLoginResponse | null>(null);

  const login = async (request: UserLoginRequest) => {
    try {
      console.log('Step 1: Initiating login process...');
      console.log('Request:', request);

      // Make API call to login user
      const response = await loginUser(request);
      console.log('Step 2: Login API call successful. Response:', response);

      // Update user state
      setUser(response);
      console.log('Step 3: User login successful. User:', response);
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  const logout = () => {
    console.log('Logging out user...');
    // Clear user state
    setUser(null);
    console.log('User logged out successfully.');
  };

  return (
    <AuthContext.Provider value={{ user:any, login:any, logout:any }}>
      {children}
    </AuthContext.Provider>
  );
};
