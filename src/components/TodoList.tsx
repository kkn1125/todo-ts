import React from "react";
import { Item } from "../types";
import TodoItem from "./TodoItem";

type Props = {
  todoList: Item[];
};

function TodoList({ todoList }: Props) {
  return (
    <ul>
      {todoList.map((item: Item) => (
        <TodoItem key={item.id + item.task} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
