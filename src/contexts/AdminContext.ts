
import React, { createContext } from 'react';
import { User, fetchAllUserDetails } from '../types/Types';

// Create the AdminContext
export const AdminContext = createContext<{
  users: User[];
  fetchAllUserDetails: () => void;
}>({
  users: [],
  fetchAllUserDetails: () => {},
});

// Create the AdminProvider component
export const AdminProvider: React.FC = ({ children }) => {
  // Function to fetch all user details for admin
  const handleFetchAllUserDetails = () => {
    console.log('Fetching all user details for admin');

    // Add logic to fetch all user details here
    const allUserDetails = fetchAllUserDetails();

    console.log('All user details:', allUserDetails);
  };

  return (
    <AdminContext.Provider
      value={{
        users: [],
        fetchAllUserDetails: handleFetchAllUserDetails,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};