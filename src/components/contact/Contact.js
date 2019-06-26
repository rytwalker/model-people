import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import SectionHeading from '../../elements/SectionHeading';

const Contact = () => {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <SectionHeading>Contact</SectionHeading>
      <div style={{ marginBottom: '3rem', color: '#17A398' }}>
        wearemodelpeople@gmail.com
      </div>
      <SocialIconContainer>
        <SocialIcon href="https://instagram.com" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
        <SocialIcon href="https://facebook.com" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialIcon>
      </SocialIconContainer>
    </section>
  );
};

const SocialIconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SocialIcon = styled.a`
  color: #000;
  font-size: 2.4rem;
  transition: all 0.2s;
  &:hover {
    color: #c4c4c4;
  }
`;

export default Contact;
