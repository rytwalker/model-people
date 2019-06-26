import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <StyledBanner>
      <img src={require('../../assets/img/header-img.jpg')} alt="header img" />
    </StyledBanner>
  );
};

const StyledBanner = styled.section`
  height: auto;
  width: 100%;
  background: #c4c4c4;
  border-radius: 4px;
  margin-bottom: 3rem;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
`;

export default Banner;
