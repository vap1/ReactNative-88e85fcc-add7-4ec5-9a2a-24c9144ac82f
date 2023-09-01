
import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AdminContext } from '../contexts/AdminContext';

const AdminUserList: React.FC = () => {
  const { users, fetchAllUsers } = useContext(AdminContext);

  useEffect(() => {
    console.log('Fetching all users...');
    fetchAllUsers();
  }, []);

  console.log('Rendering AdminUserList component...');

  return (
    <View>
      <Text>Admin User List</Text>
      {users.map((user) => (
        <View key={user.id}>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Phone: {user.contactInfo.phone}</Text>
          <Text>Address: {user.address.street}, {user.address.city}, {user.address.state}, {user.address.country}, {user.address.zipCode}</Text>
        </View>
      ))}
    </View>
  );
};

export default AdminUserList;