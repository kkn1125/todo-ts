import { Item } from "./TodoProvider";

export const getCompletes = (todos: Item[], incomplete: boolean = true) => {
  return todos.filter((item) => incomplete || !item.complete);
};

export const isComplete = (complete: boolean): string => (complete ? "(done)" : "");