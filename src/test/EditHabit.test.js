import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import EditHabit from "../components/EditHabit";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);


// TODO: Написать тесты для редактирования имени привычки
//  Рендер привычки
//  Изменение имени привычки
//  Проверка, что новое имя было выведено на страницу
describe('EditHabit', () => {
    it("renders the Footer copyright", () => {
        const footer = {copyright: "Footer"}
        render(<EditHabit/>)

        expect(screen.getByText(/Footer/)).toBeInTheDocument()
    })
})
