import {lazy} from 'react';
import Tab from '../views/Tab';

export default [
  {
    name: 'Tab',
    components: Tab,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Info',
    components: lazy(() => import('../Info')),
    options: {
      title: 'Info页面',
    },
  },
  {
    name: 'News',
    components: lazy(() => import('../News')),
    options: {
      title: 'News页面',
    },
  },
];
