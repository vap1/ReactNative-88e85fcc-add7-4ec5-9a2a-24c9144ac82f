
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { LoginFormData, loginUser } from '../apis/AuthApi';

const LoginScreen: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleInputChange = (key: keyof LoginFormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleLogin = async () => {
    console.log('Logging in user:', formData);

    // Login user
    try {
      const loggedInUser = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      console.log('Logged in user:', loggedInUser);

      // Reset form data
      setFormData({
        email: '',
        password: '',
      });

      Alert.alert('Login Successful', 'You have successfully logged in!');
    } catch (error) {
      console.error('Error logging in user:', error);
      Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;