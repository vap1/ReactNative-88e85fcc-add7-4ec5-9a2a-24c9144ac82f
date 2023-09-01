
import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { AdminContext } from '../contexts/AdminContext';
import { User } from '../types/Types';

const AdminUserList: React.FC = () => {
  const { users, fetchAllUsers } = useContext(AdminContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        await fetchAllUsers();
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <View>
      {isLoading ? (
        <Text>Loading users...</Text>
      ) : (
        <View>
          {users.length > 0 ? (
            users.map((user: User) => (
              <View key={user.id}>
                <Text>Name: {user.name}</Text>
                <Text>Email: {user.email}</Text>
                {/* Add more user details if needed */}
              </View>
            ))
          ) : (
            <Text>No users found.</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default AdminUserList;