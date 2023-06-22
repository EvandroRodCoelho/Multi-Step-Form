import "@testing-library/jest-dom";
import {render} from "@testing-library/react";
import {describe, expect, it}  from "vitest";
import {Error} from "./";
import { MemoryRouter } from 'react-router-dom';
describe("Error", () => {
    it("should able error page is render", ()=> {
        const {getByText} = render(
        <MemoryRouter>
            <Error />
        </MemoryRouter>
        );

        expect(getByText("We can't find that page.")).toBeInTheDocument();
        expect(getByText('Home')).toBeInTheDocument();
    })
})