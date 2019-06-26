import React from 'react';
import styled from 'styled-components';
import { black, primary, white } from '../../utils/colors';
const ContactForm = () => {
  return (
    <StyledForm>
      <FormTitle>Contact Me</FormTitle>
      <FormGroup>
        <FormLabel>Name</FormLabel>
        <FormInput type="text" />
      </FormGroup>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <FormInput type="text" />
      </FormGroup>
      <FormGroup>
        <FormLabel>Message</FormLabel>
        <FormTextArea />
      </FormGroup>
      <FormButton>Submit</FormButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
`;

const FormInput = styled.input`
  font-size: 1.6rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: 1px solid ${black};
  border-radius: 4px;
`;

const FormTextArea = styled.textarea`
  height: 150px;
  font-size: 1.6rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: 1px solid ${black};
  border-radius: 4px;
`;

const FormButton = styled.button`
  font-size: inherit;
  font-family: inherit;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
  background: ${primary};
  color: ${white};
  font-weight: 700;
  text-transform: uppercase;
  margin-left: auto;
  &:hover {
    border: 1px solid ${primary};
    background: ${white};
    color: ${primary};
  }
`;

export default ContactForm;
