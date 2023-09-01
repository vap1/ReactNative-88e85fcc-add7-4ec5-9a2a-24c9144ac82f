
import React, { createContext, useState } from 'react';
import { User, ProfileFormData } from '../types/Types';

// Create the ProfileContext
export const ProfileContext = createContext<{
  user: User | null;
  updateProfile: (formData: ProfileFormData) => void;
}>({
  user: null,
  updateProfile: () => {},
});

// Create the ProfileProvider component
export const ProfileProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Function to handle profile update
  const updateProfile = (formData: ProfileFormData) => {
    console.log('Updating profile:', formData);
    // Add logic to update user profile with backend API
    // Set the updated user state
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
  };

  return (
    <ProfileContext.Provider value={{ user, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};