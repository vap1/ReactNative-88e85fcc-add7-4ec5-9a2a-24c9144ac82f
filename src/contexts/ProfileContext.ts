
import React, { createContext, useState } from 'react';
import { User, ProfileFormData, updateProfile, fetchAllUserDetails } from '../types/Types';

// Create the ProfileContext
export const ProfileContext = createContext<{
  user: User | null;
  updateProfile: (profileData: ProfileFormData) => void;
  fetchAllUserDetails: () => void;
}>({
  user: null,
  updateProfile: () => {},
  fetchAllUserDetails: () => {},
});

// Create the ProfileProvider component
export const ProfileProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Function to handle profile update
  const handleUpdateProfile = (profileData: ProfileFormData) => {
    const { name, contactInfo, address, profilePicture } = profileData;
    console.log(`Updating profile for user with ID: ${user?.id}`);
    console.log(`New profile data: ${JSON.stringify(profileData)}`);

    // Add profile update logic here

    // Update the user object with new profile data
    const updatedUser: User = {
      ...(user as User),
      name: name,
      contactInfo: contactInfo,
      address: address,
      profilePicture: profilePicture,
    };

    // Set the updated user in the state
    setUser(updatedUser);
  };

  // Function to fetch all user details for admin
  const handleFetchAllUserDetails = () => {
    console.log('Fetching all user details for admin');

    // Add logic to fetch all user details here
    const allUserDetails = fetchAllUserDetails();

    console.log('All user details:', allUserDetails);
  };

  return (
    <ProfileContext.Provider
      value={{
        user,
        updateProfile: handleUpdateProfile,
        fetchAllUserDetails: handleFetchAllUserDetails,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};