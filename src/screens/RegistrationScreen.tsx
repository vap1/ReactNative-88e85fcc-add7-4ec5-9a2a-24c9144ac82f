
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { RegistrationFormData, validateEmail, encryptPassword } from '../types/Types';
import { registerUser } from '../apis/AuthApi';

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
    console.log('Registering user:', formData);

    // Validate email
    const isEmailValid = validateEmail(formData.email);
    if (!isEmailValid) {
      console.log('Invalid Email');
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    // Encrypt password
    const encryptedPassword = encryptPassword(formData.password);

    // Register user
    try {
      const newUser = await registerUser({
        name: formData.name,
        email: formData.email,
        password: encryptedPassword,
      });

      console.log('Registered user:', newUser);

      // Reset form data
      setFormData({
        name: '',
        email: '',
        password: '',
      });

      Alert.alert('Registration Successful', 'You have successfully registered!');
    } catch (error) {
      console.error('Error registering user:', error);
      Alert.alert('Registration Failed', 'An error occurred while registering. Please try again later.');
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