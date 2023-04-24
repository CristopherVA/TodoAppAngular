export interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

export interface OptionType {
  all: string;
  active: string;
  completed: string;
}

export type TypeOption = "all" | "active" | "completed"
