import React from "react";
import TodoItem from "./TodoItem";
import { Item } from "./TodoProvider";

type Props = {
  todoList: Item[];
};

function TodoList({ todoList }: Props) {
  return (
    <ul>
      {todoList.map((item: Item) => (
        <TodoItem todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
