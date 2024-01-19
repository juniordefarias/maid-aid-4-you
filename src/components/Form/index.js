import { useState } from 'react';

import { Container, ButtonForm, RowContainer } from './styles';

import FormGroup from '../FormGroup';
import RadioContainer from '../RadioContainer';
import CheckboxContainer from '../CheckboxContainer';

import Reveal from '../Reveal';

export default function Form() {
  const properties = ['Residencial', 'Commercial']
  const [typeProperty, setTypeProperty] = useState('Residencial');
  const handleTypePropertyChange = (event) => {
    setTypeProperty(event.target.value);
  };

  const residencialServices = [
    'Standard Clean',
    'Deep Clean',
    'Handyman',
    'Move In/Out',
    'Carpet Cleaning',
    'Vocation Rental'
  ];
  const [residencialService, setResidencialService] = useState(residencialServices[0]);
  const handleResidencialServiceChange = (event) => {
    setResidencialService(event.target.value);
  };

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

  const [formContact, setFormContact] = useState({
    email: '',
    phone: '',
    zipCode: '',
  });
  const handleFormContactChange = (event) => {
    const { name, value } = event.target;
    setFormContact((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

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
      [name]: value,
    }));
  };

  const isFormValid = formContact.email !== '' && formContact.phone !== '' && formContact.zipCode !== '' ? true : false;

  

  function handleSubmit(event) {
    event.preventDefault();


    if (typeProperty === 'Commercial') {
      console.log({
        typeProperty,
        formContact,
        moreInformations,
        buildingSize: formProperty.buildingSize,
      });
      return
    }

    if (residencialService === 'Handyman') {
      console.log({
        typeProperty,
        residencialService,
        handymanServices: checkboxValues.filter((item) => item.checked),
        formContact,
        moreInformations
      });
      return
    }

    if (residencialService === 'Standard Clean') {
      console.log({
        typeProperty,
        residencialService,
        standardAdditionalService: standardAdditionalService.filter((item) => item.checked),
        formProperty,
        interval,
        formContact,
        moreInformations
      });
      return
    }

    if (residencialService === 'Deep Clean') {
      console.log({
        typeProperty,
        residencialService,
        formProperty,
        interval,
        formContact,
        moreInformations
      });
      return
    }
  }

  return (
    <Container>
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
        typeProperty === 'Residencial' && (
          <>
            <Reveal>
              <FormGroup label="Choose the service" icon='email'>
                <RadioContainer 
                  options={residencialServices}
                  selectedOption={residencialService}
                  onOptionChange={handleResidencialServiceChange}
                />
              </FormGroup>
            </Reveal>

            {
              /* !['Handyman', 'Carpet Cleaning'].includes(residencialService) && ( */
              residencialService !== 'Handyman' && (
                <Reveal delay='0.3'>
                  <RowContainer>
                    <FormGroup label='Building size' icon='ruler'>
                      <input 
                        type='text' 
                        placeholder='Size in sqft' 
                        name='buildingSize'
                        value={formProperty.buildingSize}
                        onChange={handleFormPropertyChange}
                      />
                    </FormGroup>

                    <FormGroup label='Rooms' icon='room'>
                      <input 
                        type='text' 
                        placeholder='Quantity of rooms'
                        name='rooms'
                        value={formProperty.rooms}
                        onChange={handleFormPropertyChange}
                      />
                    </FormGroup>

                    {
                      residencialService !== 'Carpet Cleaning' && (
                        <FormGroup label='Bathrooms' icon='bathroom'>
                          <input 
                            type='text' 
                            placeholder='Quantity of bathrooms'
                            name='bathrooms'
                            value={formProperty.bathrooms}
                            onChange={handleFormPropertyChange}
                          />
                        </FormGroup>
                      )
                    }

                    {
                      !['Carpet Cleaning', 'Vocation Rental', 'Handyman'].includes(residencialService) && (
                        <FormGroup label='Pets' icon='email'>
                          <input 
                            type='text' 
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
        (residencialService === 'Standard Clean' && typeProperty === 'Residencial') && (
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
        (residencialService === 'Handyman' && typeProperty === 'Residencial') && (
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
        (['Standard Clean', 'Deep Clean'].includes(residencialService) && typeProperty === 'Residencial') && (
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
          <FormGroup label='Email' icon='email'>
            <input 
              type='email' 
              placeholder='What’s your email?'
              name='email' 
              value={formContact.email}
              onChange={handleFormContactChange}
            />
          </FormGroup>

          <FormGroup label='Phone' icon='phone'>
            <input 
              type='tel'
              placeholder='What’s your number?'
              inputMode="numeric"
              pattern="[0-9]*"
              required
              name='phone'
              value={formContact.phone}
              onChange={handleFormContactChange}
            />
          </FormGroup>

          <FormGroup label='Zip code' icon='map'>
            <input 
              type='text' 
              placeholder='What’s your Zip code?' 
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

      <ButtonForm onClick={handleSubmit}>
        Schedule a date
      </ButtonForm>
    </Container>
  )
}