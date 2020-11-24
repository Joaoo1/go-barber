import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default DefaultLayout;

DefaultLayout.propTypes = propTypes;
