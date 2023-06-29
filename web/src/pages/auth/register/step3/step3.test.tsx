import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Step3 } from './';
import "@testing-library/jest-dom";
import {  UserProvider } from '../../../../context/userContext';


describe('Step3', () => {
  beforeEach(() => {
    render(
    
        <MemoryRouter>
          <UserProvider>
            <Step3 />
          </UserProvider>
        </MemoryRouter>
   
    );
  });
  it('should render social profiles form correctly', () => {

    const titleElement = screen.getByText('Social Profiles');
    expect(titleElement).toBeInTheDocument();

    const linkedinInput = screen.getByLabelText('Linkedin');
    const githubInput = screen.getByLabelText('Github');
    expect(linkedinInput).toBeInTheDocument();
    expect(githubInput).toBeInTheDocument();
  });

  it('should allow entering Linkedin and Github URLs',async () => {
   
   
    const linkedinInput = screen.getByLabelText('Linkedin') as HTMLInputElement;
    const githubInput = screen.getByLabelText('Github') as HTMLInputElement;

    fireEvent.change(linkedinInput, { target: { value: 'https://www.linkedin.com/in/example' } });
    fireEvent.change(githubInput, { target: { value: 'https://github.com/example' } });
    await waitFor(()=> {
      expect(linkedinInput.value).toBe('https://www.linkedin.com/in/example');
      expect(githubInput.value).toBe('https://github.com/example');
    })
  });

  it("should show error message when fields was empty",async () => {
    
    const button = screen.getAllByText('Finish')[0]
    act(()=> {
        fireEvent.click(button)
    })

    await waitFor(()=> {
        expect( screen.getByText("Linkedin url is required")).toBeVisible();
        expect( screen.getByText("GitHub url is required")).toBeVisible();
    })
  })
})

