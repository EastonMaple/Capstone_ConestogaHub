import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// this function will dispatch an action to set an alert
// the alert will be removed after a specified timeout
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  // we are using uuid to generate a unique id
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  // after the specified timeout, we will dispatch an action to remove the alert
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
