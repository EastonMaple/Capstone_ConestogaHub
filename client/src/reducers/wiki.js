import { GET_WIKIS } from '../actions/types';

const initialState = {
  wikis: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WIKIS:
      return {
        ...state,
        wikis: payload,
      };
    default:
      return state;
  }
}
