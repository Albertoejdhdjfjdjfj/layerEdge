
import {
  WITHDRAW_POP_UP_CHANGE,
  WARNING_POP_UP_CHANGE,
  ASSETS_POP_UP_CHANGE,
  PROFILE_MENU_CHANGE,
  PROFILE_EDIT_CHANGE,
  TRANSACTION_HISTORY_CHANGE,
  SET_NETWORK,
  SET_TOKEN
} from '../../actions/components_control/actionsTypes';

const initialState = {
  withdraw_pop_up: false,
  warning_pop_up :false,
  assets_pop_up :false,
  profile_menu: false,
  profile_edit: false,
  transaction_history: false,
  network: false,
  token: false
};

export default function componentsControlReducer(state = initialState, action) {
  switch (action.type) {
    case WITHDRAW_POP_UP_CHANGE:
      return { ...state, withdraw_pop_up: !state.withdraw_pop_up };
    case WARNING_POP_UP_CHANGE:
      return { ...state, warning_pop_up: !state.warning_pop_up };
      case ASSETS_POP_UP_CHANGE:
        return { ...state, assets_pop_up: !state.assets_pop_up };
    case PROFILE_MENU_CHANGE:
      return { ...state, profile_menu: !state.profile_menu };
    case PROFILE_EDIT_CHANGE:
      return { ...state, profile_edit: !state.profile_edit };
    case TRANSACTION_HISTORY_CHANGE:
      return { ...state, transaction_history: !state.transaction_history };
    case SET_NETWORK:
      return { ...state, network: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}
