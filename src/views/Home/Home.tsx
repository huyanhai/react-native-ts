import {FC, useEffect, useState} from 'react';
import React, {Text, Button, View} from 'react-native';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {setLang} from '../../store/modules/global/action';
import {getInfo} from '../../api/home';

interface IHomeProps {
  lang: string;
  setLang: (lang: string) => void;
}

const Home: FC<IHomeProps> = ({lang, setLang}) => {
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
    console.log('lang chang', lang);

    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <View>
      <Text>home{lang}</Text>
      <Text>多语言{t('lang')}</Text>
      <Text>{JSON.stringify(info)}</Text>
      <Button onPress={changeLang} title="change" />
      <Button onPress={getInfos} title="获取消息" />
    </View>
  );
};

export default connect((state: any) => state.global, {
  setLang,
})(Home);