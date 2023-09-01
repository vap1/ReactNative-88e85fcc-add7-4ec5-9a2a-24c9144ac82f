
import React, { createContext, useState, useEffect } from 'react';
import { UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';
import { getProfile, updateProfile } from '../apis/ProfileApi';

interface ProfileContextProps {
  userProfile: UserProfileResponse | null;
  loading: boolean;
  error: string | null;
  fetchUserProfile: (token: string) => void;
  updateProfile: (token: string, updatedProfile: UserProfileUpdateRequest) => void;
}

export const ProfileContext = createContext<ProfileContextProps>({
  userProfile: null,
  loading: false,
  error: null,
  fetchUserProfile: () => {},
  updateProfile: () => {},
});

export const ProfileProvider: React.FC = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfileResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserProfile = (token: string) => {
    setLoading(true);
    setError(null);
    console.log('Fetching user profile...');

    const request: UserProfileRequest = {
      token: token,
    };

    getProfile(request)
      .then((response: UserProfileResponse) => {
        console.log('User profile fetched successfully:', response);
        setUserProfile(response);
      })
      .catch((error: string) => {
        console.log('Error fetching user profile:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateProfile = (token: string, updatedProfile: UserProfileUpdateRequest) => {
    setLoading(true);
    setError(null);
    console.log('Updating user profile...');

    updatedProfile.token = token;

    updateProfile(updatedProfile)
      .then((response: UserProfileUpdateResponse) => {
        console.log('User profile updated successfully:', response);
        // Update the userProfile state with the updated profile
        setUserProfile((prevProfile) => {
          if (prevProfile) {
            return {
              ...prevProfile,
              ...updatedProfile,
            };
          }
          return null;
        });
      })
      .catch((error: string) => {
        console.log('Error updating user profile:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    // Perform any initial setup or API calls here
    console.log('Profile context initialized');
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        userProfile,
        loading,
        error,
        fetchUserProfile,
        updateProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};