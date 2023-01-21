import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Footer from "../components/Footer"

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);


describe('Footer', () => {
    it("renders the Footer copyright", () => {
        const footer = {copyright: "Footer"}
        render(<Footer footer={footer}/>)

        expect(screen.getByText(/Footer/)).toBeInTheDocument()
    })
    it("renders the Footer other copyright", () => {
        const footer = {copyright: "Some copyright"}
        render(<Footer footer={footer}/>)

        expect(screen.getByText(/Some copyright/)).toBeInTheDocument()
    })
    it("renders the Footer with copyright only", () => {
        const footer = {copyright: "Footer copyright"}
        render(<Footer footer={footer}/>)

        expect(screen.getByText(/Footer copyright/)).toBeInTheDocument()
    })
    it('Footer snapshot', () => {
        const footer = {copyright: "Footer"}
        const view = render(<Footer footer={footer}/>)

        expect(view).toMatchSnapshot()
    })
    it('Footer without data snapshot', () => {
        const view = render(<Footer/>)

        expect(view).toMatchSnapshot()
    })
})