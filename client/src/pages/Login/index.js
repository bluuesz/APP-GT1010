import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Navigate } from '../../services/navigation';

import { signInRequest } from '../../store/modules/auth/actions';

import Logo from '../../../assets/Logo.png';

import Input from '../../components/Input';
import Container from '../../components/ContainerAuth';
import { LogoImg, TextLogin, ButtonLogin, TextLinkRegister } from './styles';

export default function Login({ navigation }) {
  const { register, handleSubmit, setValue } = useForm();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const onSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  return (
    <Container>
      <LogoImg source={Logo} />
      <TextLogin>Login</TextLogin>
      <Input
        icon="mail"
        autoCorrect={false}
        placeholder="Digite seu e-mail"
        textContentType="emailAddress"
        onChangeText={(text) => {
          setValue('email', text);
        }}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <Input
        icon="lock"
        autoCorrect={false}
        placeholder="Digite sua senha"
        textContentType="password"
        secureTextEntry
        onChangeText={(text) => {
          setValue('password', text);
        }}
        ref={passwordRef}
        returnKeyType="send"
        onSubmitEditing={handleSubmit(onSubmit)}
      />

      <ButtonLogin loading={loading} onPress={handleSubmit(onSubmit)}>
        Entrar
      </ButtonLogin>

      <TextLinkRegister onPress={() => Navigate(navigation, 'Register')}>
        Criar conta gratuitamente
      </TextLinkRegister>
    </Container>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
