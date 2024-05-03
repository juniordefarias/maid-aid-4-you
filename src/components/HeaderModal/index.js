import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ReactDOM from 'react-dom';

import { Overlay, Container } from './styles';

export default function HeaderModal({ isOpened, onToggleModal }) {
  const [page, setPage] = useState('');

  const { pathname } = useLocation();
  useEffect(() => {
    const pageSelected = pathname.split('/')[1];
    
    !pageSelected ? setPage('home') : setPage(pageSelected);

  }, [pathname]);

  if (!isOpened) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay className='Overlay' onClick={(e => {
      const targetClassList = [...e.target.classList];
      if (targetClassList.includes('Overlay')) {
        onToggleModal();
      }
    })}>
      
      <Container>
        <button onClick={onToggleModal}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00093 7.11533L15.6005 0.515625L17.4861 2.40124L10.8865 9.00093L17.4861 15.6005L15.6005 17.4861L9.00093 10.8865L2.40124 17.4861L0.515625 15.6005L7.11533 9.00093L0.515625 2.40124L2.40124 0.515625L9.00093 7.11533Z" fill="black"/>
          </svg>

        </button>

        <nav>
          <ul>
            <li
              className={page === 'home' ? 'selected' : ''}
            >
              <Link to='/'>Home</Link>
            </li>
            <li
              className={page === 'aboutus' ? 'selected' : ''}
            >
              <Link to='/aboutus'>About us</Link>
            </li>
            <li
              className={page === 'services' ? 'selected' : ''}
            >
              <Link to='/services'>Services</Link>
            </li>
            <li
              className={page === 'contact' ? 'selected' : ''}
            >
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
