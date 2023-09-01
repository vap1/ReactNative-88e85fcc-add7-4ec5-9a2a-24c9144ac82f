
// src/types/Types.ts

// User type
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  profilePicture: string;
  contactInfo: ContactInfo;
  address: Address;
}

// Contact information type
export interface ContactInfo {
  phone: string;
  email: string;
}

// Address type
export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

// Admin type
export interface Admin {
  id: string;
  name: string;
  email: string;
}

// Registration form data type
export interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
}

// Login form data type
export interface LoginFormData {
  email: string;
  password: string;
}

// Profile form data type
export interface ProfileFormData {
  name: string;
  contactInfo: ContactInfo;
  address: Address;
}

// Function to validate email address
export const validateEmail = (email: string): boolean => {
  // Add email validation logic here
  console.log(`Validating email: ${email}`);
  // Return true if email is valid, false otherwise
  return true;
};

// Function to encrypt password
export const encryptPassword = (password: string): string => {
  // Add password encryption logic here
  console.log(`Encrypting password: ${password}`);
  // Return encrypted password
  return password;
};

// Function to decrypt password
export const decryptPassword = (encryptedPassword: string): string => {
  // Add password decryption logic here
  console.log(`Decrypting password: ${encryptedPassword}`);
  // Return decrypted password
  return encryptedPassword;
};

// Function to fetch user details by ID
export const fetchUserDetails = (userId: string): User => {
  // Add logic to fetch user details from backend API
  console.log(`Fetching user details for ID: ${userId}`);
  // Return user details
  return {
    id: userId,
    name: "John Doe",
    email: "johndoe@example.com",
    password: "encryptedPassword",
    profilePicture: "profilePictureUrl",
    contactInfo: {
      phone: "1234567890",
      email: "johndoe@example.com",
    },
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      country: "USA",
      zipCode: "12345",
    },
  };
};

// Function to fetch all user details for admin
export const fetchAllUserDetails = (): User[] => {
  // Add logic to fetch all user details from backend API
  console.log("Fetching all user details for admin");
  // Return array of user details
  return [
    {
      id: "1",
      name: "John Doe",
      email: "johndoe@example.com",
      password: "encryptedPassword",
      profilePicture: "profilePictureUrl",
      contactInfo: {
        phone: "1234567890",
        email: "johndoe@example.com",
      },
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA",
        zipCode: "12345",
      },
    },
    // Add more user details if needed
  ];
};