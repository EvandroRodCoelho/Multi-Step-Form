
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';

import {describe, expect, it}  from "vitest";
import { UserInformation } from ".";


describe('Steps', () => {
    it('should than button menu render correctly', () => {
        const {getByText} = render(<UserInformation information="email@gmail.com" title="email"  />)
        const emailTitle = getByText("email")
        const email =  getByText("email@gmail.com") 
        expect(emailTitle).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    })
})
   
