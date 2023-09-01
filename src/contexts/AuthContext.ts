
import React, { createContext, useState } from 'react';
import { User, RegistrationFormData, LoginFormData } from '../types/Types';

// Create the AuthContext
export const AuthContext = createContext<{
  user: User | null;
  register: (formData: RegistrationFormData) => void;
  login: (formData: LoginFormData) => void;
  logout: () => void;
}>({
  user: null,
  register: () => {},
  login: () => {},
  logout: () => {},
});

// Create the AuthProvider component
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Function to handle user registration
  const register = (formData: RegistrationFormData) => {
    console.log('Registering user:', formData);
    // Add logic to register user with backend API
    // Set the user state after successful registration
    setUser({
      id: '1',
      name: formData.name,
      email: formData.email,
      password: formData.password,
      profilePicture: '',
      contactInfo: {
        phone: '',
        email: formData.email,
      },
      address: {
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
    });
  };

  // Function to handle user login
  const login = (formData: LoginFormData) => {
    console.log('Logging in user:', formData);
    // Add logic to authenticate user with backend API
    // Set the user state after successful login
    setUser({
      id: '1',
      name: 'John Doe',
      email: formData.email,
      password: 'encryptedPassword',
      profilePicture: 'profilePictureUrl',
      contactInfo: {
        phone: '1234567890',
        email: formData.email,
      },
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        zipCode: '12345',
      },
    });
  };

  // Function to handle user logout
  const logout = () => {
    console.log('Logging out user');
    // Add logic to logout user from backend API
    // Clear the user state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};