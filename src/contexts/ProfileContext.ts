
import React, { createContext, useState } from 'react';
import { User, ProfileFormData, fetchUserDetails } from '../types/Types';

// Create the ProfileContext
export const ProfileContext = createContext<{
  user: User | null;
  updateUserProfile: (formData: ProfileFormData) => void;
}>({
  user: null,
  updateUserProfile: () => {},
});

// ProfileProvider component
export const ProfileProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Update user profile function
  const updateUserProfile = (formData: ProfileFormData) => {
    console.log('Updating user profile...');
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
    console.log('User profile updated successfully!');
  };

  return (
    <ProfileContext.Provider value={{ user, updateUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};