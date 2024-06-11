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

import img1 from '../../assets/images/services-img-1.png';
import img2 from '../../assets/images/services-img-2.png';
import img3 from '../../assets/images/services-img-3.png';
import img4 from '../../assets/images/services-img-4.png';

import Reveal from '../../components/Reveal';

export default function Services() {
  const [serviceSelected, setServiceSelected] = useState(1);

  function scrollToForm() {
    const form = document.getElementById('form');

    form.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function scrollToKnowMoreContainer() {
    const form = document.getElementById('know-more-container');

    form.scrollIntoView({
      behavior: 'smooth',
    });
  }

  console.log({serviceSelected})
  
  return (
    <Container>
      <HomeContainer>
        <Section>
          <div>
            <Reveal>
              <h1>We offer routine solutions for countless people through our cleaning services.</h1>
            </Reveal>
            {/* <Reveal delay="0.4"> */}
              <ul>
                <Reveal delay="0.4">
                  <li
                    onClick={() => {
                      setServiceSelected(1);
                      scrollToKnowMoreContainer();
                    }}
                  >
                    <img src={serviceDeepClean} />
                    <strong>Deep Clean</strong>
                  </li>
                </Reveal>
                <Reveal delay="0.5">
                  <li
                    onClick={() => {
                      setServiceSelected(2);
                      scrollToKnowMoreContainer();
                    }}
                  >
                    <img src={serviceStandardClean} />
                    <strong>Stadard Clean</strong>
                  </li>
                </Reveal>
                <Reveal delay="0.6">
                  <li
                    onClick={() => {
                      setServiceSelected(3);
                      scrollToKnowMoreContainer();
                    }}
                  >
                    <img src={serviceMoveInMoveOut} />
                    <strong>Move in/out</strong>
                  </li>
                </Reveal>
                <Reveal delay="0.7">
                  <li
                    onClick={() => {
                      setServiceSelected(4);
                      scrollToKnowMoreContainer();
                    }}
                  >
                    <img src={serviceVacationRental} />
                    <strong>Vacation Rental</strong>
                  </li>
                </Reveal>
              </ul>
            {/* </Reveal> */}
          </div>
          {/* <svg width="478" height="317" viewBox="0 0 478 317" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="450" height="300" transform="translate(0 0.917725)" fill="#CFCFCF"/>
          <rect width="185" height="84" transform="translate(293 232.918)" fill="#F1F1F1"/>
          </svg> */}
          <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="450" height="300" fill="#F8D3C9"/>
          </svg>
        </Section>
      </HomeContainer>

      <KnowMoreContainer>
        <div id='know-more-container'></div>
        <Section>
          <Reveal>
            <h2>Know our special services!</h2>
          </Reveal>
          
          <KnowMore>
            <Reveal delay="0.4">
              <ul>
                <li 
                  onClick={() => {
                    setServiceSelected(1);
                    scrollToKnowMoreContainer();
                  }}
                  className={serviceSelected === 1 ? 'selected' : ''}
                >
                  <img src={serviceDeepClean} />
                  <strong>Deep Clean</strong>
                </li>
                <li
                  onClick={() => {
                    setServiceSelected(2);
                    scrollToKnowMoreContainer();
                  }}
                  className={serviceSelected === 2 ? 'selected' : ''}
                >
                  <img src={serviceStandardClean} />
                  <strong>Standard Clean</strong>
                </li>
                <li 
                  onClick={() => {
                    setServiceSelected(3);
                    scrollToKnowMoreContainer();
                  }}
                  className={serviceSelected === 3 ? 'selected' : ''}
                >
                  <img src={serviceMoveInMoveOut} />
                  <strong>Move in/out</strong>
                </li>
                <li 
                  onClick={() => {
                    setServiceSelected(4);
                    scrollToKnowMoreContainer();
                  }}
                  className={serviceSelected === 4 ? 'selected' : ''}
                >
                  <img src={serviceVacationRental} />
                  <strong>Vacation Rental</strong>
                </li>
              </ul>
            </Reveal>
            {
              serviceSelected === 1 && (
                <div>
                  <Reveal delay="0.6">
                    <h4>Deep Cleaning </h4>
                  </Reveal>
                  <Reveal delay="0.8">
                    <p>A deep clean typically involves thorough and comprehensive cleaning of a space, including areas that are often overlooked in regular cleaning routines. This can include tasks like scrubbing floors, cleaning behind appliances, dusting high and low surfaces, and more. If you have specific questions or need tips on deep cleaning, feel free to ask!</p>
                    <p>This type of cleaning is typically recommended for homes, offices, commercial spaces, and other environments that require a deep and intensive cleaning treatment, places that have not been cleaned by a professional for more than a month is considered to be a deep cleaning</p>
                    <Button onClick={scrollToForm}>Get in contact</Button>
                  </Reveal>
                    {/* <svg width="478" height="317" viewBox="0 0 478 317" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="450" height="300" transform="translate(0 0.917725)" fill="#CFCFCF"/>
                      <rect width="185" height="84" transform="translate(293 232.918)" fill="#F1F1F1"/>
                    </svg> */}
                    {/* <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="450" height="300" fill="#CFCFCF"/>
                    </svg> */}
                    <Reveal delay="0.9">
                      <img src={img1} />
                    </Reveal>
                  
                </div>
              )
            }
            {
              serviceSelected === 2 && (
                <div>
                  <Reveal>
                    <h4>Standard Cleaning </h4>
                  </Reveal>
                  <Reveal delay="0.35">
                    <p>A standard clean refers to a routine cleaning that typically covers the basic and common cleaning tasks necessary to maintain a clean and tidy living or working space. This may include activities such as dusting, vacuuming, mopping, and cleaning surfaces like countertops and sinks. Standard cleaning is done on a regular basis to keep a space looking neat and presentable. If you have any specific questions about standard cleaning, feel free to ask for more details!</p>
                    <Button onClick={scrollToForm}>Get in contact</Button>
                  </Reveal>
                  {/* <svg width="478" height="317" viewBox="0 0 478 317" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="450" height="300" transform="translate(0 0.917725)" fill="#CFCFCF"/>
                    <rect width="185" height="84" transform="translate(293 232.918)" fill="#F1F1F1"/>
                  </svg> */}
                  {/* <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="450" height="300" fill="#CFCFCF"/>
                  </svg> */}
                  <Reveal delay="0.5">
                    <img src={img2} />
                  </Reveal>
                </div>
              )
            }
            {
              serviceSelected === 3 && (
                <div>
                  <Reveal>
                    <h4>Move in/ Move out</h4>
                  </Reveal>
                  <Reveal delay="0.35">
                    <p>Move-in cleaning is a deep cleaning service provided before you move into a new home or apartment. It involves thoroughly cleaning the entire space to ensure it's in the best possible condition for you to start living there. This includes cleaning and disinfecting all areas, from floors and walls to kitchen appliances and bathrooms, to remove any dirt, grime, or residues left by previous occupants. Move-in cleaning helps you start fresh in a clean and sanitary environment. If you need tips or guidance on move-in cleaning, please let me know!</p>
                    <p>Move-out cleaning is a thorough cleaning service performed when you're vacating a residence. The goal is to leave the space in excellent condition for the next occupants or to meet the requirements of your lease or rental agreement. This includes cleaning all areas, repairing any damage, and addressing any issues to ensure the property is in the best possible state when you move out. Move-out cleaning may involve tasks like deep cleaning, patching holes, and restoring the property to its original condition. If you have specific questions about move-out cleaning, feel free to ask!</p>
                    <Button onClick={scrollToForm}>Get in contact</Button>
                  </Reveal>
                  {/* <svg width="478" height="317" viewBox="0 0 478 317" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="450" height="300" transform="translate(0 0.917725)" fill="#CFCFCF"/>
                    <rect width="185" height="84" transform="translate(293 232.918)" fill="#F1F1F1"/>
                  </svg> */}
                  {/* <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="450" height="300" fill="#CFCFCF"/>
                  </svg> */}
                  <Reveal delay="0.5">
                    <img src={img3} />
                  </Reveal>
                </div>
              )
            }
            {
              serviceSelected === 4 && (
                <div>
                  <Reveal>
                    <h4>Vacation rental cleaning </h4>
                  </Reveal>
                  <Reveal delay="0.35">
                    <p>Vacation rental cleaning is a specialized cleaning service designed for properties that are rented out on a short-term basis, such as Airbnb, VRBO, or other vacation rental platforms. This type of cleaning is crucial to ensure that the property is in excellent condition for incoming guests.</p>
                    <ol>
                      <li>Thorough cleaning of all rooms: This involves cleaning bedrooms, bathrooms, living areas, and kitchens.</li>
                      <li>Changing linens and towels: Clean bedding and towels are provided for each guest.</li>
                      <li>Restocking essentials: This includes refilling toiletries, restocking kitchen supplies, and ensuring all amenities are in good condition.</li>
                      <li>Deep cleaning: High-touch surfaces, appliances, and frequently used items are thoroughly cleaned and sanitized.</li>
                      <li>Check for damages: Cleaning staff may report any damages or issues to the property owner or manager.</li>
                      <li>Key exchange: Some cleaning services also assist with key exchange or access to the property.</li>
                    </ol>
                    <p>The frequency of vacation rental cleaning can vary, but it's typically done between guest stays to ensure a pleasant experience for each new set of visitors.</p>
                    <Button onClick={scrollToForm}>Get in contact</Button>
                  </Reveal>
                  {/* <svg width="478" height="317" viewBox="0 0 478 317" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="450" height="300" transform="translate(0 0.917725)" fill="#CFCFCF"/>
                    <rect width="185" height="84" transform="translate(293 232.918)" fill="#F1F1F1"/>
                  </svg> */}
                  {/* <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="450" height="300" fill="#CFCFCF"/>
                  </svg> */}
                  <Reveal delay="0.5">
                    <img src={img4} />
                  </Reveal>
                </div>
              )
            }
          </KnowMore>
        </Section>
      </KnowMoreContainer>

      <ChecklistContainer />
      <FormContainer serviceSelected={serviceSelected} />
      <MapsContainer />
    </Container>
  );
}