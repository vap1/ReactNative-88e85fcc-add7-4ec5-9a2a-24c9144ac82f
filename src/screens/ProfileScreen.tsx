
import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { UserProfileRequest, UserProfileResponse } from '../types/Types';
import { ProfileContext } from '../contexts/ProfileContext';

const ProfileScreen: React.FC = () => {
  const { userProfile, getUserProfile } = useContext(ProfileContext);

  useEffect(() => {
    console.log('Fetching user profile...');
    const request: UserProfileRequest = {
      token: 'user_token', // Replace with actual user token
    };
    getUserProfile(request)
      .then((response: UserProfileResponse) => {
        console.log('User profile fetched successfully:', response.user);
      })
      .catch((error: Error) => {
        console.log('Error fetching user profile:', error.message);
      });
  }, []);

  return (
    <View>
      <Text>User Profile:</Text>
      <Text>Name: {userProfile.name}</Text>
      <Text>Email: {userProfile.email}</Text>
      <Text>Contact Info: {userProfile.contactInfo}</Text>
      <Text>Address: {userProfile.address}</Text>
      <Text>Profile Picture: {userProfile.profilePicture}</Text>
    </View>
  );
};

export default ProfileScreen;