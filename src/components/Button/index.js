import { Container } from './styles';

export default function Button({ children }) {
  function scrollToForm() {
    const form = document.getElementById('form');

    form.scrollIntoView({
      behavior: 'smooth',
    });
  }
  return (
    <Container onClick={scrollToForm}>
      { children }
    </Container>
  )
}