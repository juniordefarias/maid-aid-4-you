import { useState, useMemo, useEffect } from 'react';

import emailjs from '@emailjs/browser';

import { Container, ButtonForm, RowContainer } from './styles';

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
    'Handyman',
    'Move In/Out',
    'Carpet Cleaning',
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

  const standardAdditionalServices = [
    {name: 'Change sheets', value: 15},
    {name: 'Fridge cleaning', value: 30},
    {name: 'Oven cleaning', value: 20},
    {name: 'Cabinets inside cleaning', value: 30},
    {name: 'Baseboard cleaning with Bleach', value: 30},
    {name: 'Blinds cleaning with bleach', value: 30},
    {name: 'Windows inside/outside', value: 10},
  ];
  const [standardAdditionalService, setStandardAdditionalService] = useState(
    standardAdditionalServices.map((option, index) => (
      { 
        id: index, 
        name: option.name,
        value: option.value, 
        checked: false 
      }
    ))
  );
  function handleStandardAdditionalServiceChange(event) {
    const { id, name, checked } = event.target;

    const stateUpdate = standardAdditionalService.map((checkbox) => (
      checkbox.id === Number(id)
       ? {...checkbox, checked: !checkbox.checked}
       : checkbox
    ));

    setStandardAdditionalService(stateUpdate);
  };

  const deepAdditionalServices = [
    {name: 'Fridge cleaning', value: 30},
    {name: 'Oven cleaning', value: 20},
    {name: 'Organize pantry itens', value: 20},
    {name: 'Organize cabinets', value: 50},
    {name: 'Vaccum and swiffer in the garage', value: 20},
  ];
  const [deepAdditionalService, setDeepAdditionalService] = useState(
    deepAdditionalServices.map((option, index) => (
      { 
        id: index, 
        name: option.name,
        value: option.value, 
        checked: false 
      }
    ))
  );
  function handleDeepAdditionalServiceChange(event) {
    const { id, name, checked } = event.target;

    const stateUpdate = deepAdditionalService.map((checkbox) => (
      checkbox.id === Number(id)
       ? {...checkbox, checked: !checkbox.checked}
       : checkbox
    ));

    setDeepAdditionalService(stateUpdate);
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

  const budget = useMemo(() => {
    if (residentialService === 'Standard Clean') {
      const valueBase = 85;

      const additionalTotal = standardAdditionalService.reduce((total, item) => {
          if (item.checked) {
              return total + Number(item.value);
          }
          return total;
      }, 0);

      const additionalPet = Number(formProperty.pets) === 0 ? 0 : 30;

      const calc = (0.08 * Number(formProperty.buildingSize) + additionalTotal + additionalPet);

      return calc > valueBase ? calc : valueBase
    }

    if (residentialService === 'Deep Clean') {
      const valueBase = 170;

        const additionalTotal = deepAdditionalService.reduce((total, item) => {
          if (item.checked) {
              return total + Number(item.value);
          }
          return total;
      }, 0);

      /* console.log({additionalTotal}) */

      const additionalPet = Number(formProperty.pets) === 0 ? 0 : 60;

      const calc = (0.16 * Number(formProperty.buildingSize) + additionalTotal + additionalPet);

      return calc > valueBase ? calc : valueBase
    }

    return null;
  }, [residentialService, standardAdditionalService, deepAdditionalServices, formProperty.pets, formProperty.buildingSize]);

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
          additional services: ${standardAdditionalService.reduce(checkedServicesToString, '')},
          more informations: ${moreInformations},
          how often: ${interval},
          budget: ${Number(budget).toLocaleString('en-US', { style: 'currency', currency: 'USD' })},
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
          additional services: ${deepAdditionalService.reduce(checkedServicesToString, '')},
          more informations: ${moreInformations},
          how often: ${interval},
          budget: ${Number(budget).toLocaleString('en-US', { style: 'currency', currency: 'USD' })},
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
          pets: ${formProperty.pets},
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
    
    /* emailjs.send("service_chwcqnk", "template_ci3zktl", templateParams, "92THF5nm3464N9pdX")
      .then((response) => {
        console.log("Email enviado", response.status, response.text);

        setAlertOpen(true);
        setIsloading(false);
        // window.scrollTo(0, 0);
      }, (err) => {
        console.log("error:", err);
        setIsloading(false);
      }); */
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

      {
        alertOpen && (
          <Alert onClose={() => setAlertOpen(false)} />
        )
      }
      
      <Reveal delay='0'>
        <h2>Get in contact!</h2>
      </Reveal>

      <Reveal>
        <FormGroup label="What's your property?" icon='email'>
          <RadioContainer 
            options={properties}
            selectedOption={typeProperty}
            onOptionChange={handleTypePropertyChange}
          />
        </FormGroup>
      </Reveal>
      

      {
        typeProperty === 'Residential' && (
          <>
            <Reveal>
              <FormGroup label="Choose the service" icon='email'>
                <RadioContainer 
                  options={residentialServices}
                  selectedOption={residentialService}
                  onOptionChange={handleResidentialServiceChange}
                />
              </FormGroup>
            </Reveal>

            {
              /* !['Handyman', 'Carpet Cleaning'].includes(residentialService) && ( */
              residentialService !== 'Handyman' && (
                <Reveal delay='0.3'>
                  <RowContainer>
                    <FormGroup label='Building size' icon='ruler'>
                      <input 
                        type='tel' 
                        placeholder='Size in sqft' 
                        name='buildingSize'
                        value={formProperty.buildingSize}
                        onChange={handleFormPropertyChange}
                      />
                    </FormGroup>

                    <FormGroup label='Rooms' icon='room'>
                      <input 
                        type='tel' 
                        placeholder='Quantity of rooms'
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
                            placeholder='Quantity of bathrooms'
                            name='bathrooms'
                            value={formProperty.bathrooms}
                            onChange={handleFormPropertyChange}
                          />
                        </FormGroup>
                      )
                    }

                    {
                      !['Carpet Cleaning', 'Vacation Rental', 'Handyman'].includes(residentialService) && (
                        <FormGroup label='Pets' icon='email'>
                          <input 
                            type='tel' 
                            placeholder='How many pets you have?'
                            name='pets'
                            value={formProperty.pets}
                            onChange={handleFormPropertyChange} 
                          />
                        </FormGroup>
                      )
                    }
                  </RowContainer>
                </Reveal>
              )
            }
          </>
        )
      }

      {
        (residentialService === 'Standard Clean' && typeProperty === 'Residential') && (
          <Reveal delay='0'>
            <FormGroup label="Additional services" icon='tools'>
              <CheckboxContainer
                options={standardAdditionalService}
                onOptionChange={handleStandardAdditionalServiceChange}
              />
            </FormGroup>
          </Reveal>
        )
      }

{
        (residentialService === 'Deep Clean' && typeProperty === 'Residential') && (
          <Reveal delay='0'>
            <FormGroup label="Additional services" icon='tools'>
              <CheckboxContainer
                options={deepAdditionalService}
                onOptionChange={handleDeepAdditionalServiceChange}
              />
            </FormGroup>
          </Reveal>
        )
      }

      {
        (residentialService === 'Handyman' && typeProperty === 'Residential') && (
          <Reveal delay='0'>
            <FormGroup label="Handyman's services" icon='tools'>
              <CheckboxContainer
                options={checkboxValues}
                onOptionChange={handleCheckboxChange}
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

      <Reveal>
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
              <FormGroup label='Building size' icon='ruler'>
                <input 
                  type='text' 
                  placeholder='Size in sqft' 
                  name='buildingSize'
                  value={formProperty.buildingSize}
                  onChange={handleFormPropertyChange}
                />
              </FormGroup>
            )
          }
        </RowContainer>
      </Reveal>

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
              budget && isFormValid 
                ? (
                  `Schedule a date ${(budget && isFormValid) && `${Number(budget).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}`
                ) : (
                  'Schedule a date'
                )
              /* `Schedule a date ${(budget && isFormValid) && `${Number(budget).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}` */
            ) : (
              <div className="loader"></div>
            )
        }
        

        {/* Schedule a date {(budget && isFormValid) && `${Number(budget).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`} */}
      </ButtonForm>
    </Container>
  )
}