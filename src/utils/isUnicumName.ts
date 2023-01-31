import {HabitInterface} from "../types/habit";

const getHabitsNames = (habits: HabitInterface[]): string[] => {
    let habitsNames = habits.map((habit) => (
        habit.name
    ))

    return habitsNames
}

const IsUnicumName = (name: string, habits: HabitInterface[]): boolean => {
    const habitsNames = getHabitsNames(habits)
    for (const habitName of habitsNames) {
        if (name.toLowerCase() === habitName.toLowerCase()) {
            return false
        }
    }

    return true
}

export {IsUnicumName, getHabitsNames}