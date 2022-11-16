import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const User = ({navigation}) => {
  return (
    <>
      <Button title="go news" onPress={() => navigation.navigate('News')} />
      <Text>User</Text>
    </>
  );
};

export default User;
