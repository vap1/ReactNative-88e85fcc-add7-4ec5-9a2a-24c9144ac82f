
import { User, RegistrationFormData, LoginFormData, ProfileFormData } from '../types/Types';

// Function to register a new user
export const registerUser = async (formData: RegistrationFormData): Promise<User> => {
  console.log('Registering user...');
  // Add logic to register a new user using backend API
  // Generate random user data for demonstration purposes
  const newUser: User = {
    id: '1',
    name: formData.name,
    email: formData.email,
    password: 'encryptedPassword',
    profilePicture: 'profilePictureUrl',
    contactInfo: {
      phone: '1234567890',
      email: formData.email,
    },
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '12345',
    },
  };
  console.log('User registered successfully!');
  return newUser;
};

// Function to login a user
export const loginUser = async (formData: LoginFormData): Promise<User> => {
  console.log('Logging in...');
  // Add logic to authenticate user credentials using backend API
  // Generate random user data for demonstration purposes
  const user: User = {
    id: '1',
    name: 'John Doe',
    email: formData.email,
    password: 'encryptedPassword',
    profilePicture: 'profilePictureUrl',
    contactInfo: {
      phone: '1234567890',
      email: formData.email,
    },
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '12345',
    },
  };
  console.log('Login successful!');
  return user;
};

// Function to update user profile
export const updateUserProfile = async (formData: ProfileFormData): Promise<User> => {
  console.log('Updating user profile...');
  // Add logic to update user profile using backend API
  // Generate random user data for demonstration purposes
  const updatedUser: User = {
    id: '1',
    name: formData.name,
    email: 'johndoe@example.com',
    password: 'encryptedPassword',
    profilePicture: 'profilePictureUrl',
    contactInfo: formData.contactInfo,
    address: formData.address,
  };
  console.log('User profile updated successfully!');
  return updatedUser;
};