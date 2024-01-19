import { Container, ContentContainer, Row, LogoContainer, InfoContainer } from './styles';

import logo from '../../assets/images/logo-white.svg';

export default function Footer() {
  return (
    <Container>
      <ContentContainer>
        <Row>
          <LogoContainer>
            <h3>Maid aid 4 you</h3>
            <p>General domestic services for your peace of mind</p>
          </LogoContainer>

          <InfoContainer>
            <div>
              <h3>Topics</h3>
              <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#aboutUs'>About us</a></li>
                <li><a href='#costumers'>Costumers</a></li>
                <li><a href='#contact'>Contact</a></li>
              </ul>
            </div>

            <div>
              <h3>Contato</h3>
              <ul>
                <li>Address here</li>
                <li><a href='mailto:contato@maidaid4you.com'>contato@maidaid4you.com</a></li>
                <li>(555) 555-5555</li>
              </ul>
            </div>
          </InfoContainer>
        </Row>

        <Row>
          <div>
            <span>© 2023 Maid Aid 4 You</span>
          </div>
        </Row>
      </ContentContainer>
    </Container>
  );
}
