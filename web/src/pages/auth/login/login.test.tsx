import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import {describe, expect, it}  from "vitest";
import { MemoryRouter } from 'react-router-dom';
import { Login } from "./";
import { UserProvider } from "../../../context/userContext";
describe("Step 1", () => {
    it("should able renders the elements", ()=> {
        const {getByLabelText} = render(
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
        const { getByTitle,getByRole } = render(
            <MemoryRouter>
                <UserProvider>
                    <Login />
                </UserProvider>
            </MemoryRouter>
        );

        const button = getByRole('button');
        act(()=> {
            fireEvent.click(button)
        })
        await waitFor(()=> {
            expect(getByTitle("password invalid")).toBeVisible();
            expect(getByTitle("email invalid")).toBeVisible();
        })
    })
});