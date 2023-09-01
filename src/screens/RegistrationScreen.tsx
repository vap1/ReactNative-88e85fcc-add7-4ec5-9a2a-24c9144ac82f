
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { RegistrationFormData, registerUser, validateEmail } from '../apis/AuthApi';

const RegistrationScreen: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (key: keyof RegistrationFormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleRegister = async () => {
    console.log('Registering user...');

    // Validate email
    if (!validateEmail(formData.email)) {
      console.log('Invalid email');
      Alert.alert('Invalid email', 'Please enter a valid email address');
      return;
    }

    try {
      // Call the registerUser API to register the user
      const newUser = await registerUser(formData);
      console.log('User registered successfully:', newUser);

      // Show success message to the user
      Alert.alert('Registration successful', 'You have successfully registered!');

      // Reset the form data
      setFormData({
        name: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error registering user:', error);

      // Show error message to the user
      Alert.alert('Registration failed', 'An error occurred while registering. Please try again later.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />
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
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationScreen;