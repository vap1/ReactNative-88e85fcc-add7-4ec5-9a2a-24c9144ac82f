
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Step 1: User enters email and password');
    console.log('Email:', email);
    console.log('Password:', password);

    // Perform login API call here
    console.log('Performing login API call...');

    // Assuming the API call is successful
    console.log('Step 2: User submits login form');
  };

  console.log('Rendering login screen...');

  return (
    <View>
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;