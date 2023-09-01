
import React, { createContext, useState } from 'react';
import { User } from '../types/Types';

// Create the AdminContext
export const AdminContext = createContext<{
  users: User[];
  fetchAllUsers: () => void;
}>({
  users: [],
  fetchAllUsers: () => {},
});

// Create the AdminProvider component
export const AdminProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  // Function to fetch all user details
  const fetchAllUsers = () => {
    console.log('Fetching all user details');
    // Add logic to fetch all user details from backend API
    // Set the users state with the fetched data
    setUsers([
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
    ]);
  };

  return (
    <AdminContext.Provider value={{ users, fetchAllUsers }}>
      {children}
    </AdminContext.Provider>
  );
};