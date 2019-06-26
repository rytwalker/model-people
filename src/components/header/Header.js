import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <MainHeading>Model People</MainHeading>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  text-align: center;
  /* margin-bottom: 2.5rem; */
`;

const MainHeading = styled.h1`
  text-transform: uppercase;
  font-size: 3.6rem;
  padding: 2rem;
`;

export default Header;
