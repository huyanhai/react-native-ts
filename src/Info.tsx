import React from 'react';
import {Button, Text} from 'react-native';

const Info = ({navigation}) => {
  return (
    <>
      <Button title="页面跳转" onPress={() => navigation.navigate('News')} />
      <Text>info</Text>
    </>
  );
};

export default Info;
