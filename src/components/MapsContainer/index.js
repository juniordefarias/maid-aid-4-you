import { Container } from './styles';

import Section from '../../components/Section';
import Button from '../Button/Button';

import MaidSVG from '../../assets/images/MaidAidMaps.svg';

export default function MapsContainer() {
  return (
    <Container>
      
      <Section>
        <img src={MaidSVG} />
        <div>
          <h2>We serve <br /> in <span>your city!</span></h2>
          <p>Est eius ipsum aut autem ullam aut cumque molestiae est praesentium quod quo itaque mollitia ut asperiores</p>
          <Button>Get in contact</Button>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225470.97936304027!2d-82.61909197547986!3d27.994384305009515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2zVGFtcGEsIEZsw7NyaWRhLCBFVUE!5e0!3m2!1spt-BR!2sbr!4v1714488744094!5m2!1spt-BR!2sbr" /* width="600" */ /* height="450" */ allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Section>
    </Container>
  );
}