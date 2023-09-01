
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { RegistrationFormData, registerUser } from '../apis/AuthApi';

const RegistrationForm: React.FC = () => {
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

    try {
      // Call the registerUser API to register the user
      const registeredUser = await registerUser(formData);

      console.log('Registered user:', registeredUser);

      // Reset the form data
      setFormData({
        name: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.log('Error registering user:', error);
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
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationForm;