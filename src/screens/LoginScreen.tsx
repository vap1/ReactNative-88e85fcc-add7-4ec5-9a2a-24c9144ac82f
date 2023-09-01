
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
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

    try {
      // Call the loginUser API to log in the user
      const loggedInUser = await loginUser(formData);

      console.log('Logged in user:', loggedInUser);

      // Reset the form data
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log('Error logging in user:', error);
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
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;