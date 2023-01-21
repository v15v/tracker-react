import React, {useState} from "react";
import Habit from "./Habit";
import SelectMonth from "./SelectMonth";
import EditHabit from "./EditHabit";
import AddHabit from "./AddHabit";

interface Habit {
    name: string
}

interface Props {
    habits: Habit[],
    daysInMonth: number
}

const Main = (props: Props) => {
    const [habits] = useState(props.habits);
    return (<section className="section my-6">
            {/*Выводим поле выбора месяца и добавления новой привычки*/}
            <div className="container block is-widescreen">
                <div className="tile is-ancestor">
                    <div className="tile">
                        <div className="select block">
                            <SelectMonth />
                        </div>
                    </div>
                    <div className="tile">
                        <div className="control block container is-widescreen">
                            <AddHabit />
                        </div>
                    </div>
                </div>
            </div>
            {/*Выводим данные для каждой сохранённой привычки*/}
            <div id="month" className="container is-widescreen">
                {habits.map((habit) =>
                    <Habit key={habit.name} habit={habit}
                           daysInMonth={props.daysInMonth} />
                )}
            </div>
            {/*Добавляем модальное окно для редактирования имени привычки*/}
            <EditHabit />
        </section>
    )
}

export default Main