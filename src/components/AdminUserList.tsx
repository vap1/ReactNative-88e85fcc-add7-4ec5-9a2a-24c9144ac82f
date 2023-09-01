
import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { AdminContext } from '../contexts/AdminContext';
import { User } from '../types/Types';

const AdminUserList: React.FC = () => {
  const { users, fetchAdminUserDetails, loading, error } = useContext(AdminContext);

  useEffect(() => {
    console.log('Fetching admin user details...');
    fetchAdminUserDetails();
  }, []);

  console.log('Rendering admin user list...');

  if (loading) {
    console.log('Loading admin user details...');
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    console.log('Error fetching admin user details:', error);
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Admin User List</Text>
      {users.map((user: User) => (
        <View key={user.email}>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Contact Info: {user.contactInfo}</Text>
          <Text>Address: {user.address}</Text>
          <Text>Profile Picture: {user.profilePicture}</Text>
        </View>
      ))}
    </View>
  );
};

export default AdminUserList;