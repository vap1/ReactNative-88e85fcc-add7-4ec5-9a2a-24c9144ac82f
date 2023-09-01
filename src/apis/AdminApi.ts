
import { User } from '../types/Types';

// Function to fetch all user details for admin
export const fetchAllUserDetails = (): User[] => {
  console.log('Fetching all user details for admin');

  // Add logic to fetch all user details here
  const allUserDetails: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password',
      profilePicture: '',
      contactInfo: { phone: '1234567890', email: 'johndoe@example.com' },
      address: { street: '123 Main St', city: 'New York', state: 'NY', country: 'USA', zipCode: '12345' },
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      password: 'password',
      profilePicture: '',
      contactInfo: { phone: '9876543210', email: 'janesmith@example.com' },
      address: { street: '456 Elm St', city: 'Los Angeles', state: 'CA', country: 'USA', zipCode: '67890' },
    },
  ];

  console.log('All user details:', allUserDetails);

  return allUserDetails;
};