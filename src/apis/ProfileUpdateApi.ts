
import { User, ProfileFormData } from '../types/Types';

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