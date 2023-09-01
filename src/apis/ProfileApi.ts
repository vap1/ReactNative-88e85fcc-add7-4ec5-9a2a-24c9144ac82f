
import { User, ProfileFormData } from '../types/Types';

// Function to update user profile
export const updateUserProfile = async (userId: string, formData: ProfileFormData): Promise<User> => {
  console.log('Updating user profile:', formData);

  // Add logic to update user profile with backend API
  // Replace the following code with actual API call

  // Generate random profile picture URL
  const profilePictureUrl = `https://example.com/profiles/${userId}.jpg`;

  // Create an updated user object
  const updatedUser: User = {
    id: userId,
    name: formData.name,
    email: '',
    password: '',
    profilePicture: profilePictureUrl,
    contactInfo: formData.contactInfo,
    address: formData.address,
  };

  console.log('Updated user profile:', updatedUser);
  return updatedUser;
};