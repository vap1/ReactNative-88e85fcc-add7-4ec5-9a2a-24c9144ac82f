
import { AdminUserDetailsRequest, AdminUserDetailsResponse, User } from '../types/Types';

export const getAdminUserDetails = async (request: AdminUserDetailsRequest): Promise<AdminUserDetailsResponse> => {
  try {
    console.log('Calling getAdminUserDetails API');
    // Simulating API call and generating random data
    const users: User[] = generateRandomUsers();

    console.log('getAdminUserDetails API response:', users);
    return { users };
  } catch (error) {
    console.error('Error in getAdminUserDetails API:', error);
    throw error;
  }
};

// Helper function to generate random user data
const generateRandomUsers = (): User[] => {
  // Generate random user data here
  return [
    { name: 'John Doe', email: 'johndoe@example.com' },
    { name: 'Jane Smith', email: 'janesmith@example.com' },
    // Add more random user data as needed
  ];
};

console.log('AdminApi.ts initialized');