import { INIT, CLEAR } from '../constants/reduxFormConstants';

const initialState = {
  formValues: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INIT:
      return state.withMutations((mutableState) => {
        mutableState.set('formValues', action.data);
      });
    case CLEAR:
      return state.withMutations((mutableState) => {
        mutableState.set('formValues', []);
      });
    default:
      return state;
  }
}
