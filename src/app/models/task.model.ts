export enum TaskPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

export interface Task {
    id: number;
    title: string;
    description: string;
    priority: TaskPriority;
    done: boolean;
};