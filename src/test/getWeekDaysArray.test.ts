import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import getWeekDaysArray from "../utils/getWeekDaysArray";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const weekDaysFebruary = ["ср", "чт", "пт", "сб", "вс", "пн", "вт", "ср", "чт", "пт", "сб", "вс", "пн", "вт", "ср", "чт", "пт", "сб", "вс", "пн", "вт", "ср", "чт", "пт", "сб", "вс", "пн", "вт"]
const weekDaysJune = ["чт", "пт", "сб", "вс", "пн", "вт", "ср", "чт", "пт", "сб", "вс", "пн", "вт", "ср", "чт", "пт", "сб", "вс", "пн", "вт", "ср", "чт", "пт", "сб", "вс", "пн", "вт", "ср", "чт", "пт"]

describe('getMonthDaysArray', () => {
    it("getWeekDaysArray(2) return weekDaysFebruary", () => {

        expect(getWeekDaysArray(2, 2023)).toEqual(weekDaysFebruary)
    })
    it("getWeekDaysArray(6) return weekDaysJune", () => {

        expect(getWeekDaysArray(6, 2023)).toEqual(weekDaysFebruary)
    })
})
