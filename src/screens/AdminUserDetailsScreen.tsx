
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { fetchAllUserDetails } from '../apis/AdminApi';
import { User } from '../types/Types';

const AdminUserDetailsScreen: React.FC = () => {
  useEffect(() => {
    console.log('Fetching all user details for admin');
    const allUserDetails: User[] = fetchAllUserDetails();
    console.log('All user details:', allUserDetails);
  }, []);

  return (
    <View>
      <Text>Admin User Details</Text>
    </View>
  );
};

export default AdminUserDetailsScreen;