import React from 'react';
import PropTypes from 'prop-types';

import ContainerAuth from './styles';

export default function Container({ children }) {
  return <ContainerAuth>{children}</ContainerAuth>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};
