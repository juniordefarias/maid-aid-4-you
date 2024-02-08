import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Spring, config  } from 'react-spring';

import { Overlay, Container } from './styles';

export default function Alert({ title, description, onClose }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShouldAnimate(true)
    }, 250);
  }, []);

  return ReactDOM.createPortal(
    <>
      {
        shouldAnimate && (
          <Overlay className="overlay">
            <Spring
              from={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' }}
              to={{ opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }}
            >
              {springProps => (
                <Container style={springProps}>
                  <div>
                    <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.6655 64C14.9924 64 0.665527 49.673 0.665527 32C0.665527 14.3269 14.9924 0 32.6655 0C50.3385 0 64.6655 14.3269 64.6655 32C64.6655 49.673 50.3385 64 32.6655 64ZM32.6655 57.6C46.8041 57.6 58.2655 46.1386 58.2655 32C58.2655 17.8615 46.8041 6.4 32.6655 6.4C18.527 6.4 7.06553 17.8615 7.06553 32C7.06553 46.1386 18.527 57.6 32.6655 57.6ZM29.4738 44.8L15.8975 31.2237L20.423 26.6979L29.4738 35.7491L52.1014 15.3377V22.1726L29.4738 44.8Z" fill="#2ECC71"/>
                    </svg>
                  </div>
      
                  <div>
                    {/* <h3 className='text-limited'>{title}</h3> */}
                    <h3 className='text-limited'>Thank you for the request!</h3> 

                    {/* <p>{description}</p> */}
                    <p>Our team will be in touch shortly <br /> to assist you in the best way possible.</p>
                  </div>

                  <button onClick={() => {
                    onClose();
                    window.location.reload();
                  }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.41769 5.22187L11.3674 0.272095L12.7816 1.6863L7.83189 6.63607L12.7816 11.5858L11.3674 13L6.41769 8.05027L1.46792 13L0.0537109 11.5858L5.00349 6.63607L0.0537109 1.6863L1.46792 0.272095L6.41769 5.22187Z" fill="black"></path>
                    </svg>
                  </button>
                </Container>
              )}
            </Spring>
          </Overlay>
        )
      }
    </>,
    document.getElementById('modal-root'),
  );

  /* return ReactDOM.createPortal(
    <Overlay className="overlay">
      {
        shouldAnimate && (
          <Spring
            from={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' }}
            to={{ opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }}
          >
            {springProps => (
              <Container style={springProps}>
                <div>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2898 4.21787L1.81978 18.3579C1.64514 18.6603 1.55274 19.0032 1.55177 19.3524C1.55079 19.7016 1.64127 20.045 1.8142 20.3484C1.98714 20.6518 2.2365 20.9046 2.53748 21.0817C2.83847 21.2588 3.18058 21.354 3.52978 21.3579H20.4698C20.819 21.354 21.1611 21.2588 21.4621 21.0817C21.7631 20.9046 22.0124 20.6518 22.1854 20.3484C22.3583 20.045 22.4488 19.7016 22.4478 19.3524C22.4468 19.0032 22.3544 18.6603 22.1798 18.3579L13.7098 4.21787C13.5315 3.92398 13.2805 3.68099 12.981 3.51235C12.6814 3.34372 12.3435 3.25513 11.9998 3.25513C11.656 3.25513 11.3181 3.34372 11.0186 3.51235C10.7191 3.68099 10.468 3.92398 10.2898 4.21787Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 9.35791V13.3579" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17.3579H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>    
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <button onClick={onClose}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.41769 5.22187L11.3674 0.272095L12.7816 1.6863L7.83189 6.63607L12.7816 11.5858L11.3674 13L6.41769 8.05027L1.46792 13L0.0537109 11.5858L5.00349 6.63607L0.0537109 1.6863L1.46792 0.272095L6.41769 5.22187Z" fill="black"></path>
                  </svg>
                </button>
              </Container>
            )}
          </Spring>
        )
      }
    </Overlay>,
    document.getElementById('modal-root'),
  ); */
}