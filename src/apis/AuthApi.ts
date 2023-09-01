
import { User, RegistrationFormData, LoginFormData, ProfileFormData } from '../types/Types';

// Function to register a new user
export const registerUser = async (formData: RegistrationFormData): Promise<User> => {
  console.log('Registering user:', formData);
  // Add logic to register user with backend API
  // Replace the following code with actual API call

  // Generate random user ID
  const userId = Math.random().toString();

  // Create a new user object
  const newUser: User = {
    id: userId,
    name: formData.name,
    email: formData.email,
    password: formData.password,
    profilePicture: '',
    contactInfo: {
      phone: '',
      email: formData.email,
    },
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    },
  };

  console.log('Registered user:', newUser);
  return newUser;
};

// Function to login a user
export const loginUser = async (formData: LoginFormData): Promise<User> => {
  console.log('Logging in user:', formData);
  // Add logic to authenticate user with backend API
  // Replace the following code with actual API call

  // Generate random user ID
  const userId = Math.random().toString();

  // Create a logged in user object
  const loggedInUser: User = {
    id: userId,
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

  console.log('Logged in user:', loggedInUser);
  return loggedInUser;
};

// Function to update user profile
export const updateUserProfile = async (userId: string, formData: ProfileFormData): Promise<User> => {
  console.log('Updating user profile:', formData);
  // Add logic to update user profile with backend API
  // Replace the following code with actual API call

  // Create an updated user object
  const updatedUser: User = {
    id: userId,
    name: formData.name,
    email: '',
    password: '',
    profilePicture: '',
    contactInfo: formData.contactInfo,
    address: formData.address,
  };

  console.log('Updated user profile:', updatedUser);
  return updatedUser;
};

// Function to fetch user details by ID
export const fetchUserDetails = async (userId: string): Promise<User> => {
  console.log('Fetching user details for ID:', userId);
  // Add logic to fetch user details from backend API
  // Replace the following code with actual API call

  // Create a user object
  const user: User = {
    id: userId,
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'encryptedPassword',
    profilePicture: 'profilePictureUrl',
    contactInfo: {
      phone: '1234567890',
      email: 'johndoe@example.com',
    },
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '12345',
    },
  };

  console.log('Fetched user details:', user);
  return user;
};

// Function to fetch all user details for admin
export const fetchAllUserDetails = async (): Promise<User[]> => {
  console.log('Fetching all user details for admin');
  // Add logic to fetch all user details from backend API
  // Replace the following code with actual API call

  // Create an array of user objects
  const users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'encryptedPassword',
      profilePicture: 'profilePictureUrl',
      contactInfo: {
        phone: '1234567890',
        email: 'johndoe@example.com',
      },
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        zipCode: '12345',
      },
    },
    // Add more user details if needed
  ];

  console.log('Fetched all user details:', users);
  return users;
};