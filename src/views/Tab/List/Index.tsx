import type {RootStackParamList} from '../../../router/types';

import React from 'react';
import {Button, Text} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Icon from '../../../components/Icon';

type Props = NativeStackScreenProps<RootStackParamList, 'List'>;

const List = ({navigation}: Props) => {
  return (
    <>
      <Button title="go news" onPress={() => navigation.navigate('News')} />
      <Icon name="icon-my_a" size={20} />
      <Text>List</Text>
    </>
  );
};

export default List;
