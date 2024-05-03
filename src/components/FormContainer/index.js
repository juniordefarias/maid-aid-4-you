import { useState } from 'react';

import { Container } from './styles';

import Form from '../../components/Form2';

export default function Services({ serviceSelected }) {
  
  return (
    <Container>
      <div id='contact'></div>
      <Form serviceSelected={serviceSelected} />
    </Container>
  );
}