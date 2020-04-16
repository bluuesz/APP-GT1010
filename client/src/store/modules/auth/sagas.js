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

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSucess(token, user));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique seu dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { email, name, password } = payload;

    yield call(api.post, 'user', {
      name,
      email,
      password,
    });

    Alert.alert(
      'Cadastrado com sucesso',
      "Agora realize o login para ler os melhores gt's"
    );
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Verifique seus dados ou tente novamente em breve'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
