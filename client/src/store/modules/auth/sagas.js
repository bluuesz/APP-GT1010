import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'user/login', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSucess(token, user));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique seu dados');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
