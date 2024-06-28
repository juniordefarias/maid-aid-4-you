import { useState, useMemo, useEffect } from 'react';

import emailjs from '@emailjs/browser';

import { Container, FormContainer, ButtonForm, RowContainer } from './styles';

import FormGroup from '../FormGroup';
import RadioContainer from '../RadioContainer';
import CheckboxContainer from '../CheckboxContainer';

import Alert from '../Alert';

import Reveal from '../Reveal';

import useErrors from '../../hooks/useErrors';

import formatPhoneNumber from '../../utils/formatPhoneNumber';
import formatZipCode from '../../utils/formatZipCode';

import isEmailValid from '../../utils/isEmailValid';
import isPhoneNumberValid from '../../utils/isPhoneNumberValid';
import isZipCodeValid from '../../utils/isZipCodeValid';

import toast from '../../utils/toast';

export default function Form({ serviceSelected }) {
  const {
    /* Vamos pegar o state errors para usá-lo para fazer a validação do form  */
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName
  } = useErrors();

  const properties = ['Residential', 'Commercial']
  const [typeProperty, setTypeProperty] = useState('Residential');
  const handleTypePropertyChange = (event) => {
    setTypeProperty(event.target.value);
  };

  const residentialServices = [
    'Standard Clean',
    'Deep Clean',
    'Move In/Out',
    'Vacation Rental'
  ];
  const [residentialService, setResidentialService] = useState(residentialServices[0]);
  const handleResidentialServiceChange = (event) => {
    setResidentialService(event.target.value);
  };

  useEffect(() => {
    if (serviceSelected) {
      setResidentialService(serviceSelected);
    }
  }, [serviceSelected]);

  const intervals = [
    'Only once',
    'Weekly',
    'Every two weeks',
    'Monthly'
  ];
  const [interval, setInterval] = useState(intervals[0]);
  const handleIntervalChange = (event) => {
    setInterval(event.target.value);
  };

  const [moreInformations, setMoreInformations] = useState('');
  const handleMoreInformationsChange = (event) => {
    setMoreInformations(event.target.value);
  };

  const handymanServices = [
    'Minor Repairs',
    'Carpentry',
    'Painting',
    'Electrical Work',
    'Plumbing',
    'Home Maintenance',
    'Assembly',
    'Drywall Repair',
    'Tiling',
  ];
  const [checkboxValues, setCheckboxValues] = useState(
    handymanServices.map((option, index) => (
      { 
        id: index, 
        name: option, 
        checked: false 
      }
    ))
  );
  function handleCheckboxChange(event) {
    const { id, name, checked } = event.target;

    const stateUpdate = checkboxValues.map((checkbox) => (
      checkbox.id === Number(id)
       ? {...checkbox, checked: !checkbox.checked}
       : checkbox
    ));

    setCheckboxValues(stateUpdate);
  };

  const [formContact, setFormContact] = useState({
    email: '',
    phone: '',
    zipCode: '',
  });
  const handleFormContactChange = (event) => {
    let { name, value } = event.target;

    /* if (name === 'email' && value && !isEmailValid(value)) {
      setError({field: 'email', message: 'E-mail inválido'})
    } else {
      removeError('email')
    } */

    if (name === 'email' && value) {
      !isEmailValid(value) 
        ? setError({field: 'email', message: 'E-mail invalid'})
        : removeError('email')
    }

    if (name === 'phone' && value) {
      value = formatPhoneNumber(value);

      !isPhoneNumberValid(value) 
        ? setError({field: 'phone', message: 'Phone invalid'})
        : removeError('phone')
    }

    if (name === 'zipCode' && value) {
      value = formatZipCode(value);

      !isZipCodeValid(value) 
        ? setError({field: 'zipCode', message: 'Zip Code invalid'})
        : removeError('zipCode')
    }

    

    setFormContact((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const handleVerifyInputOnBlur = (event) => {
    const { name, value } = event.target;

    if (name === 'email' && event.target.value) {
      !isEmailValid(event.target.value)
        ? setError({field: 'email', message: 'E-mail inválido'})
        : removeError('email')
    }
    
  }

  const [formProperty, setFormProperty] = useState({
    buildingSize: '',
    rooms: '',
    bathrooms: '',
    pets: '',
  });
  const handleFormPropertyChange = (event) => {
    const { name, value } = event.target;
    setFormProperty((prevFormulario) => ({
      ...prevFormulario,
      [name]: value.replace(/\D/g, ''),
    }));
  };

  const isFormValid = formContact.email !== '' && formContact.phone !== '' && formContact.zipCode !== '' && errors.length === 0 && (residentialService === 'Handyman' || formProperty.buildingSize !== '') ? true : false;

  function handleSubmit(event) {
    event.preventDefault();

    let message;

    function checkedServicesToString(accumulator, service) {
      if (service.checked) {
        if (accumulator.length > 0) {
            accumulator += ', ';
        }
        accumulator += `${service.name} $${service.value}`;
      }

      return accumulator;
    }

    function checkedHandymanServicesToString(accumulator, service) {
      if (service.checked) {
        if (accumulator.length > 0) {
            accumulator += ', ';
        }
        accumulator += `${service.name}`;
      }

      return accumulator;
    }

    console.log({typeProperty, residentialService})

    if (typeProperty === 'Commercial') {
      message = (`
        email: ${formContact.email},
        phone: ${formContact.phone},
        zip code: ${formContact.zipCode},
        -
        building size: ${formProperty.buildingSize},
        -
        service: ${typeProperty},
        more informations: ${moreInformations},
      `);
      //return;
    } else {
      if (residentialService === 'Handyman') {
        message = (`
          email: ${formContact.email},
          phone: ${formContact.phone},
          zip code: ${formContact.zipCode},
          -
          service: ${residentialService},
          services: ${checkboxValues.reduce(checkedHandymanServicesToString, '')},
          more informations: ${moreInformations},
        `);
        //return
      }
  
      if (residentialService === 'Standard Clean') {
        message = (`
          email: ${formContact.email},
          phone: ${formContact.phone},
          zip code: ${formContact.zipCode},
          -
          building size: ${formProperty.buildingSize},
          rooms: ${formProperty.rooms},
          bathrooms: ${formProperty.bathrooms},
          pets: ${formProperty.pets},
          -
          service: ${residentialService},
          more informations: ${moreInformations},
          how often: ${interval},
        `);
        //return;
      }
  
      if (residentialService === 'Deep Clean') {
        message = (`
          email: ${formContact.email},
          phone: ${formContact.phone},
          zip code: ${formContact.zipCode},
          -
          building size: ${formProperty.buildingSize},
          rooms: ${formProperty.rooms},
          bathrooms: ${formProperty.bathrooms},
          pets: ${formProperty.pets},
          -
          service: ${residentialService},
          more informations: ${moreInformations},
          how often: ${interval},
        `);
        //return;
      }
  
      if (residentialService === 'Move In/Out') {
        message = (`
          email: ${formContact.email},
          phone: ${formContact.phone},
          zip code: ${formContact.zipCode},
          -
          building size: ${formProperty.buildingSize},
          rooms: ${formProperty.rooms},
          bathrooms: ${formProperty.bathrooms},
          -
          service: ${residentialService},
          more informations: ${moreInformations},
        `);
        //return;
      }
  
      if (residentialService === 'Carpet Cleaning') {
        message = (`
          email: ${formContact.email},
          phone: ${formContact.phone},
          zip code: ${formContact.zipCode},
          -
          building size: ${formProperty.buildingSize},
          rooms: ${formProperty.rooms},
          -
          service: ${residentialService},
          more informations: ${moreInformations},
        `);
        //return;
      }
  
      if (residentialService === 'Vacation Rental') {
        message = (`
          email: ${formContact.email},
          phone: ${formContact.phone},
          zip code: ${formContact.zipCode},
          -
          building size: ${formProperty.buildingSize},
          rooms: ${formProperty.rooms},
          bathrooms: ${formProperty.bathrooms},
          -
          service: ${residentialService},
          more informations: ${moreInformations},
        `);
        //return;
      }
    }

    console.log(message);

    setIsloading(true);

    const templateParams = {
      from_email: formContact.email,
      message,
      service: typeProperty === 'Commercial' ? typeProperty : residentialService,
    }
    
    emailjs.send("", "", templateParams, "")
      .then((response) => {
        console.log("Email enviado", response.status, response.text);

        setAlertOpen(true);
        setIsloading(false);
        // window.scrollTo(0, 0);
      }, (err) => {
        /* console.log("error:", err, err.status);
        console.dir(err) */
        if (err.status === 408) {
          toast({ type: 'danger', text: 'Sorry, the server took too long to respond. Please check your internet connection and try again.' });
        } else if (err.status === 500) {
          toast({ type: 'danger', text: 'Oops! There was a problem on the server. Our technical team has been notified and is working to fix this. Please try again later' });
        } else if (err.status === 503) {
          toast({ type: 'danger', text: 'Sorry, the service is temporarily unavailable. Please try again later while we resolve the issue.' });
        } else if (err.status === 504) {
          toast({ type: 'danger', text: 'Oops! It seems the connection to the server was interrupted. Please check your internet connection and try again.' });
        } else {
          toast({ type: 'danger', text: 'Oops! It seems something went wrong with the data you submitted. Please check and try again' });
        }
        
        setIsloading(false);
      });
  }

  const [alertOpen, setAlertOpen] = useState(false);

  const [isLoading, setIsloading] = useState(false);

  /* if (alertOpen) {
    return (
      <Alert onClose={() => setAlertOpen(false)} />
    )
  } */

  return (
    <Container>
      <div className='container__content'>
        <div id='form'></div>
        <div className='container__text'>
            <Reveal>
              <h2>Get in contact! <br /> <span>How can we help?</span></h2>
              <p>Discover how our cleaning services can bring new life to your home. Select the solution that best fits your needs.</p>
            </Reveal>
        </div>
      </div>

      <FormContainer>
        {
          alertOpen && (
            <Alert onClose={() => setAlertOpen(false)} />
          )
        }
      
        <Reveal>
          <FormGroup label="What's your property?" icon='property'>
            <RadioContainer 
              options={properties}
              selectedOption={typeProperty}
              onOptionChange={handleTypePropertyChange}
            />
          </FormGroup>
        </Reveal>
      
        {
          typeProperty === 'Residential' && (
            <Reveal>
              <FormGroup label="Choose the service" icon='tools'>
                <RadioContainer 
                  options={residentialServices}
                  selectedOption={residentialService}
                  onOptionChange={handleResidentialServiceChange}
                />
              </FormGroup>
            </Reveal>
          )
        }

        {
          (['Standard Clean', 'Deep Clean'].includes(residentialService) && typeProperty === 'Residential') && (
            <Reveal delay='0'>
              <FormGroup label="How often?" icon='calendar'>
                <RadioContainer 
                  options={intervals}
                  selectedOption={interval}
                  onOptionChange={handleIntervalChange}
                />
              </FormGroup>
            </Reveal>
          )
        }

        <Reveal delay='0.3'>
          {
            typeProperty !== 'Commercial' && (
              <RowContainer>
                <FormGroup /* label='Building size (sqft)' */ label='Sqft' icon='ruler'>
                  <input 
                    type='tel' 
                    // placeholder='Size in sqft' 
                    name='buildingSize'
                    value={formProperty.buildingSize}
                    onChange={handleFormPropertyChange}
                  />
                </FormGroup>

                <FormGroup label='Rooms' icon='room'>
                  <input 
                    type='tel' 
                    // placeholder='Quantity of rooms'
                    name='rooms'
                    value={formProperty.rooms}
                    onChange={handleFormPropertyChange}
                  />
                </FormGroup>

                {
                  residentialService !== 'Carpet Cleaning' && (
                    <FormGroup label='Bathrooms' icon='bathroom'>
                      <input 
                        type='tel' 
                        // placeholder='Quantity of bathrooms'
                        name='bathrooms'
                        value={formProperty.bathrooms}
                        onChange={handleFormPropertyChange}
                      />
                    </FormGroup>
                  )
                }

                {
                  !['Move In/Out', 'Vacation Rental'].includes(residentialService) && (
                    <FormGroup label='Pets' icon='email'>
                      <input 
                        type='tel' 
                        // placeholder='How many pets you have?'
                        name='pets'
                        value={formProperty.pets}
                        onChange={handleFormPropertyChange} 
                      />
                    </FormGroup>
                  )
                }
              </RowContainer>
            )
          }
        </Reveal>

        <RowContainer $flex={true}>
          <FormGroup 
            label='Email' icon='email'
            error={getErrorMessageByFieldName('email')}
          >
            <input 
              type='email' 
              // placeholder='What’s your email?'
              name='email' 
              value={formContact.email}
              onChange={handleFormContactChange}
            />
          </FormGroup>

          <FormGroup 
            label='Phone' icon='phone'
            error={getErrorMessageByFieldName('phone')}
          >
            <input 
              type='tel'
              // placeholder='What’s your number?'
              inputMode="numeric"
              pattern="[0-9]*"
              required
              name='phone'
              value={formContact.phone}
              onChange={handleFormContactChange}
            />
          </FormGroup>

          <FormGroup 
            label='Zip code' icon='map'
            error={getErrorMessageByFieldName('zipCode')}
          >
            <input 
              type='text' 
              // placeholder='What’s your Zip code?' 
              name='zipCode'
              value={formContact.zipCode}
              onChange={handleFormContactChange}
            />
          </FormGroup>

          {
            typeProperty === 'Commercial' && (
              <FormGroup /* label='Building size (sqft)' */ label='Sqft' icon='ruler'>
                <input 
                  type='text' 
                  /* placeholder='Size in sqft' */ 
                  name='buildingSize'
                  value={formProperty.buildingSize}
                  onChange={handleFormPropertyChange}
                />
              </FormGroup>
            )
          }
        </RowContainer>

        <Reveal>
          <FormGroup label='Tell us more information about your property!' icon='email'>
            <textarea
              id="myTextarea"
              name="comments"
              value={moreInformations}
              onChange={handleMoreInformationsChange}
              placeholder='A brief summary of your  property in order to let us understand the best woy to solve all the problems!'
            />
          </FormGroup>
        </Reveal>

        <ButtonForm 
          onClick={handleSubmit}
          disabled={!isFormValid || isLoading}
        >
          {
            !isLoading 
              ? (
                'Schedule a date'
              ) : (
                <div className="loader"></div>
              )
          }
        </ButtonForm>
      </FormContainer>
    </Container>
  )
}