import { useState } from 'react';

import { 
  Container, HomeContainer, KnowMoreContainer, KnowMore,
 } from './styles';

import Section from '../../components/Section';
import Button from '../../components/Button';
import Form from '../../components/Form2';
import FormContainer from '../../components/FormContainer';
import MapsContainer from '../../components/MapsContainer';
import ChecklistContainer from '../../components/ChecklistContainer';

import serviceDeepClean from '../../assets/images/serviceDeepClean.png';
import serviceStandardClean from '../../assets/images/serviceStandardClean.png';
import serviceMoveInMoveOut from '../../assets/images/serviceMoveInMoveOut.png';
import serviceVacationRental from '../../assets/images/serviceVacationRental.png';


export default function Services() {
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
          <div>
            <h1>We offer routine solutions for countless people through our cleaning services.</h1>
            <ul>
              <li>
                <img src={serviceDeepClean} />
                <strong>Deep Clean</strong>
              </li>
              <li>
                <img src={serviceStandardClean} />
                <strong>Stadard Clean</strong>
              </li>
              <li>
                <img src={serviceMoveInMoveOut} />
                <strong>Move in/out</strong>
              </li>
              <li>
                <img src={serviceVacationRental} />
                <strong>Vacation Rental</strong>
              </li>
            </ul>
          </div>
          {/* <svg width="478" height="317" viewBox="0 0 478 317" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="450" height="300" transform="translate(0 0.917725)" fill="#CFCFCF"/>
          <rect width="185" height="84" transform="translate(293 232.918)" fill="#F1F1F1"/>
          </svg> */}
          <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="450" height="300" fill="#CFCFCF"/>
          </svg>
        </Section>
      </HomeContainer>

      <KnowMoreContainer>
        <Section>
          <h2>Know our special services!</h2>
          <KnowMore>
            <ul>
              <li className='selected'>
                <img src={serviceDeepClean} />
                <strong>Deep Clean</strong>
              </li>
              <li>
                <img src={serviceStandardClean} />
                <strong>Standard Clean</strong>
              </li>
              <li>
                <img src={serviceMoveInMoveOut} />
                <strong>Move in/out</strong>
              </li>
              <li>
                <img src={serviceVacationRental} />
                <strong>Vacation Rental</strong>
              </li>
            </ul>
            <div>
              <h4>Ut consequuntur ducimus eum quod </h4>
              <p>Est nesciunt inventore est soluta inventore quo voluptas voluptatem qui laudantium accusamus ex voluptatum repellendus. Eos repellat nisi qui consequatur ducimus est maxime voluptas ut accusamus iste et internos temporibus ut officiis quae et corporis laudantium.</p>
              <p>Eos repellat nisi qui consequatur ducimus est maxime voluptas ut accusamus iste et internos temporibus ut officiis quae et corporis laudantium.</p>
              <Button onClick={scrollToForm}>Get in contact</Button>
              {/* <svg width="478" height="317" viewBox="0 0 478 317" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="450" height="300" transform="translate(0 0.917725)" fill="#CFCFCF"/>
                <rect width="185" height="84" transform="translate(293 232.918)" fill="#F1F1F1"/>
              </svg> */}
              <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="450" height="300" fill="#CFCFCF"/>
              </svg>
            </div>
          </KnowMore>
        </Section>
      </KnowMoreContainer>

      <ChecklistContainer />
      <FormContainer serviceSelected={serviceSelected} />
      <MapsContainer />
    </Container>
  );
}