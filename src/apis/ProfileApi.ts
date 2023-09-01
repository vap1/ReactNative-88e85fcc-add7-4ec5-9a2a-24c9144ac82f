
import { UserProfileRequest, UserProfileResponse, User } from '../types/Types';

export const getUserProfile = async (request: UserProfileRequest): Promise<UserProfileResponse> => {
  try {
    console.log('Sending getUserProfile API request...');
    console.log('Request:', request);

    // Simulating API call and generating random data
    const userProfile: User = generateRandomUserProfile();

    console.log('Received getUserProfile API response...');
    console.log('Response:', userProfile);

    return { user: userProfile };
  } catch (error) {
    console.error('Error in getUserProfile API:', error);
    throw error;
  }
};

// Helper function to generate random user profile
const generateRandomUserProfile = (): User => {
  // Generate random user profile data here
  return {
    name: 'John Doe',
    email: 'johndoe@example.com',
    contactInfo: '1234567890',
    address: '123 Main St',
    profilePicture: 'https://example.com/profile.jpg',
  };
};