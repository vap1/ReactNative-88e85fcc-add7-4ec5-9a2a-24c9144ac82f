
import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { AdminContext } from '../contexts/AdminContext';
import { User } from '../types/Types';

const AdminUserList: React.FC = () => {
  const { users, getUsers } = useContext(AdminContext);

  useEffect(() => {
    console.log('Fetching admin user details...');
    getUsers();
  }, []);

  console.log('Rendering admin user list...');

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