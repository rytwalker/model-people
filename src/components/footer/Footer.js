import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>© {new Date().getFullYear()} by Model People</StyledFooter>
  );
};

const StyledFooter = styled.footer`
  font-size: 1.4rem;
  text-align: center;
  padding: 2rem;
`;

export default Footer;
