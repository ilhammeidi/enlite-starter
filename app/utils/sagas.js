import { all } from 'redux-saga/effects';
import authSagas from 'enl-redux/modules/authSagas';


export default function* sagas() {
  yield all([
    ...authSagas,
  ]);
}
