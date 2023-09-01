
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    console.log('Step 2: User submits the registration form');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Perform API call for user registration here
    console.log('Performing user registration API call...');

    // Assuming the API call is successful
    console.log('Registration successful');
  };

  console.log('Step 1: User visits the registration page');

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationScreen;