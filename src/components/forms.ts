import { Item } from "../types";

export const todoItem = (
  id: number,
  task: string,
  complete: boolean = false
): Item => ({
  id,
  task,
  complete,
});