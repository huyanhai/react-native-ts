import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import Video from 'react-native-video';
import {produce} from 'immer';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

import {setToken} from '../store/modules/global/action';

import CInput from '../components/Input';
import CButton from '../components/Button';

import bg from '../assets/bg.mp4';
import logo from '../assets/img/logo.png';

const {height} = Dimensions.get('window');

const Login = props => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    mobile: '',
    pwd: '',
  });

  const setValue = (val: string, type: keyof typeof form) => {
    setForm(
      produce(form, darft => {
        darft[type] = val;
      }),
    );
  };

  const login = () => {
    if (form.mobile === '13648355255' && form.pwd === 'hyh895623') {
      props.setToken('123456');
      navigation.navigate('TabHome', {});
    } else {
      Alert.alert('提示', '用户名或密码错误', [
        {
          text: '好的',
        },
      ]);
    }
  };

  return (
    <SafeAreaView>
      <Video
        style={style.bg}
        source={bg}
        repeat={true}
        muted={true}
        resizeMode="cover"
      />
      <Image source={logo} style={style.logo} />
      <View style={style.container}>
        <CInput
          title="用户名"
          placeholder="请输入用户名"
          clearButtonMode="while-editing"
          value={form.mobile}
          maxLength={11}
          onChangeText={e => setValue(e, 'mobile')}
        />
        <View style={style.row20}>
          <CInput
            title="密码"
            placeholder="请输入密码"
            secureTextEntry={true}
            clearButtonMode="while-editing"
            value={form.pwd}
            onChangeText={e => setValue(e, 'pwd')}
          />
        </View>
        <View style={style.row50}>
          <CButton title="登录" onPress={login} type="dark" circle={true} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 100,
  },
  button: {
    height: 50,
  },
  row20: {
    marginTop: 20,
  },
  row50: {
    marginTop: 50,
  },
  bg: {
    position: 'absolute',
    height: height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logo: {
    width: 80,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
  },
});

export default connect((state: any) => state.global, {
  setToken,
})(Login);
