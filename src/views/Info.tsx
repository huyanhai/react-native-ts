import React, {FC} from 'react';
import {Button, Text} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../router/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Info'>;

const Info: FC<Props> = ({navigation}) => {
  return (
    <>
      <Button title="页面跳转" onPress={() => navigation.navigate('News')} />
      <Text>info</Text>
    </>
  );
};

export default Info;
