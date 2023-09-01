
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchAllUserDetails } from '../apis/AdminApi';
import { User } from '../types/Types';

const AdminUserDetailsScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const fetchedUsers = await fetchAllUserDetails();
        setUsers(fetchedUsers);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  console.log('Users:', users);

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

export default AdminUserDetailsScreen;