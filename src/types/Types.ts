
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
  profilePicture: string;
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

// Function to log user in
export const login = (email: string, password: string): boolean => {
  // Add login logic here
  console.log(`Logging in user with email: ${email}`);
  // Return true if login is successful, false otherwise
  return true;
};

// Function to update user profile
export const updateProfile = (userId: string, profileData: ProfileFormData): boolean => {
  // Add profile update logic here
  console.log(`Updating profile for user with ID: ${userId}`);
  console.log(`New profile data: ${JSON.stringify(profileData)}`);
  // Return true if profile update is successful, false otherwise
  return true;
};

// Function to fetch all user details for admin
export const fetchAllUserDetails = (): User[] => {
  // Add logic to fetch all user details here
  console.log("Fetching all user details for admin");
  // Return array of user details
  return [];
};