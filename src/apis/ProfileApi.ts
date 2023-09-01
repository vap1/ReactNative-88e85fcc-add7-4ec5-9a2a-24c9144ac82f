
import { User, ProfileFormData } from '../types/Types';

// Function to update user profile
export const updateProfile = async (userId: string, profileData: ProfileFormData): Promise<User> => {
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