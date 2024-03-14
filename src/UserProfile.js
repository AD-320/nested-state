import React, { useState } from 'react';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    address: {
      street: '123 John St',
      city: 'Seattle',
      country: 'United States'
    }
  });

  // Initialize local state for the input fields
  const [inputFields, setInputFields] = useState({
    street: userProfile.address.street,
    city: userProfile.address.city,
    country: userProfile.address.country
  });

  // Function to update local input fields state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateAddress = () => {
    setUserProfile(currentState => ({
      ...currentState,
      address: {
        ...currentState.address,
        ...inputFields // Use the local state values
      }
    }));
  };
  

  return (
    <div>
    <input
      type="text"
      name="street"
      placeholder="Street"
      value={inputFields.street}
      onChange={handleInputChange}
    />
    <input
      type="text"
      name="city"
      placeholder="City"
      value={inputFields.city}
      onChange={handleInputChange}
    />
    <input
      type="text"
      name="country"
      placeholder="Country"
      value={inputFields.country}
      onChange={handleInputChange}
    />
    <button onClick={updateAddress}>Update Address</button>
    <div>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <p>Address: {`${userProfile.address.street}, ${userProfile.address.city}, ${userProfile.address.country}`}</p>
    </div>
  </div>
  );
};

export default UserProfile;
