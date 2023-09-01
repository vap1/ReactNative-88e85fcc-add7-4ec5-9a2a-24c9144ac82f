
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Step 1: User enters email and password');
    console.log('Email:', email);
    console.log('Password:', password);

    // Perform login API call here
    console.log('Step 2: User submits login form');

    // Example API call using fetch:
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login response:', data);

        // Handle login success or failure here
        if (data.success) {
          console.log('Login successful!');
          // Redirect to the Profile Screen or perform any other necessary actions
        } else {
          console.log('Login failed:', data.message);
          // Display error message to the user or perform any other necessary actions
        }
      })
      .catch((error) => {
        console.log('Login error:', error);
        // Handle error here
      });
  };

  console.log('LoginForm initialized');

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;