import {AnyAction} from 'redux';
import produce from 'immer';

import * as types from '../../mutation-types';

const globalState = {
  lang: 'zh',
};

const global = (state = globalState, action: AnyAction) => {
  return produce(state, draftState => {
    switch (action.type) {
      case types.SET_LANG:
        draftState.lang = action.lang;
        break;

      default:
        return draftState;
    }
  });
};

export default global;
