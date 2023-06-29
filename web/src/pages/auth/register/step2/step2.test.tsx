import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Step2 } from './';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
import { useContext } from 'react';
import { UserContext, UserProvider } from '../../../../context/userContext';
describe('Step2', () => {
  it('should render address information form correctly', () => {

   const {getByPlaceholderText} = render(
      <MemoryRouter>
        <UserProvider>
          <Step2 />
        </UserProvider>
      </MemoryRouter>
    );

    const cepInput = getByPlaceholderText('Enter Zip Code');
    const cityInput = getByPlaceholderText('Enter city');
    const countryInput = getByPlaceholderText('Enter country');
    const stateInput = getByPlaceholderText('Enter state');

    expect(cepInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(countryInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
  });
  it("should show error message when fields was empty",async () => {
    const {getByText, getByRole} = render(
    <UserProvider>
      <Step2 />
    </UserProvider>    
    , { wrapper: MemoryRouter });
    
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
