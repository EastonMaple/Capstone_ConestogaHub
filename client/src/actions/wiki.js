import api from '../utils/api';
import {
  GET_WIKIS,
  WIKI_ERROR,
} from './types';

// get all wikis
export const getWikis = () => async (dispatch) => {
  try {
    const res = await api.get('/wiki');
    dispatch({
      type: GET_WIKIS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: WIKI_ERROR,
    });
  }
};