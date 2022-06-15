import React from "react";
import { Item } from "./TodoProvider";
import { isComplete } from "./tools";

type Props = {
  todo: Item;
};

function TodoItem({ todo }: Props) {
  return (
    <li>
      {todo.id} {todo.task} {isComplete(todo.complete)}
    </li>
  );
}

export default TodoItem;
