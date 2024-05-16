import {
  WITHDRAW_POP_UP_CHANGE,
  WARNING_POP_UP_CHANGE,
  ASSETS_POP_UP_CHANGE,
  PROFILE_MENU_CHANGE,
  PROFILE_EDIT_CHANGE,
  TRANSACTION_HISTORY_CHANGE,
  SET_TOKEN,
  SET_NETWORK
} from './actionsTypes';

import { createAction } from 'redux-actions';

export const withdraw_pop_up_change = createAction(WITHDRAW_POP_UP_CHANGE);

export const warning_pop_up_change = createAction(WARNING_POP_UP_CHANGE);

export const assets_pop_up_change = createAction(ASSETS_POP_UP_CHANGE);

export const profile_menu_change = createAction(PROFILE_MENU_CHANGE);

export const profile_edit_change = createAction(PROFILE_EDIT_CHANGE);

export const transaction_history_change = createAction(TRANSACTION_HISTORY_CHANGE);

export const set_network = createAction(SET_NETWORK);

export const set_token = createAction(SET_TOKEN);
