import React, {FC} from 'react';

import {Text} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../router/types';

type Props = NativeStackScreenProps<RootStackParamList, 'News'>;

const News: FC<Props> = () => {
  return <Text>News</Text>;
};

export default News;
