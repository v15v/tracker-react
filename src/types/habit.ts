export interface HabitInterface {
    id: string,
    name: string,
    active: boolean,
    planned: number[],
    done: number[],
    undone: number[]
}