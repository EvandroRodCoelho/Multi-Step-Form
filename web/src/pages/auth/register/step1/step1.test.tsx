import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import {describe, expect, it}  from "vitest";
import { MemoryRouter } from 'react-router-dom';
import { Step1 } from "./";
describe("Step 1", () => {
    it("should able renders the elements", ()=> {
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
    
    it("should show error message when fields was empty",async () => {
        const {getByText} = render(        
            <MemoryRouter>
                <Step1 />
            </MemoryRouter>
        );
        const button = getByText('Next step')
        act(()=> {
            fireEvent.click(button)
        })

        await waitFor(()=> {
            expect(getByText("FullName is required")).toBeVisible();
            expect(getByText("Email is required")).toBeVisible();
            expect(getByText("Gender is required")).toBeVisible();
            expect(getByText("Password is required")).toBeVisible();
            expect(getByText("Password confirmation is required")).toBeVisible();
        })
       
    })

    it("should show error message when name is not valid ",async () => {
        const {getByText , getByPlaceholderText} = render(        
            <MemoryRouter>
                <Step1 />
            </MemoryRouter>
        );
        const inputName = getByPlaceholderText("Enter full name")
        const button = getByText('Next step')
        act(()=> {
            fireEvent.change(inputName, {target: {value:"2"}})
            fireEvent.click(button)
        })

        await waitFor(()=> {
            expect(getByText("Cannot contain special characters or numbers")).toBeVisible();
        })
        it("should show error message when email is not valid ",async () => {
            const {getByText , getByPlaceholderText} = render(        
                <MemoryRouter>
                    <Step1 />
                </MemoryRouter>
            );
            const inputEmail = getByPlaceholderText("Enter email")
            const button = getByText('Next step')
            act(()=> {
                fireEvent.change(inputEmail, {target: {value:"2"}})
                fireEvent.click(button)
            })
    
            await waitFor(()=> {
                expect(getByText("Invalid email")).toBeVisible();
            })
        })
        it("should show error message when password is not valid ",async () => {
            const {getByText , getByPlaceholderText} = render(        
                <MemoryRouter>
                    <Step1 />
                </MemoryRouter>
            );
            const inputPassword = getByPlaceholderText("Enter password")
            const button = getByText('Next step')
            act(()=> {
                fireEvent.change(inputPassword, {target: {value:"12345"}})
                fireEvent.click(button)
            })
    
            await waitFor(()=> {
                expect(getByText("Invalid password must be at least 6 characters")).toBeVisible();
            })
        })
        it("should show error message when confirm password is not valid ",async () => {
            const {getByText , getByPlaceholderText} = render(        
                <MemoryRouter>
                    <Step1 />
                </MemoryRouter>
            );
            const inputPassword = getByPlaceholderText("Enter password")
            const inputConfirmPassword = getByPlaceholderText("Enter a confirm password")
            const button = getByText('Next step')
            act(()=> {
                fireEvent.change(inputPassword, {target: {value:"12345"}})
                fireEvent.change(inputConfirmPassword, {target: {value:"123456"}})
                fireEvent.click(button)
            })
    
            await waitFor(()=> {
                expect(getByText("Passwords do not match")).toBeVisible();
            })
        })
    })
})