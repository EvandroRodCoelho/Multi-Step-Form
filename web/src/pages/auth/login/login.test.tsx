import "@testing-library/jest-dom";
import { act, fireEvent, getByRole, render, waitFor } from "@testing-library/react";
import {describe, expect, it}  from "vitest";
import { MemoryRouter } from 'react-router-dom';
import { Login } from "./";
import { UserProvider } from "../../../context/userContext";
describe("Step 1", () => {
    it("should able renders the elements", ()=> {
        const {getByText, getByLabelText} = render(
        <MemoryRouter>
            <UserProvider>
                <Login />
            </UserProvider>
        </MemoryRouter>
        );

        expect(getByLabelText('Email')).toBeInTheDocument();
        expect(getByLabelText('Password')).toBeInTheDocument();
        
    })

    it("should able invalid login render message error", async () => {
        const { getByRole } = render(
            <MemoryRouter>
                <UserProvider>
                    <Login />
                </UserProvider>
            </MemoryRouter>
        );

        const button = getByRole('Login');
        act(()=> {
            fireEvent.click(button)
        })
        await waitFor(()=> {
            expect(getByRole("alert-email-invalid")).toBeVisible();
            expect(getByRole("alert-password-invalid")).toBeVisible();
        })


    })
});