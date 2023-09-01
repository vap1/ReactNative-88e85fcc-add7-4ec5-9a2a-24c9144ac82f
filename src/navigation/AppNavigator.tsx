
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../contexts/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AdminUserDetailsScreen from '../screens/AdminUserDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const { user } = useContext(AuthContext);

  console.log('Rendering AppNavigator component...');

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="AdminUserDetails" component={AdminUserDetailsScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;