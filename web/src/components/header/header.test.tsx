
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';

import {describe, expect, it}  from "vitest";
import { Header } from ".";
import { MemoryRouter } from "react-router-dom";

describe('Steps', () => {
    it('should than button menu render correctly', () => {
        const {getByRole} = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>)
        const button = getByRole('menu');
        expect(button).toBeInTheDocument();
    })

   

});