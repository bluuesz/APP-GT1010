import React from 'react';
import PropTypes from 'prop-types';
import { Back } from '../../services/navigation';

import Logo from '../../../assets/Logo.png';

import Input from '../../components/Input';
import Container from '../../components/ContainerAuth';
import { LogoImg, TextRegister, ButtonRegister, TextLinkLogin } from './styles';

const Register = ({ navigation }) => {
  return (
    <Container>
      <LogoImg source={Logo} />
      <TextRegister>Registro</TextRegister>
      <Input
        icon="person-outline"
        autoCorrect={false}
        placeholder="Seu nome"
        textContentType="name"
      />
      <Input
        icon="mail"
        autoCorrect={false}
        placeholder="Seu email"
        textContentType="emailAddress"
      />
      <Input
        icon="lock"
        autoCorrect={false}
        placeholder="********"
        textContentType="password"
        secureTextEntry
      />

      <ButtonRegister>Cadastrar</ButtonRegister>

      <TextLinkLogin onPress={() => Back(navigation)}>
        Efetuar Login
      </TextLinkLogin>
    </Container>
  );
};

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Register;
