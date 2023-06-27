import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
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

    const cepInput = screen.getByPlaceholderText('Enter Zip Code');
    const cityInput = screen.getByPlaceholderText('Enter city');
    const countryInput = screen.getByPlaceholderText('Enter country');
    const stateInput = screen.getByPlaceholderText('Enter state');

    expect(cepInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(countryInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
  });
  it("should show error message when fields was empty",async () => {
    const {getByText} = render(        
        <MemoryRouter>
            <Step2 />
        </MemoryRouter>
    );
    const button = getByText('Next step')
    act(()=> {
        fireEvent.click(button)
    })

    await waitFor(()=> {
        expect(getByText("Zip Code is required")).toBeVisible();
        expect(getByText("City is required")).toBeVisible();
        expect(getByText("Country is required")).toBeVisible();
        expect(getByText("State is required")).toBeVisible();
    })
   
})
});
