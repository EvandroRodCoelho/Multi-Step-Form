import { render, screen } from '@testing-library/react';
import { Step2 } from './';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
describe('Step2', () => {
  it('should render address information form correctly', () => {
    render(
      <MemoryRouter>
        <Step2 />
      </MemoryRouter>
    );

    const cepInput = screen.getByPlaceholderText('Enter CEP');
    const cityInput = screen.getByPlaceholderText('Enter city');
    const countryInput = screen.getByPlaceholderText('Enter country');
    const stateInput = screen.getByPlaceholderText('Enter state');

    expect(cepInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(countryInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
  });
});
