import React from 'react';
import {Button, Text} from 'react-native';

const User = ({navigation}) => {
  return (
    <>
      <Button title="go news" onPress={() => navigation.navigate('News')} />
      <Text>User</Text>
    </>
  );
};

export default User;
