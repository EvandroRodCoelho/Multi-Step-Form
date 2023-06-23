import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Step3 } from './';
import "@testing-library/jest-dom";

describe('Step3', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Step3 />
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

  it('should allow entering Linkedin and Github URLs', () => {
    const linkedinInput = screen.getByLabelText('Linkedin') as HTMLInputElement;
    const githubInput = screen.getByLabelText('Github') as HTMLInputElement;

    fireEvent.change(linkedinInput, { target: { value: 'https://www.linkedin.com/in/example' } });
    fireEvent.change(githubInput, { target: { value: 'https://github.com/example' } });

    expect(linkedinInput.value).toBe('https://www.linkedin.com/in/example');
    expect(githubInput.value).toBe('https://github.com/example');
  });


});
