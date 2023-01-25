import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import getMonthDaysArray from "../utils/getMonthDaysArray";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);


describe('getMonthDaysArray', () => {
    it("getMonthDaysArray(3) retrun ['01','02','03']", () => {

        expect(getMonthDaysArray(3)).toEqual(['01', '02', '03'])
    })
    it("getMonthDaysArray('0') retrun []", () => {

        expect(getMonthDaysArray(0)).toEqual([])
    })
})
