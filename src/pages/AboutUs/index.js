import { useState } from 'react';

import { Container, HomeContainer, StoryContainer } from './styles';

import Section from '../../components/Section';
import Button from '../../components/Button';
import Form from '../../components/Form2';
import FormContainer from '../../components/FormContainer';
import ChecklistContainer from '../../components/ChecklistContainer';
import MapsContainer from '../../components/MapsContainer';

import aboutUsImg from '../../assets/images/aboutUs.png';

import Reveal from '../../components/Reveal';

export default function AboutUs() {
  const [serviceSelected, setServiceSelected] = useState('');

  function scrollToForm() {
    const form = document.getElementById('form');

    form.scrollIntoView({
      behavior: 'smooth',
    });
  }
  
  return (
    <Container>
      <HomeContainer>
        <Section>
          <Reveal>
            <h1>A professional cleaning company committed and dedicated to providing the ideal solution for your space.</h1>
          </Reveal>
          <ul>
            <Reveal delay="0.5">
              <li>
                <strong>4 years</strong>
                {/* <p>Vel dolor ipsam ea libero internos non necessitatibus</p> */}
                <p>{/* accumulating a wealth  */}of experience that allows us to {/* deeply understand our clients' needs and  */}offer tailored solutions.</p>
              </li>
            </Reveal>
            <Reveal delay="0.6">
              <li>
                <strong>+3000</strong>
                {/* <p>Id tempore perferendis quo maxime praese in vero esse</p> */}
                <p>times we've cleaned since we started</p>
              </li>
            </Reveal>
            <Reveal delay="0.7">
              <li>
                <strong>538</strong>
                {/* <p>Sed corrupti numquam ut dolores alias qui nisi voluptate</p> */}
                <p>different properties transformed by our service</p>
              </li>
            </Reveal>
          </ul>
          <div className='home__img'>
            <Reveal delay="0.45">
              <img src={aboutUsImg} />
            </Reveal>
          </div>
        </Section>
      </HomeContainer>
      <StoryContainer>
        <Section>
          <div className='story__content'>
            <Reveal>
              <h2>Our Story</h2>
            </Reveal>
            <Reveal delay="0.4">
              <p>Founded in 2020 by Michelle Batista, Maid Aid 4 You has quickly become a trusted name in the cleaning industry. With two dedicated and highly trained teams, we provide exceptional cleaning services for homes and offices alike.</p>
              <p>Our commitment to excellence and attention to detail sets us apart. Whether it's a deep clean, standard clean, or move in/out service, we ensure that every space is left immaculate. Our goal is to create clean and welcoming environments where our customers can feel at ease.</p>
              <p>At Maid Aid 4 You, we understand the importance of a clean space, and we take pride in delivering results that exceed expectations. With our flexible scheduling and personalized service, we make it easy for our customers to enjoy the benefits of a clean environment without the hassle.</p>
              <p>Experience the difference with Maid Aid 4 You. Let us take care of your cleaning needs so you can focus on what matters most to you.</p>
              <Button>Get in contact</Button>
            </Reveal>
          </div>
        </Section> 
      </StoryContainer>
      <div className='bg-primary-light'>
        <FormContainer serviceSelected={serviceSelected} />
        <ChecklistContainer />
      </div>
      <MapsContainer />
    </Container>
  );
}