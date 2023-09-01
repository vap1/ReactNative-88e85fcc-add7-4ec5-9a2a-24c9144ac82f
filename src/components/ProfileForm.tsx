
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { ProfileFormData, User } from '../types/Types';
import { ProfileContext } from '../contexts/ProfileContext';
import { updateUserProfile } from '../apis/ProfileApi';

const ProfileForm: React.FC = () => {
  const { user, updateProfile } = useContext(ProfileContext);
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

  const handleSave = async () => {
    console.log('Saving profile:', formData);

    // Update user profile
    try {
      const updatedUser = await updateUserProfile(user?.id || '', formData);

      console.log('Updated user profile:', updatedUser);

      // Update profile context
      updateProfile(formData);

      Alert.alert('Profile Saved', 'Your profile has been successfully saved!');
    } catch (error) {
      console.error('Error saving profile:', error);
      Alert.alert('Profile Save Failed', 'An error occurred while saving your profile. Please try again later.');
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
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default ProfileForm;