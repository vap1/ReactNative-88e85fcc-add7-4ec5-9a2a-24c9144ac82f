
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { fetchAllUserDetails } from '../apis/AdminApi';
import { User } from '../types/Types';

const AdminUserDetailsScreen: React.FC = () => {
  useEffect(() => {
    console.log('Fetching all user details for admin...');
    const allUsers: User[] = fetchAllUserDetails();
    console.log('All user details fetched successfully:', allUsers);
  }, []);

  console.log('Rendering AdminUserDetailsScreen component...');

  return (
    <View>
      <Text>Admin User Details</Text>
      {/* Render user details here */}
    </View>
  );
};

export default AdminUserDetailsScreen;