import React, {FC} from 'react';
import {createIconSet} from 'react-native-vector-icons';

import glyphmap from '../assets/fonts/format.json';

console.log(glyphmap);

const Icons = createIconSet(glyphmap, 'iconfont', 'iconfont.ttf');

interface IIconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: FC<IIconProps> = props => {
  return <Icons {...props} />;
};

export default Icon;
