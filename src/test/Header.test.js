import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from "../components/Header"

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe.skip('Header', () => {
    it("renders the Header with full data", () => {
        const header = {title: "Header title", subtitle: "Header subtitle"}
        render(<Header header={header}/>)

        expect(screen.getByText(/Header title/)).toBeInTheDocument()
        expect(screen.getByText(/Header subtitle/)).toBeInTheDocument()
    })
    it("renders the Header with other full data", () => {
        const header = {title: "Header title-1", subtitle: "Header subtitle-1"}
        render(<Header header={header}/>)

        expect(screen.getByText(/Header title-1/)).toBeInTheDocument()
        expect(screen.getByText(/Header subtitle-1/)).toBeInTheDocument()
    })
    it("renders the Header with title only", () => {
        const header = {title: "Header title"}
        render(<Header header={header}/>)

        expect(screen.getByText(/Header title/)).toBeInTheDocument()
    })
    it('Header snapshot', () => {
        const header = {title: "Header title", subtitle: "Header subtitle"}
        const view = render(<Header header={header}/>)

        expect(view).toMatchSnapshot()
    })
    it('Header without data snapshot', () => {
        const view = render(<Header/>)

        expect(view).toMatchSnapshot()
    })
})