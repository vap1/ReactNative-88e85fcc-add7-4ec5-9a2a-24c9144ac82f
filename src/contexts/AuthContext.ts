
import React, { createContext, useState } from 'react';
import { User, LoginFormData, RegistrationFormData, ProfileFormData, validateEmail, encryptPassword, decryptPassword, fetchUserDetails } from '../types/Types';

// Create the AuthContext
export const AuthContext = createContext<{
  user: User | null;
  login: (formData: LoginFormData) => void;
  register: (formData: RegistrationFormData) => void;
  logout: () => void;
  updateProfile: (formData: ProfileFormData) => void;
}>({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
  updateProfile: () => {},
});

// AuthProvider component
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Login function
  const login = (formData: LoginFormData) => {
    console.log('Logging in...');
    // Add logic to authenticate user credentials using backend API
    // Set the user state if authentication is successful
    setUser({
      id: '1',
      name: 'John Doe',
      email: formData.email,
      password: encryptPassword(formData.password),
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
    console.log('Login successful!');
  };

  // Register function
  const register = (formData: RegistrationFormData) => {
    console.log('Registering user...');
    // Add logic to create a new user account using backend API
    // Set the user state if registration is successful
    setUser({
      id: '1',
      name: formData.name,
      email: formData.email,
      password: encryptPassword(formData.password),
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
    console.log('Registration successful!');
  };

  // Logout function
  const logout = () => {
    console.log('Logging out...');
    // Clear the user state
    setUser(null);
    console.log('Logout successful!');
  };

  // Update profile function
  const updateProfile = (formData: ProfileFormData) => {
    console.log('Updating profile...');
    // Add logic to update user profile using backend API
    // Update the user state with the new profile data
    setUser((prevUser) => {
      if (prevUser) {
        return {
          ...prevUser,
          name: formData.name,
          contactInfo: formData.contactInfo,
          address: formData.address,
        };
      }
      return null;
    });
    console.log('Profile updated successfully!');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};