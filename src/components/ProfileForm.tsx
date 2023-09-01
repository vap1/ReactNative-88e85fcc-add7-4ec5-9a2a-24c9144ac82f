
import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import { ProfileFormData } from '../types/Types';

const ProfileForm: React.FC = () => {
  const { user, updateProfile } = useContext(ProfileContext);
  const [formData, setFormData] = useState<ProfileFormData>({
    name: user?.name || '',
    contactInfo: user?.contactInfo || { phone: '', email: '' },
    address: user?.address || { street: '', city: '', state: '', country: '', zipCode: '' },
    profilePicture: user?.profilePicture || '',
  });

  const handleInputChange = (key: keyof ProfileFormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleUpdateProfile = () => {
    console.log('Updating profile:', formData);

    try {
      // Call the updateProfile function from the ProfileContext to update the user profile
      updateProfile(formData);

      console.log('Profile updated successfully');
    } catch (error) {
      console.log('Error updating profile:', error);
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
      <TextInput
        placeholder="Profile Picture"
        value={formData.profilePicture}
        onChangeText={(value) => handleInputChange('profilePicture', value)}
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
  );
};

export default ProfileForm;