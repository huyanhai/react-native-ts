import React from 'react';
import {Button, Text} from 'react-native';

const HomeInfo = ({navigation}) => {
  return (
    <>
      <Button title="切换tab" onPress={() => navigation.navigate('TabMe')} />
      <Text>HomeInfo</Text>
    </>
  );
};

export default HomeInfo;
