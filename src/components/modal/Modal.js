import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { primary, white } from '../../utils/colors';

const Modal = ({ animation, children, handleClose }) => {
  return (
    <StyledModal>
      <AnimatedModalCard style={animation}>
        {children}
        <CloseButton onClick={handleClose}>X</CloseButton>
      </AnimatedModalCard>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ModalCard = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 4px;
  background: ${white};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 700;
  &:hover {
    color: ${primary};
  }
`;

const AnimatedModalCard = animated(ModalCard);

export default Modal;
