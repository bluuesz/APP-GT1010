import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Back } from '../../services/navigation';

import { signUpRequest } from '../../store/modules/auth/actions';

import Logo from '../../../assets/Logo.png';

import Input from '../../components/Input';
import Container from '../../components/Container';
import { LogoImg, TextRegister, ButtonRegister, TextLinkLogin } from './styles';

export default function Register({ navigation }) {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password));

    setTimeout(() => {
      navigation.navigate('Login');
    }, 1500);
  };

  useEffect(() => {
    register('email');
    register('name');
    register('password');
  }, [register]);

  return (
    <Container>
      <LogoImg source={Logo} />
      <TextRegister>Registro</TextRegister>
      <Input
        icon="person-outline"
        autoCorrect={false}
        placeholder="Seu nome"
        textContentType="name"
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current.focus()}
        onChangeText={(text) => {
          setValue('name', text);
        }}
      />
      <Input
        icon="mail"
        autoCorrect={false}
        placeholder="Seu email"
        textContentType="emailAddress"
        ref={emailRef}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
        onChangeText={(text) => {
          setValue('email', text);
        }}
      />
      <Input
        icon="lock"
        autoCorrect={false}
        placeholder="********"
        textContentType="password"
        secureTextEntry
        ref={passwordRef}
        returnKeyType="send"
        onChangeText={(text) => {
          setValue('password', text);
        }}
        onSubmitEditing={handleSubmit(onSubmit)}
      />

      <ButtonRegister onPress={handleSubmit(onSubmit)}>
        Cadastrar
      </ButtonRegister>

      <TextLinkLogin onPress={() => Back(navigation)}>
        Efetuar Login
      </TextLinkLogin>
    </Container>
  );
}

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
