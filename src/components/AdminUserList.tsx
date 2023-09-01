
import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AdminContext } from '../contexts/AdminContext';

const AdminUserList: React.FC = () => {
  const { users, fetchAllUserDetails } = useContext(AdminContext);

  useEffect(() => {
    console.log('Fetching all user details for admin');
    fetchAllUserDetails();
  }, []);

  return (
    <View>
      <Text>Admin User List</Text>
      {users.map((user) => (
        <View key={user.id}>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Profile Picture: {user.profilePicture}</Text>
          <Text>Contact Info:</Text>
          <Text>Phone: {user.contactInfo.phone}</Text>
          <Text>Email: {user.contactInfo.email}</Text>
          <Text>Address:</Text>
          <Text>Street: {user.address.street}</Text>
          <Text>City: {user.address.city}</Text>
          <Text>State: {user.address.state}</Text>
          <Text>Country: {user.address.country}</Text>
          <Text>Zip Code: {user.address.zipCode}</Text>
        </View>
      ))}
    </View>
  );
};

export default AdminUserList;