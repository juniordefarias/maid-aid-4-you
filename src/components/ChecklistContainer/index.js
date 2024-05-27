import { useState } from 'react';

import { Container, Checklist } from './styles';

import Form from '../../components/Form2';
import Section from '../../components/Section';
import Button from '../Button';

import Reveal from '../../components/Reveal';

export default function ChecklistContainer({ serviceSelected }) {
  const [topic, setTopic] = useState(1);
  
  return (
    <Container>
      <Section>
        <div>
          <Reveal>
            <h2>Our biggest differential is the <span>attention to every detail.</span></h2>
          </Reveal>
          <Reveal delay="0.4">
            <p>Because we know it's in the little details where the real difference is made. Let us show you how our dedication to detail can make your home truly spotless.</p>
            <p>Schedule today and experience the gold standard in cleaning services!</p>
            <Button>Get in contact</Button>
          </Reveal>
        </div>
        <Reveal delay="0.5">
          <Checklist>
            <li>
              <strong
                onClick={() => setTopic(1)}
              >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 21.9177H5C4.44772 21.9177 4 21.47 4 20.9177V11.9177H1L11.3273 2.52923C11.7087 2.18248 12.2913 2.182348 12.6727 2.52923L23 11.9177H20V20.9177C20 21.47 19.5523 21.9177 19 21.9177ZM13 19.9177H18V10.0752L12 4.62063L6 10.0752V19.9177H11V13.9177H13V19.9177Z" fill="#E41F76"/>
                </svg>
                General
              </strong>
              <ol
                className={topic === 1 ? 'selected' : ''}
              >
                <li>Dust Ceiling Fans and light fixtures</li>
                <li>Dust light bulbs</li>
                <li>Dust to remove all cobwebs</li>
                <li>Dust Blinds</li>
                <li>Dust windows Sills and Ledges</li>
                <li>Dust Furniture</li>
                <li>Dust and Polish Furniture</li>
                <li>Vacuum Upholstered Furniture and Rugs</li>
                <li>Dust Baseboard</li>
                <li>Vacuum and Mop all hardfloors</li>
                <li>Remove all trash</li>
                <li>Making or change bed sheet</li>
              </ol>
            </li>

            <li>
              <strong
                onClick={() => setTopic(2)}
              >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.34315 2.32593L22.3744 20.3571C22.9602 20.9429 22.9602 21.8927 22.3744 22.4784C21.7886 23.0642 20.8388 23.0642 20.253 22.4784L15.6569 17.8823L12.1213 21.4178L4.34315 13.6396C1.2779 10.5744 1.22006 5.64058 4.16964 2.50482L4.34315 2.32593ZM4.58437 5.39611L4.5329 5.50596C3.56416 7.64482 3.91772 10.2327 5.58066 12.0411L5.75736 12.2254L12.1207 18.5893L14.9491 15.7608L4.58437 5.39611Z" fill="#E41F76"/>
                </svg>
                Kitchen
              </strong>
              <ol
                className={topic === 2 ? 'selected' : ''}
              >
                <li>Clean and Sanitize Sink and Countertops</li>
                <li>Clean outside appliances</li>
                <li>Clean ranges/stove</li>
                <li>Wet Clean all Cabinets Fronts</li>
                <li>Clean Inside Microwave</li>
              </ol>
            </li>

            <li>
              <strong 
                onClick={() => setTopic(3)}
              >
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.48821 3.42151C3.96115 3.66638 3.62343 4.20032 3.62343 4.78871C3.62343 5.23949 3.78627 5.60649 4.11455 5.89593C4.942 6.62523 6.2212 6.26141 6.52755 5.20966C6.80721 4.24944 6.09494 3.29843 5.09901 3.3023C4.88704 3.30313 4.63863 3.35162 4.48821 3.42151ZM16.6212 3.36762C15.5981 3.6104 14.682 4.32161 14.2211 5.2308C13.932 5.80123 13.8421 6.21545 13.796 7.18862L13.7546 8.06137H14.9688H16.183L16.1834 7.44251C16.1838 6.67931 16.2555 6.40822 16.5401 6.09276C17.0886 5.48482 18.0935 5.61836 18.4655 6.34874C18.5834 6.58004 18.5917 6.72469 18.5917 8.53487V10.4733L11.3815 10.4737C6.36522 10.4739 4.09414 10.4952 3.91774 10.5434C3.56302 10.6404 3.25908 10.889 3.11989 11.1959C3.0146 11.4281 3.00123 11.631 3.00002 13.0198C2.99857 14.6738 3.06379 15.2961 3.31531 16.0272C3.7367 17.2522 4.55851 18.3351 5.60946 19.0502L5.97007 19.2955L5.34007 20.8481C4.9936 21.702 4.71007 22.4305 4.71007 22.4669C4.71007 22.5108 5.15422 22.5332 6.02578 22.5332H7.3415L7.80352 21.3113L8.26555 20.0895H12.0021H15.7385L15.9578 20.6607C16.0784 20.9749 16.2862 21.5176 16.4195 21.8667L16.662 22.5014L17.9755 22.5186C19.0308 22.5323 19.289 22.5193 19.289 22.4519C19.289 22.4057 19.018 21.7042 18.6868 20.8928C18.3556 20.0815 18.0858 19.3832 18.0874 19.341C18.0889 19.2988 18.2926 19.1215 18.5399 18.947C19.1186 18.5387 19.746 17.8554 20.1372 17.2075C20.4782 16.6426 20.8319 15.6816 20.9337 15.0434C20.9742 14.7894 20.9997 13.0559 20.9999 10.5343C21.0005 5.99812 21.0077 6.0899 20.584 5.22109C20.1685 4.36884 19.2681 3.65229 18.2974 3.40151C17.8834 3.29456 17.004 3.27679 16.6212 3.36762ZM9.10352 6.40758C8.78608 6.55192 8.47669 6.95301 8.41901 7.29493C8.28818 8.07025 8.97992 8.77982 9.76198 8.67248C10.6847 8.54579 11.1245 7.43457 10.5232 6.74888C10.1372 6.30857 9.60351 6.18029 9.10352 6.40758ZM18.5908 13.7263C18.5897 14.7145 18.493 15.1998 18.177 15.8018C17.7701 16.5774 16.9959 17.2318 16.1317 17.5307L15.7076 17.6775H11.9995H8.29141L7.86735 17.5307C6.716 17.1324 5.80704 16.1402 5.50379 14.9507C5.44123 14.7053 5.40732 14.2759 5.40732 13.7289V12.8853H11.9995H18.5917L18.5908 13.7263Z" fill="#E41F76"/>
              </svg>
                Bathroom
              </strong>
              <ol
                className={topic === 3 ? 'selected' : ''}
              >
                <li>Clean Mirrors</li>
                <li>Clean and Sanitize Sink and Countertops</li>
                <li>Clean and Sanitize Shower and Tub</li>
                <li>Wet Clean all Cabinets Fronts</li>
                <li>Desinfect Bathroom Floors</li>
                <li>Clean and Sanitize Toilet Bowl</li>
              </ol>
            </li>

            <li>
              <strong 
                onClick={() => setTopic(4)}
              >
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5049 2.92054C16.4379 2.92054 18.0049 4.48754 18.0049 6.42054C18.0049 6.95774 17.8839 7.46668 17.6676 7.92158L21.0049 7.92054C21.5572 7.92054 22.0049 8.36825 22.0049 8.92054V12.9205C22.0049 13.4728 21.5572 13.9205 21.0049 13.9205H20.0049V21.9205C20.0049 22.4728 19.5572 22.9205 19.0049 22.9205H5.00488C4.4526 22.9205 4.00488 22.4728 4.00488 21.9205V13.9205H3.00488C2.4526 13.9205 2.00488 13.4728 2.00488 12.9205V8.92054C2.00488 8.36825 2.4526 7.92054 3.00488 7.92054L6.34219 7.92158C6.12591 7.46668 6.00488 6.95774 6.00488 6.42054C6.00488 4.48754 7.57189 2.92054 9.50488 2.92054C10.4849 2.92054 11.3708 3.3233 12.0061 3.97232C12.639 3.3233 13.5249 2.92054 14.5049 2.92054ZM18.0049 13.9205H6.00488V20.9205H18.0049V13.9205ZM20.0049 9.92054H4.00488V11.9205H20.0049V9.92054ZM9.50488 4.92054C8.67646 4.92054 8.00488 5.59211 8.00488 6.42054C8.00488 7.20023 8.59977 7.84099 9.36042 7.91367L9.50488 7.92054H11.0049V6.42054C11.0049 5.64084 10.41 5.00009 9.64934 4.9274L9.50488 4.92054ZM14.5049 4.92054L14.3604 4.9274C13.6473 4.99555 13.0799 5.56297 13.0117 6.27608L13.0049 6.42054V7.92054H14.5049L14.6493 7.91367C15.41 7.84099 16.0049 7.20023 16.0049 6.42054C16.0049 5.64084 15.41 5.00009 14.6493 4.9274L14.5049 4.92054Z" fill="#E41F76"/>
              </svg>
                Special Request
              </strong>
              <ol className={topic === 4 ? 'selected' : ''}>
                <li>Inside Every Closet and Closet Shelves</li>
                <li>Inside Every Cupboard and drawers</li>
                <li>Wipe Ceiling Fans and light Fixtures</li>
                <li>Wipe Glass Windows, doors and tracks</li>
                <li>Wipe Baseboards and Doors/Door Frames</li>
                <li>Wipe blinds</li>
                <li>Wipe windows inside</li>
                <li>Inside the fridge</li>
                <li>Inside de oven</li>
                <li>Clean Garage/Front or backyard/Porch</li>
                <li>Wipe Ceiling Fans and light Fixtures</li>
                <li>Remove Labels if necessary</li>
                <li>Remove any construction debris</li>
                <li>Laundry</li>
              </ol>
            </li>
          </Checklist>
        </Reveal>
        
      </Section>
    </Container>
  );
}