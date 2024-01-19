import { Container } from './styles';

import FormGroup from '../FormGroup';

export default function RadioContainer({options, selectedOption, onOptionChange}) {

  return (
    <Container $optionsLenght={options?.length}>
      {
        options?.map((option) => (
          <div key={option}>
            <input
              type="radio"
              id={option}
              name={`${Math.random()}`}
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
            />
            <label htmlFor={option}>
              {option}
            </label>
          </div>
        ))
      }

      {/* <div>
        <input
          type="radio"
          id="option1"
          name="options"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <label htmlFor="option1">
          Residencial
        </label>
      </div> */}

      {/* <div>
        <input
          type="radio"
          id="option2"
          name="options"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        <label htmlFor="option2">
          Commercial
        </label>
      </div> */}
    </Container>
  )
}