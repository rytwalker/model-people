import React from 'react';
import styled from 'styled-components';

const SectionHeading = ({ children }) => {
  return <StyledSectionHeading>{children}</StyledSectionHeading>;
};

const StyledSectionHeading = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export default SectionHeading;
