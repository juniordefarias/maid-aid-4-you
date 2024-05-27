import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container, NavBar } from './styles';

import HeaderModal from '../../components/HeaderModal';

import logo from '../../assets/images/logo.svg';

import Reveal from '../../components/Reveal';

export default function Header() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const [page, setPage] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    const pageSelected = pathname.split('/')[1];
    
    !pageSelected ? setPage('home') : setPage(pageSelected);

    console.log({pathname})

  }, [pathname]);

  function handleToggleModal() {
    setIsModalOpened((prevState) => (
      prevState === true ? false : true
    ))
  }

  if (page === 'admin') {
    return null;
  }

  return (
    <>
      <HeaderModal 
        isOpened={isModalOpened} 
        onToggleModal={handleToggleModal}
      />

    <Container>
      <Reveal delay="0.1">
        <h4><Link to='/'><img src={logo} id='logo-header'/></Link></h4>
      </Reveal>
      

      <button className='button-menu' onClick={handleToggleModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
      </button>

      {/* <Reveal> */}
        <nav className='nav-desktop'>
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
      {/* </Reveal> */}
    </Container>
    </>
  );
}