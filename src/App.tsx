
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContextProvider } from './contexts/AuthContext';
import { ProfileContextProvider } from './contexts/ProfileContext';
import { AdminContextProvider } from './contexts/AdminContext';
import AppNavigator from './navigation/AppNavigator';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    console.log('App started');
    // Additional initialization logic can be added here
  }, []);

  console.log('Initializing App');

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <ProfileContextProvider>
          <AdminContextProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="AppNavigator"
                component={AppNavigator}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </AdminContextProvider>
        </ProfileContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;