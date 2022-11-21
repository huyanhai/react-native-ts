import {Dispatch} from 'react';
import * as types from '../../mutation-types';

export const setGlobalLang = (lang: string) => ({
  type: types.SET_LANG,
  lang,
});

export const setGlobalToken = (token: string) => ({
  type: types.SET_TOKEN,
  token,
});

export const asyncSet = () => {
  return async (dispatch: Dispatch<any>) => {
    const lang = await new Promise(resolve => {
      setTimeout(() => {
        resolve('ja');
      }, 3000);
    });
    dispatch({
      type: types.SET_LANG,
      lang,
    });
  };
};
