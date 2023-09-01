
import React, { createContext, useState } from 'react';
import { User, LoginFormData, RegistrationFormData, ProfileFormData, validateEmail, encryptPassword, decryptPassword, login, updateProfile, fetchAllUserDetails } from '../types/Types';

// Create the AuthContext
export const AuthContext = createContext<{
  user: User | null;
  login: (formData: LoginFormData) => void;
  register: (formData: RegistrationFormData) => void;
  logout: () => void;
  updateProfile: (profileData: ProfileFormData) => void;
  fetchAllUserDetails: () => void;
}>({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
  updateProfile: () => {},
  fetchAllUserDetails: () => {},
});

// Create the AuthProvider component
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Function to handle user login
  const handleLogin = (formData: LoginFormData) => {
    const { email, password } = formData;
    console.log(`Logging in user with email: ${email}`);

    // Add login logic here
    const isLoggedIn = login(email, password);

    if (isLoggedIn) {
      // Set the user in the state
      setUser({
        id: '1',
        name: 'John Doe',
        email: email,
        password: password,
        profilePicture: '',
        contactInfo: { phone: '', email: '' },
        address: { street: '', city: '', state: '', country: '', zipCode: '' },
      });
    } else {
      console.log('Login failed');
    }
  };

  // Function to handle user registration
  const handleRegister = (formData: RegistrationFormData) => {
    const { name, email, password } = formData;
    console.log(`Registering user with name: ${name}, email: ${email}`);

    // Add registration logic here

    // Validate email
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      console.log('Invalid email');
      return;
    }

    // Encrypt password
    const encryptedPassword = encryptPassword(password);

    // Create a new user object
    const newUser: User = {
      id: '1',
      name: name,
      email: email,
      password: encryptedPassword,
      profilePicture: '',
      contactInfo: { phone: '', email: '' },
      address: { street: '', city: '', state: '', country: '', zipCode: '' },
    };

    // Set the user in the state
    setUser(newUser);
  };

  // Function to handle user logout
  const handleLogout = () => {
    console.log('Logging out user');
    setUser(null);
  };

  // Function to handle profile update
  const handleUpdateProfile = (profileData: ProfileFormData) => {
    const { name, contactInfo, address, profilePicture } = profileData;
    console.log(`Updating profile for user with ID: ${user?.id}`);
    console.log(`New profile data: ${JSON.stringify(profileData)}`);

    // Add profile update logic here

    // Update the user object with new profile data
    const updatedUser: User = {
      ...user!,
      name: name,
      contactInfo: contactInfo,
      address: address,
      profilePicture: profilePicture,
    };

    // Set the updated user in the state
    setUser(updatedUser);
  };

  // Function to fetch all user details for admin
  const handleFetchAllUserDetails = () => {
    console.log('Fetching all user details for admin');

    // Add logic to fetch all user details here
    const allUserDetails = fetchAllUserDetails();

    console.log('All user details:', allUserDetails);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
        updateProfile: handleUpdateProfile,
        fetchAllUserDetails: handleFetchAllUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};