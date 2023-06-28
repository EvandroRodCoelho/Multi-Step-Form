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
    screen.debug();
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
    const {getByText, getByRole} = render(<Step2 />, { wrapper: MemoryRouter });

    const button = getByText('Next step')
    await act(()=> {
          fireEvent.click(button)
      })
    expect(screen.getByLabelText("Zip Code")).toHaveValue("");

    const errorElement = getByRole('alert-Zipcode');

    await waitFor(()=> {
        expect(getByText("City is required")).toBeVisible();
        expect(getByText("Country is required")).toBeVisible();
        expect(getByText("State is required")).toBeVisible();
        expect(errorElement).toBeVisible();
    })
   
})
});
