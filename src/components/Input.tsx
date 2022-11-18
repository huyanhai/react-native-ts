import React, {FC, useRef, type MutableRefObject} from 'react';
import {Text, TextInput, View, TextInputProps, StyleSheet} from 'react-native';

type TCInputProps = {
  title: string;
  textColor?: string;
} & TextInputProps;

const CInput: FC<TCInputProps> = props => {
  const {title = '标题', textColor, placeholder} = props;

  const ref = useRef(null) as MutableRefObject<any>;

  const setFocus = () => {
    ref.current?.focus();
  };

  return (
    <View style={style.row} onTouchStart={setFocus}>
      <Text style={[style.text, {color: textColor}]}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={style.input}
        ref={ref}
        {...props}
      />
    </View>
  );
};

const style = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    borderBottomWidth: 1,
  },
  text: {
    width: 80,
    flex: 0,
    fontSize: 14,
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});

export default CInput;
