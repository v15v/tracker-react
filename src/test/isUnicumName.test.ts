import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import {getHabitsNames, IsUnicumName} from "../utils/isUnicumName";

const janHabits = [
    {
        "id": "4e97442-2398-4f62-8091-4eb414d34ebc",
        "name": "Jan 1",
        "planned": [
            1,
            10
        ],
        "done": [
            9,
            2
        ],
        "undone": [
            17
        ]
    },
    {
        "id": "4997442-2398-4f62-8091-4eb414d34ebc",
        "name": "Jan 2",
        "planned": [
            12
        ],
        "done": [
            12
        ],
        "undone": [
            1
        ]
    },
    {
        "id": "49e9742-2398-4f62-8091-4eb414d34ebc",
        "name": "Jan 3",
        "planned": [
            1,
        ],
        "done": [
            12
        ],
        "undone": [
            7
        ]
    }
]

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('getMonthHabitsNames:', () => {
    it("getMonthHabitsNames(janHabits) return ['Jan 1', 'Jan 2', 'Jan 3']", () => {

        expect(getHabitsNames(janHabits)).toEqual(['Jan 1', 'Jan 2', 'Jan 3'])
    })
})

describe('isUnicumName:', () => {
    it("isUnicumName('Habit 1', janHabits) return 'true'", () => {

        expect(IsUnicumName("Habit 1", janHabits)).toEqual(true)
    })
    it("isUnicumName('Jan 1', janHabits) return 'false'", () => {

        expect(IsUnicumName("Jan 1", janHabits)).toEqual(false)
    })
    it("isUnicumName('JAN 1', janHabits) return 'false'", () => {

        expect(IsUnicumName("JAN 1", janHabits)).toEqual(false)
    })
    it("isUnicumName('jan 1', janHabits) return 'false'", () => {

        expect(IsUnicumName("jan 1", janHabits)).toEqual(false)
    })
})
