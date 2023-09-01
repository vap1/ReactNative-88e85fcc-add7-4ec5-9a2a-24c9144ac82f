
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { ProfileFormData, User } from '../types/Types';
import { ProfileContext } from '../contexts/ProfileContext';
import { updateUserProfile } from '../apis/ProfileApi';

const ProfileForm: React.FC = () => {
  const { user, updateUserProfile } = useContext(ProfileContext);
  const [formData, setFormData] = useState<ProfileFormData>({
    name: user?.name || '',
    contactInfo: user?.contactInfo || { phone: '', email: '' },
    address: user?.address || { street: '', city: '', state: '', country: '', zipCode: '' },
  });

  const handleInputChange = (key: keyof ProfileFormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    console.log('Updating user profile...');
    try {
      // Call the updateUserProfile API to update the user profile
      const updatedUser: User = await updateUserProfile(formData);
      console.log('User profile updated successfully:', updatedUser);
      // Show success message to the user
      Alert.alert('Profile updated', 'Your profile has been updated successfully!');
    } catch (error) {
      console.error('Error updating user profile:', error);
      // Show error message to the user
      Alert.alert('Profile update failed', 'An error occurred while updating your profile. Please try again later.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />
      <TextInput
        placeholder="Phone"
        value={formData.contactInfo.phone}
        onChangeText={(value) => handleInputChange('contactInfo', { ...formData.contactInfo, phone: value })}
      />
      <TextInput
        placeholder="Email"
        value={formData.contactInfo.email}
        onChangeText={(value) => handleInputChange('contactInfo', { ...formData.contactInfo, email: value })}
      />
      <TextInput
        placeholder="Street"
        value={formData.address.street}
        onChangeText={(value) => handleInputChange('address', { ...formData.address, street: value })}
      />
      <TextInput
        placeholder="City"
        value={formData.address.city}
        onChangeText={(value) => handleInputChange('address', { ...formData.address, city: value })}
      />
      <TextInput
        placeholder="State"
        value={formData.address.state}
        onChangeText={(value) => handleInputChange('address', { ...formData.address, state: value })}
      />
      <TextInput
        placeholder="Country"
        value={formData.address.country}
        onChangeText={(value) => handleInputChange('address', { ...formData.address, country: value })}
      />
      <TextInput
        placeholder="Zip Code"
        value={formData.address.zipCode}
        onChangeText={(value) => handleInputChange('address', { ...formData.address, zipCode: value })}
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
  );
};

export default ProfileForm;