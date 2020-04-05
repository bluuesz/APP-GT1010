import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../assets/Logo.png';
import { Container, LogoApp } from '../../components/_layouts/authenticate';
import {
  BtnLogin,
  TextBtnLogin,
  ContentOther,
  Hr,
  Other,
  TextBtnSignup,
  BtnSignup,
  NextApp,
} from './styles';

const OpenApp = ({ navigation }) => {
  return (
    <Container>
      <LogoApp source={Logo} />
      <BtnLogin onPress={() => navigation.navigate('Login')}>
        <TextBtnLogin>Entrar</TextBtnLogin>
      </BtnLogin>

      <ContentOther>
        <Hr />
        <Other>OU</Other>
        <Hr />
      </ContentOther>

      <BtnSignup onPress={() => navigation.navigate('Register')}>
        <TextBtnSignup>Registrar</TextBtnSignup>
      </BtnSignup>

      <NextApp>Continuar sem login</NextApp>
    </Container>
  );
};

OpenApp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default OpenApp;
