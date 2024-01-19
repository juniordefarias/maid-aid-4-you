import { useState } from 'react';

import { Container } from './styles';

export default function CheckboxContainer({options, onOptionChange}) {
  /* const [checkboxValues, setCheckboxValues] = useState({
    opcao1: false,
    opcao2: false,
    opcao3: false,
  }); */

  /* const [checkboxValues, setCheckboxValues] = useState(
    options.map((option, index) => (
      { 
        id: index, 
        name: option, 
        checked: false 
      }
    ))
  );

  function handleCheckboxChange(event) {
    const { id, name, checked } = event.target;
    setCheckboxValues((prevValues) => (
      prevValues.map((checkbox) => (
        checkbox.id === id
         ? {...checkbox, checked: !checkbox.checked}
         : checkbox
      ))
    ));
  }; */

  return (
    <Container>
      {
        options.map((checkbox) => (
          <label key={checkbox.id}>
            <input
              type="checkbox"
              id={checkbox.id}
              name={checkbox.id}
              checked={checkbox.checked}
              onChange={onOptionChange}
            />
            <span>
              {checkbox.name}
            </span>
          </label>
        ))
      }

      {/* <label>
        <input
          type="checkbox"
          name="opcao1"
          checked={checkboxValues.opcao1}
          onChange={handleCheckboxChange}
        />
        Opção 1
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="opcao2"
          checked={checkboxValues.opcao2}
          onChange={handleCheckboxChange}
        />
        Opção 2
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="opcao3"
          checked={checkboxValues.opcao3}
          onChange={handleCheckboxChange}
        />
        Opção 3
      </label> */}
    </Container>
  );
}