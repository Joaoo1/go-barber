import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default AuthLayout;

AuthLayout.propTypes = propTypes;
