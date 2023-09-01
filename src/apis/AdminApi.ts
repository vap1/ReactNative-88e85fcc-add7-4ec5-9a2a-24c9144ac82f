
import { User } from '../types/Types';

// Function to fetch all user details for admin
export const fetchAllUserDetails = (): User[] => {
  console.log('Fetching all user details for admin');
  
  // Add logic to fetch all user details from backend API
  // Generate random user data for demonstration purposes
  const allUsers: User[] = [
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

  console.log('All user details fetched successfully!');
  return allUsers;
};