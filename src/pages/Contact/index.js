import { useState } from 'react';

import { Container } from './styles';

import FormContainer from '../../components/FormContainer';

export default function Contact() {
  const [serviceSelected, setServiceSelected] = useState('');

  function scrollToForm() {
    const form = document.getElementById('form');

    form.scrollIntoView({
      behavior: 'smooth',
    });
  }
  
  return (
    <Container>
      <FormContainer serviceSelected={serviceSelected} />
    </Container>
  );
}