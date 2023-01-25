import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import getDoubleDigit from "../utils/doubleDigit";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);


describe('getDoubleDigit:', () => {
    it("getDoubleDigit(3) return '03'", () => {

        expect(getDoubleDigit(3)).toEqual('03')
    })
    it("getDoubleDigit(31) return '31'", () => {

        expect(getDoubleDigit(31)).toEqual('31')
    })
    it("getDoubleDigit(100) return '100'", () => {

        expect(getDoubleDigit(100)).toEqual('100')
    })
})
