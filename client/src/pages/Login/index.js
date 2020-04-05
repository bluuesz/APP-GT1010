import React from 'react';

import PropTypes from 'prop-types';

import Logo from '../../../assets/Logo.png';

import {
  Container,
  LogoApp,
  TitleAuth,
  MailInput,
  PasswordInput,
  BtnLogin,
  TextBtn,
  TextLoginOrRegister,
} from '../../components/_layouts/authenticate';

const Login = ({ navigation }) => {
  return (
    <Container>
      <LogoApp source={Logo} />
      <TitleAuth>Login</TitleAuth>
      <MailInput
        autoCorrect={false}
        placeholder="Seu email"
        textContentType="emailAddress"
      />
      <PasswordInput
        autoCorrect={false}
        placeholder="********"
        textContentType="password"
        secureTextEntry
      />

      <BtnLogin>
        <TextBtn>Entrar</TextBtn>
      </BtnLogin>

      <TextLoginOrRegister onPress={() => navigation.navigate('Register')}>
        Criar conta gratuitamente
      </TextLoginOrRegister>
    </Container>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Login;
