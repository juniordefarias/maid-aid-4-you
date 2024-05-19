import { useState } from 'react';

import { 
  Container, HomeContainer, FreeContainer, ServicesContainer, FormContainer, TestimonialsContainer
} from './styles';

import Section from '../../components/Section';
import Button from '../../components/Button';
import Form from '../../components/Form2';
import MapsContainer from '../../components/MapsContainer';

import imgHome from '../../assets/images/home.png';
import imgAboutUs from '../../assets/images/aboutUs.svg';

import testimonials1 from '../../assets/images/testimonials-1.svg';
import testimonials2 from '../../assets/images/testimonials-2.svg';
import testimonials3 from '../../assets/images/testimonials-3.svg';

import homeImg from '../../assets/images/home.png';

import serviceDeepClean from '../../assets/images/serviceDeepClean.png';
import serviceStandardClean from '../../assets/images/serviceStandardClean.png';
import serviceMoveInMoveOut from '../../assets/images/serviceMoveInMoveOut.png';
import serviceVacationRental from '../../assets/images/serviceVacationRental.png';

import quote from '../../assets/images/quote.svg';

export default function Home() {
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
          <div className='home__content'>
            <h1>Smell of a {/* <br/> */} clean house</h1>
            <p>Established in 2020, we are dedicated to delivering top-tier cleaning services tailored to the unique requirements of each client.</p>
            <Button>Get in contact</Button>
          </div>
          <div className='home__img'>
            <svg /* width="459" height="356" */ viewBox="0 0 459 356" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M85.1916 70.3286C109.121 50.3624 238.899 20.4 303.274 58.9178C383.742 107.065 156.475 116.321 55.1139 166.717C-46.2468 217.113 363.6 155.788 412.276 179.2C460.951 202.613 224.053 183.213 156.855 271.525C89.6558 359.837 267.303 290.729 390.546 275.934" stroke="#8F1F5C" strokeWidth="80"/>
            </svg>
              <img src={homeImg} id='homeImg' />
            <svg /* width="511" height="382" */ viewBox="0 0 511 382" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M357.86 39.9478L6.57617 93.6687L450.352 139.097C402.705 146.823 158.491 183.385 103.93 192.285C49.3685 201.186 404.885 223.208 498 234.642L125.579 294.783C167.309 296.637 436.988 300.129 478.095 358.722" stroke="#8F1F5C" strokeWidth="80"/>
            </svg>
          </div>
          
        </Section>
      </HomeContainer>

      <FreeContainer>
        <Section>
          <img id='aboutUs' src={imgAboutUs} />
          <div>
              <h2>Break free from Cleaning and focus on What Truly Matters.</h2>
              <p>We understand that modern life is hectic. That's why we offer exceptional cleaning services to help you reclaim your precious time. Just imagine the possibilities when you no longer have to worry about cleaning your home. Instead, you can focus on the things that truly matter.</p>
              {/* <p>Reclaim your precious time with our exceptional cleaning services. Imagine a life where you no longer worry about cleaning your home but instead focus on what truly matters.</p> */}
              <Button onClick={scrollToForm}>Get in contact</Button>
          </div>
        </Section>
      </FreeContainer>

      <ServicesContainer>
        <div className='services__content'>
          <h2 id='services'>Know our special services!</h2>
          <p>Our team of experts uses eco-friendly products and exceptional professionalism to ensure your satisfaction on every visit. Schedule with us to experience the difference and enjoy a truly spotless home!</p>
        </div>
        <section>
            <div>
              <img src={serviceDeepClean} />
              <h4>Deep Clean</h4>
              {/* <p>Every nook and cranny meticulously cleaned, from baseboards to ceiling fans, and every surface in between. they'll all be restored to their sparkling best with our deep clean! Our skilled and detail-oriented cleaning professionals have the experience to tackle deep cleaning tasks effectively!</p> */}
              <p>Experience meticulous cleaning from baseboards to ceiling fans, ensuring every surface sparkles. Our detail-oriented professionals handle deep cleaning tasks with precision.</p>
              <Button onClick={() => {
                setServiceSelected('Deep Clean');
                scrollToForm();
              }}>Get in contact</Button>
            </div>

            <div>
              <img src={serviceStandardClean} />
              <h4>Standard Clean</h4>
              {/* <p>Say goodbye to the stress of regular cleaning! Our team of experts is ready to keep your home shining week after week. Our standard cleaning services are designed to keep your living spaces fresh and inviting, allowing you to focus on what matters most!</p> */}
              <p>Bid farewell to the stress of regular cleaning. Our expert team keeps your home fresh and inviting week after week, allowing you to focus on priorities.</p>
              <Button onClick={() => {
                setServiceSelected('Standard Clean');
                scrollToForm();
              }}>Get in contact</Button>
            </div>

            <div>
              <img src={serviceMoveInMoveOut} />
              <h4>Move in/Move out</h4>
              {/* <p>Our services are the key to a seamless transition. We inspect for any damages and assist in preparing your home for new occupants or ensuring that you leave it in the best possible condition. e have the expertise to handle all aspects of the cleaning process.</p> */}
              <p>Ensure a seamless transition with our services. We inspect for damages and prepare your home for new occupants or leave it in optimal condition.</p>
              <Button onClick={() => {
                setServiceSelected('Move In/Out');
                scrollToForm();
              }}>Get in contact</Button>
            </div>

            <div>
              <img src={serviceVacationRental} />
              <h4>Vacation Rental</h4>
              {/* <p>Prepare your property for the next set of guests with our efficient turnover cleaning services. We leave no corner untouched. Our attention to detail sets us apart, ensuring that every nook and cranny is thoroughly cleaned and ready for your next guests. </p> */}
              <p>Efficient turnover cleaning prepares your property for the next set of guests. Our attention to detail ensures every nook and cranny is thoroughly cleaned.</p>
              <Button onClick={() => {
                setServiceSelected('Vacation Rental');
                scrollToForm();
              }}>Get in contact</Button>
            </div>
          </section>
      </ServicesContainer>

      <div id='form'></div>
      <FormContainer>
        {/* <Section>
          
        </Section> */}
        <div id='contact'></div>
          <Form serviceSelected={serviceSelected} />
      </FormContainer>

      <TestimonialsContainer>
        <h2 id='costumers'>What our costumers say</h2>
        <section>
          <div>
            {/* <p>I hired this team for a deep cleaning before moving, and I was blown away. They left no stone unturned, and even the toughest details were handled with care. Top-notch service!</p> */}
            <p>I have been using her services for the last three years, I am always pleased with the cleanliness, attention to detail, and quality of work provided.  I recommend her services to anyone interested in a professional home or business cleaning service.  Top notch, second to none!</p>
            <div>
              <img src={testimonials1} />
              <strong>Johnny Allen</strong>
            </div>
            
            <img src={quote} className='quote'/>
          </div>

          <div>
            {/* <p>Their weekly standard cleaning keeps our home pristine all the time. It's a relief to know I can trust them to keep things clean and organized. Reliable and professional service!</p> */}
            <p>Michelle did an exceptional job on our house! She meticulously cleaned and afterwards sent is picture show casing her thorough work. Notably we had already moved out state! I found her to be extremely professional, trustworthy and great at her job!</p>
            <div>
              <img src={testimonials2} />
              <strong>Rachel Karigi</strong>
            </div>

            <img src={quote} className='quote' />
          </div>

          <div>
            {/* <p>This cleaning company is simply outstanding. They don't just clean but also care for our space as if it were their own. Undoubtedly, the best S service!</p> */}
            <p>We have her clean our home monthly and I don't know what I would do without her! She asks me what products I prefer and knows the way I like the beds made, which I appreciate! She also makes the toilet paper cute. Highly recommend!</p>
            <div>
              <img src={testimonials3} />
              <strong>Flowertown Charm</strong>
            </div>

            <img src={quote} className='quote' />
          </div>
        </section>
        <Button>Get in contact</Button>
      </TestimonialsContainer>

      <MapsContainer />
    </Container>
  )
}