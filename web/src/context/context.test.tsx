
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';

import {describe, expect, it}  from "vitest";
import { UserContext, UserProvider  } from "./userContext";
import { useContext } from "react";
import { mockedUser } from "../mock/userMock";


describe('Context Api', () => {

    it("should have initial user value as mockedUser", () => {
        let userValue;
    
        render(
          <UserProvider>
            <TestComponent />
          </UserProvider>
        );
    
        function TestComponent() {
          const { user } = useContext(UserContext);
          userValue = user;
          return null;
        }
    
        expect(userValue).toEqual(mockedUser);
      });

      it("should set user fields correctly", () => {
        const updatedUser = {
          informationPessoal: {
            email: "test@example.com",
            fullName: "John Doe",
            password: "password",
            gender: "male",
          },
          address: {
            city: "City",
            country: "Country",
            state: "State",
            zipCode: "12345",
          },
          socialProfile: {
            urlGitHub: "https://github.com/test",
            urlLinkedin: "https://linkedin.com/in/test",
          },
        };
    
        let userValue;
    
        render(
          <UserProvider>
            <TestComponent />
          </UserProvider>
        );
    
        function TestComponent() {
          const { user, handleUser } = useContext(UserContext);
          userValue = user;
          handleUser(updatedUser);
    
          return null;
        }
    
        expect(userValue).toEqual(updatedUser);
    })
})