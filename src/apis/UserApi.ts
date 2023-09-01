
import { User, RegistrationFormData, LoginFormData, ProfileFormData } from '../types/Types';

// Function to register a new user
export const registerUser = async (formData: RegistrationFormData): Promise<User> => {
  console.log('Registering user:', formData);

  // Add registration logic here

  // Generate a random user ID
  const userId = Math.random().toString();

  // Create a new user object
  const newUser: User = {
    id: userId,
    name: formData.name,
    email: formData.email,
    password: formData.password,
    profilePicture: '',
    contactInfo: { phone: '', email: '' },
    address: { street: '', city: '', state: '', country: '', zipCode: '' },
  };

  console.log('Registered user:', newUser);

  return newUser;
};

// Function to log in a user
export const loginUser = async (formData: LoginFormData): Promise<User> => {
  console.log('Logging in user:', formData);

  // Add login logic here

  // Generate a random user ID
  const userId = Math.random().toString();

  // Create a new user object
  const user: User = {
    id: userId,
    name: 'John Doe',
    email: formData.email,
    password: formData.password,
    profilePicture: '',
    contactInfo: { phone: '', email: '' },
    address: { street: '', city: '', state: '', country: '', zipCode: '' },
  };

  console.log('Logged in user:', user);

  return user;
};

// Function to update user profile
export const updateUserProfile = async (userId: string, profileData: ProfileFormData): Promise<User> => {
  console.log('Updating user profile:', profileData);

  // Add profile update logic here

  // Generate a random user ID
  const updatedUser: User = {
    id: userId,
    name: profileData.name,
    email: '',
    password: '',
    profilePicture: profileData.profilePicture,
    contactInfo: profileData.contactInfo,
    address: profileData.address,
  };

  console.log('Updated user profile:', updatedUser);

  return updatedUser;
};