import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default Container;
