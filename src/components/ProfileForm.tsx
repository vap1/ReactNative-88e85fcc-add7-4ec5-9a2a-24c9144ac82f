
import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { UserProfileUpdateRequest } from '../types/Types';
import { ProfileContext } from '../contexts/ProfileContext';

const ProfileForm: React.FC = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const { updateUserProfile } = useContext(ProfileContext);

  const handleSave = () => {
    console.log('Saving profile...');
    const profileData: UserProfileUpdateRequest = {
      name,
      contactInfo,
      address,
      profilePicture,
    };
    console.log('Profile data:', profileData);
    updateUserProfile(profileData);
  };

  console.log('ProfileForm initialized');

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Contact Info"
        value={contactInfo}
        onChangeText={setContactInfo}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Profile Picture"
        value={profilePicture}
        onChangeText={setProfilePicture}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default ProfileForm;