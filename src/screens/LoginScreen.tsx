
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
    console.log('Logging in...');

    try {
      // Call the loginUser API to authenticate the user
      const user = await loginUser(formData);
      console.log('User logged in successfully:', user);

      // Show success message to the user
      Alert.alert('Login successful', 'You have successfully logged in!');

      // Reset the form data
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error logging in:', error);

      // Show error message to the user
      Alert.alert('Login failed', 'Invalid email or password. Please try again.');
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