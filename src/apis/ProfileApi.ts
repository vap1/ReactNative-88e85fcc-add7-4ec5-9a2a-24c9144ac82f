
import { UserProfileRequest, UserProfileResponse, User } from '../types/Types';

export const getUserProfile = async (request: UserProfileRequest): Promise<UserProfileResponse> => {
  try {
    console.log('Sending getUserProfile API request...');
    console.log('Request:', request);

    // Simulating API call and generating random data
    const userProfile: User = generateRandomProfile();

    console.log('Received getUserProfile API response...');
    console.log('Response:', userProfile);

    return { user: userProfile };
  } catch (error) {
    console.error('Error in getUserProfile API:', error);
    throw error;
  }
};

// Helper function to generate random profile data
const generateRandomProfile = (): User => {
  // Generate random profile data here
  return {
    name: 'John Doe',
    email: 'johndoe@example.com',
    contactInfo: '1234567890',
    address: '123 Main St',
    profilePicture: 'https://example.com/profile.jpg',
  };
};

console.log('ProfileApi.ts loaded successfully');