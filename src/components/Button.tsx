import React, {FC} from 'react';
import {
  type TouchableOpacityProps,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

type TCButtonProps = {
  title: string;
  type?: 'primary' | 'success' | 'danger' | 'dark';
  size?: 'small' | 'default' | 'large';
  round?: boolean;
  circle?: boolean;
  disable?: boolean;
} & TouchableOpacityProps;

const CButton: FC<TCButtonProps> = props => {
  const {
    type = 'primary',
    size = 'default',
    round = true,
    title,
    circle,
    disable,
  } = props;
  const boxStyle = [
    style[type],
    round && style.round,
    circle && style.circle,
    disable && style.disable,
  ];

  return (
    <TouchableOpacity
      {...props}
      style={boxStyle}
      onPress={!disable ? props.onPress : () => {}}
      activeOpacity={disable ? 0.9 : 0.8}>
      <Text style={[style.baseCenter, style[type], style[size]]}>{title}</Text>
    </TouchableOpacity>
  );
};

const size = {
  small: {
    height: 40,
    lineHeight: 40,
  },
  default: {
    height: 50,
    lineHeight: 50,
  },
  large: {
    height: 60,
    lineHeight: 60,
  },
};

const theme = {
  primary: {
    backgroundColor: '#5a9cf8',
    color: '#ffffff',
  },
  success: {
    backgroundColor: '#7ec050',
    color: '#ffffff',
  },
  danger: {
    backgroundColor: '#e46470',
    color: '#ffffff',
  },
  dark: {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
};

const style = StyleSheet.create({
  baseCenter: {
    textAlign: 'center',
    fontSize: 16,
  },
  round: {
    borderRadius: 6,
    overflow: 'hidden',
  },
  circle: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  disable: {
    opacity: 0.9,
  },
  ...theme,
  ...size,
});

export default CButton;
