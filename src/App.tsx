
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from './contexts/AuthContext';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminUserDetailsScreen from './screens/AdminUserDetailsScreen';

const App: React.FC = () => {
  const { user } = useContext(AuthContext);

  console.log('User:', user);

  return (
    <View>
      {user ? (
        <>
          <Text>Welcome, {user.name}!</Text>
          <ProfileScreen />
          <AdminUserDetailsScreen />
        </>
      ) : (
        <>
          <Text>Please log in or register.</Text>
          <LoginScreen />
          <RegistrationScreen />
        </>
      )}
    </View>
  );
};

export default App;