import {Button, Text} from 'react-native';

const List = ({navigation}) => {
  return (
    <>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="返回" onPress={() => navigation.goBack()} />
    </>
  );
};

export default List;
