import {lazy} from 'react';
import Tab from '../views/Tab';

import Login from '../views/Login';
import Info from '../Info';
import News from '../News';

export default [
  {
    name: 'Tab',
    components: Tab,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Login',
    components: Login,
    options: {
      title: 'Login页面',
      headerShown: false,
    },
  },
  {
    name: 'Info',
    components: Info,
    options: {
      title: 'Info页面',
    },
  },
  {
    name: 'News',
    components: News,
    options: {
      title: 'News页面',
    },
  },
];
