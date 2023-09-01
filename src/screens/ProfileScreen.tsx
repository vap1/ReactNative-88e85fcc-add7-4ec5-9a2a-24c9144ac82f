
import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import { User } from '../types/Types';
import { fetchUserDetails } from '../apis/UserApi';

const ProfileScreen: React.FC = () => {
  const { user, updateProfile } = useContext(ProfileContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        setIsLoading(true);
        const userDetails = await fetchUserDetails(user?.id || '');
        updateProfile(userDetails);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setIsLoading(false);
      }
    };

    getUserDetails();
  }, []);

  return (
    <View>
      {isLoading ? (
        <Text>Loading user details...</Text>
      ) : (
        <View>
          <Text>Name: {user?.name}</Text>
          <Text>Email: {user?.email}</Text>
          {/* Add more user details if needed */}
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;