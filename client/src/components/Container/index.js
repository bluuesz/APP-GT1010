import React from 'react';
import PropTypes from 'prop-types';

import Background from './styles';

export default function Container({ children }) {
  return <Background>{children}</Background>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};
