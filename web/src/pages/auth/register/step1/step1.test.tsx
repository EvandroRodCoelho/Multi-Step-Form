import "@testing-library/jest-dom";
import {render} from "@testing-library/react";
import {describe, expect, it}  from "vitest";
import { MemoryRouter } from 'react-router-dom';
import { Step1 } from "./";
describe("Step 1", () => {
    it("should able renders the form fields", ()=> {
        const {getByText, getByLabelText} = render(
        <MemoryRouter>
            <Step1 />
        </MemoryRouter>
        );

        expect(getByLabelText('Full Name')).toBeInTheDocument();
        expect(getByLabelText('Gender')).toBeInTheDocument();
        expect(getByLabelText('Email')).toBeInTheDocument();
        expect(getByLabelText('Password')).toBeInTheDocument();
        expect(getByLabelText('Confirm password')).toBeInTheDocument();

        expect(getByText('Next step')).toBeInTheDocument();
    })
})