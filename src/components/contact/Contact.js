import React, { useState } from 'react';
import styled from 'styled-components';
import { useTransition } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import ContactForm from './ContactForm';
import Modal from '../modal/Modal';
import SectionHeading from '../../elements/SectionHeading';

const Contact = () => {
  const [toggle, setToggle] = useState(false);
  const transition = useTransition(toggle, null, {
    from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)' }
  });
  return (
    <section style={{ marginBottom: '3rem' }}>
      <SectionHeading>Contact</SectionHeading>
      <div
        onClick={() => setToggle(!toggle)}
        style={{ marginBottom: '3rem', color: '#17A398' }}
      >
        wearemodelpeople@gmail.com
      </div>
      {transition.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal animation={animation} handleClose={() => setToggle(false)}>
              <ContactForm />
            </Modal>
          )
      )}

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
