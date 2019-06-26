import React, { useState } from 'react';
import styled from 'styled-components';

const Banner = () => {
  const [screenWidth] = useState(window.innerWidth);
  return (
    <StyledBanner>
      {screenWidth < 1200 ? (
        <img
          src={require('../../assets/img/header-img.jpg')}
          alt="header img"
        />
      ) : (
        <>
          <img
            src={require('../../assets/img/header-img-1.jpg')}
            alt="header img"
            className="gridItem-1"
          />

          <img
            src={require('../../assets/img/header-img-2.jpg')}
            alt="header img"
            className="gridItem-2"
          />
          <img
            src={require('../../assets/img/header-img-3.jpg')}
            alt="header img"
            className="gridItem-3"
          />
          <img
            src={require('../../assets/img/header-img-4.jpg')}
            alt="header img"
            className="gridItem-4"
          />
          <img
            src={require('../../assets/img/header-img-5.jpg')}
            alt="header img"
            className="gridItem-5"
          />
          <img
            src={require('../../assets/img/header-img-6.jpg')}
            alt="header img"
            className="gridItem-6"
          />
          <img
            src={require('../../assets/img/header-img-7.jpg')}
            alt="header img"
            className="gridItem-7"
          />
          <img
            src={require('../../assets/img/header-img-8.jpg')}
            alt="header img"
            className="gridItem-8"
          />
          <img
            src={require('../../assets/img/header-img-9.jpg')}
            alt="header img"
            className="gridItem-9"
          />
          <img
            src={require('../../assets/img/header-img-10.jpg')}
            alt="header img"
            className="gridItem-10"
          />
          <img
            src={require('../../assets/img/header-img-11.jpg')}
            alt="header img"
            className="gridItem-11"
          />
          <img
            src={require('../../assets/img/header-img-12.jpg')}
            alt="header img"
            className="gridItem-12"
          />
          <img
            src={require('../../assets/img/header-img-13.jpg')}
            alt="header img"
            className="gridItem-13"
          />
        </>
      )}
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
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);

    .gridItem-1 {
      grid-column-start: 1;
      grid-column-end: span 2;
      grid-row-start: 1;
      grid-row-end: span 2;
    }

    .gridItem-2 {
      grid-column-start: 3;
      grid-column-end: span 2;
      grid-row-start: 1;
      grid-row-end: span 2;
    }

    .gridItem-3 {
      grid-column-start: 5;
      grid-column-end: span 2;
      grid-row-start: 1;
      grid-row-end: span 2;
    }

    .gridItem-4 {
      grid-column-start: 7;
      grid-column-end: span 2;
      grid-row-start: 1;
      grid-row-end: span 3;
    }
    .gridItem-5 {
      grid-column-start: 9;
      grid-column-end: span 4;
      grid-row-start: 1;
      grid-row-end: span 4;
    }
    .gridItem-6 {
      grid-column-start: 1;
      grid-column-end: span 4;
      grid-row-start: 3;
      grid-row-end: span 4;
    }
    .gridItem-7 {
      grid-column-start: 5;
      grid-column-end: span 2;
      grid-row-start: 3;
      grid-row-end: span 2;
    }
    .gridItem-8 {
      grid-column-start: 7;
      grid-column-end: span 2;
      grid-row-start: 4;
      grid-row-end: span 2;
    }
    .gridItem-9 {
      grid-column-start: 1;
      grid-column-end: span 2;
      grid-row-start: 5;
      grid-row-end: span 2;
    }
    .gridItem-10 {
      grid-column-start: 3;
      grid-column-end: span 2;
      grid-row-start: 5;
      grid-row-end: span 2;
    }
    .gridItem-11 {
      grid-column-start: 5;
      grid-column-end: span 2;
      grid-row-start: 5;
      grid-row-end: span 2;
    }
    .gridItem-12 {
      grid-column-start: 7;
      grid-column-end: span 2;
      grid-row-start: 6;
      grid-row-end: span 1;
    }
    .gridItem-13 {
      grid-column-start: 9;
      grid-column-end: span 4;
      grid-row-start: 5;
      grid-row-end: span 2;
    }
  }
`;

export default Banner;
