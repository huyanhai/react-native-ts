import {useEffect, useState, FC} from 'react';
import React, {Text, Button, View, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {RootStackParamList} from '../../../router/types';

import {
  setGlobalLang,
  setGlobalToken,
} from '../../../store/modules/global/action';
import {getInfo} from '../../../api/home';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'> & {
  lang: string;
  token: string;
  setLang: typeof setGlobalLang;
  setToken: typeof setGlobalToken;
};

const Home: FC<Props> = ({navigation, lang, token, setLang, setToken}) => {
  const {i18n, t} = useTranslation();
  const [info, setInfo] = useState({});

  const changeLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  const getInfos = async () => {
    const data = await getInfo();
    setInfo(data);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  return (
    <SafeAreaView>
      <View>
        <Text>home{lang}</Text>
        <Text>多语言{t('lang')}</Text>
        <Text>token:{token}</Text>
        <Text>{JSON.stringify(info)}</Text>
        <Button onPress={changeLang} title="change" />
        <Button onPress={getInfos} title="获取消息" />
        <Button onPress={() => setToken('')} title="清除token" />
        <Button
          onPress={() => navigation.navigate('Info')}
          title="跳转到Info"
        />
        {/* <Button
          onPress={() =>
            navigation.navigate('HomeInfo', {
              id: 1,
              info: 'list',
            })
          }
          title="跳转到详情"
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default connect((state: any) => state.global, {
  setLang: setGlobalLang,
  setToken: setGlobalToken,
})(Home);
