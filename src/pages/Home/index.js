import { 
  Container, Header, HomeContainer, FormContainer, ServicesContainer,  FreeContainer, TestimonialsContainer
} from './styles';

import Section from '../../components/Section';
import Form from '../../components/Form';
import Button from '../../components/Button';

import Reveal from '../../components/Reveal';

import logo from '../../assets/images/logo.svg';

import imgHome from '../../assets/images/home.png';
import imgAboutUs from '../../assets/images/aboutUs.svg';

import deepClean from '../../assets/images/deepClean.svg';
import standardClean from '../../assets/images/standardClean.svg';
import handyman from '../../assets/images/handyman.svg';
import carpetClean from '../../assets/images/carpetClean.svg';
import moveInMoveOut from '../../assets/images/moveInMoveOut.svg';
import vocationRental from '../../assets/images/vocationRental.svg';

import testimonials1 from '../../assets/images/testimonials-1.svg';
import testimonials2 from '../../assets/images/testimonials-2.svg';
import testimonials3 from '../../assets/images/testimonials-3.svg';

export default function Footer() {
  return (
    <Container>
      <Header>
        <div>
          <img src={logo} alt='logo maid aid 4 you'/>
          {/* <p>contact@maidaid4you.com</p> */}
        </div>
      </Header>
      <HomeContainer>
        
        <Section>
          <div>
            <Reveal delay='0.1'>
              <h1>Smell of a <br/> clean house</h1>
            </Reveal>
            
            <Reveal delay='0.2'>
              <p>Since 2010, we have been working with the goal of providing high-quality cleaning and handyman services, tailored to meet the unique needs of each client.</p>
            </Reveal>
            <Reveal delay='0.3'>
              <Button>Get in contact</Button>
            </Reveal>
          </div>
          <div className='home__img' delay='0.4'>
            <Reveal>
              <img src={imgHome} />
            </Reveal>
          </div>
        </Section>
      </HomeContainer>

      <FormContainer>
        <Section>
          <div id='contact'></div>
          <Form />
        </Section>
      </FormContainer>

      <ServicesContainer>
        <Reveal>
          <h2 id='services'>Know our services!</h2>
        </Reveal>
        
        <Reveal delay='0.4'>
          <section>
            <div>
              <img src={deepClean} />
              <h4>Deep Clean</h4>
              <p>Every nook and cranny meticulously cleaned, from baseboards to ceiling fans, and every surface in between. they'll all be restored to their sparkling best with our deep clean! Our skilled and detail-oriented cleaning professionals have the experience to tackle deep cleaning tasks effectively!</p>
              <Button>Get in contact</Button>
            </div>

            <div>
              <img src={standardClean} />
              <h4>Standard Clean</h4>
              <p>Say goodbye to the stress of regular cleaning! Our team of experts is ready to keep your home shining week after week. Our standard cleaning services are designed to keep your living spaces fresh and inviting, allowing you to focus on what matters most!</p>
              <Button>Get in contact</Button>
            </div>

            <div>
              <img src={handyman} />
              <h4>Handyman</h4>
              <p>Tackling home repairs or improvements? Look no further! Our team of skilled handymen is here to provide reliable and high-quality services to meet all your home maintenance needs. You can trust us to handle your projects with precision and care.</p>
              <Button>Get in contact</Button>
            </div>

            <div>
              <img src={carpetClean} />
              <h4>Carpet cleaning</h4>
              <p>We go beyond the surface to eliminate embedded dirt, and allergens, leaving your carpets looking and feeling like new.  Our cleaning process is tailored to the specific needs of your carpet, ensuring a customized and effective cleaning experience.</p>
              <Button>Get in contact</Button>
            </div>

            <div>
              <img src={moveInMoveOut} />
              <h4>Move in/Move out</h4>
              <p>Our services are the key to a seamless transition. We inspect for any damages and assist in preparing your home for new occupants or ensuring that you leave it in the best possible condition. e have the expertise to handle all aspects of the cleaning process.</p>
              <Button>Get in contact</Button>
            </div>

            <div>
              <img src={vocationRental} />
              <h4>Vocation Rental</h4>
              <p>Prepare your property for the next set of guests with our efficient turnover cleaning services. We leave no corner untouched. Our attention to detail sets us apart, ensuring that every nook and cranny is thoroughly cleaned and ready for your next guests. </p>
              <Button>Get in contact</Button>
            </div>
          </section>
        </Reveal>
        
      </ServicesContainer>

      <FreeContainer>
        <Section>
          <Reveal>
            <img id='aboutUs' src={imgAboutUs} />
          </Reveal>
          <div>
            <Reveal>
              <h2>Break free from Cleaning and focus on What Truly Matters.</h2>
            </Reveal>
            <Reveal>
              <p>We understand that modern life is hectic. That's why we offer exceptional cleaning services to help you reclaim your precious time. Just imagine the possibilities when you no longer have to worry about cleaning your home. Instead, you can focus on the things that truly matter.</p>
            </Reveal>
            <Reveal>
              <Button>Get in contact</Button>
            </Reveal>
          </div>
        </Section>
      </FreeContainer>

      <TestimonialsContainer>
        <Section>
          <Reveal>
            <h2 id='costumers'>What our costumers say</h2>
          </Reveal>
          <Reveal delay='0.4'>
            <section>
              <div>
                <p>I hired this team for a deep cleaning before moving, and I was blown away. They left no stone unturned, and even the toughest details were handled with care. Top-notch service!</p>
                <div>
                  <img src={testimonials1} />
                  <strong>James Anderson</strong>
                </div>
              </div>

              <div>
                <p>Their weekly standard cleaning keeps our home pristine all the time. It's a relief to know I can trust them to keep things clean and organized. Reliable and professional service!</p>
                <div>
                <img src={testimonials2} />
                  <strong>Michael Davis</strong>
                </div>
              </div>

              <div>
                <p>This cleaning company is simply outstanding. They don't just clean but also care for our space as if it were their own. Undoubtedly, the best cleaning service!</p>
                <div>
                <img src={testimonials3} />
                  <strong>Amanda Harris</strong>
                </div>
              </div>
            </section>
          </Reveal>
        </Section>
      </TestimonialsContainer>
    </Container>
  );
}