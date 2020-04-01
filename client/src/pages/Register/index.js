import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../assets/Logo.png';

import {
  Container,
  LogoApp,
  TitleAuth,
  NameInput,
  MailInput,
  PasswordInput,
  BtnLogin,
  TextBtn,
  TextLoginOrRegister,
} from '../../components/_layouts/authenticate';

const Register = ({ navigation }) => {
  return (
    <Container>
      <LogoApp source={Logo} />
      <TitleAuth>Registro</TitleAuth>
      <NameInput
        autoCorrect={false}
        autoCapitalize
        placeholder="Seu nome"
        textContentType="name"
      />
      <MailInput
        autoCorrect={false}
        autoCapitalize={false}
        placeholder="Seu email"
        textContentType="emailAddress"
      />
      <PasswordInput
        autoCorrect={false}
        autoCapitalize={false}
        placeholder="********"
        textContentType="password"
        secureTextEntry
      />

      <BtnLogin>
        <TextBtn>Cadastrar</TextBtn>
      </BtnLogin>

      <TextLoginOrRegister onPress={() => navigation.navigate('Login')}>
        Efetuar Login
      </TextLoginOrRegister>
    </Container>
  );
};

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Register;
