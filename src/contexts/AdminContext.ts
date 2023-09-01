
import React, { createContext, useState } from 'react';
import { User, fetchAllUserDetails } from '../types/Types';

// Create the AdminContext
export const AdminContext = createContext<{
  users: User[];
  fetchAllUsers: () => void;
}>({
  users: [],
  fetchAllUsers: () => {},
});

// AdminProvider component
export const AdminProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  // Fetch all users function
  const fetchAllUsers = () => {
    console.log('Fetching all users...');
    // Add logic to fetch all user details using backend API
    const allUsers = fetchAllUserDetails();
    // Set the users state with the fetched user details
    setUsers(allUsers);
    console.log('Users fetched successfully!');
  };

  return (
    <AdminContext.Provider value={{ users, fetchAllUsers }}>
      {children}
    </AdminContext.Provider>
  );
};