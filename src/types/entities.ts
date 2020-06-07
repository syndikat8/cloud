export type QualitieType = {
    qualitie: string
    id: string
}

export type UpdateTaskType = {
    isDone?: boolean
    priority?: string
    title?: string
}

export type TaskType = {
    created: string
    updated: string
    finished: string
    id: number
    isDone: boolean
}
