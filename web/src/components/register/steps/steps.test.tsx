import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { Steps } from './';
import {describe, expect, it}  from "vitest";

describe('Steps', () => {
  it('should render steps correctly', () => {
    const currentStep = 2;
    render(<Steps currentStep={currentStep} />);

    const step1Element = screen.getByText('1');
    expect(step1Element).toBeInTheDocument();

    const step2Element = screen.getByText('2');
    expect(step2Element).toBeInTheDocument();

    const step3Element = screen.getByText('3');
    expect(step3Element).toBeInTheDocument();

    expect(step1Element).toHaveClass('bg-gray-300');
    expect(step2Element).toHaveClass('bg-blue-800');
    expect(step3Element).toHaveClass('bg-gray-300');
  });

  it('should render the default step correctly and not render additional steps', () => {
    const currentStep = 4; 
    render(<Steps currentStep={currentStep} />);

    const step4Element = screen.queryByText('4');
    expect(step4Element).toBeNull();

    const step5Element = screen.queryByText('5');
    expect(step5Element).toBeNull();
  });
});
