import React, { createContext, useReducer, useRef } from "react";
import { Action, Item, NextId, TodoDispatch } from "../types";

const todos: Item[] = [
  {
    id: 0,
    task: "test task",
    complete: true,
  },
  {
    id: 1,
    task: "next todo",
    complete: false,
  },
];

const latestNextId: number = 2;

const reducer = function (state: Item[], action: Action) {
  switch (action.type) {
    case "ADD":
      return state.concat(action.todo);
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "UPDATE":
      return state.map((item) =>
        item.id === action.id ? { ...item, ...action.todo } : item
      );
  }
};

export const NextIdContext = createContext<NextId>({ current: latestNextId });
export const TodoStateContext = createContext<Item[]>([]);
export const TodoDispatchContext = createContext<TodoDispatch>(() => {});

function TodoProvider({ children }: React.PropsWithChildren) {
  const [todoItems, dispatch] = useReducer(reducer, todos);
  const nextId = useRef(latestNextId);

  return (
    <NextIdContext.Provider value={nextId}>
      <TodoDispatchContext.Provider
        value={{
          dispatch,
          find(id: number) {
            return todoItems.find((item) => item.id === id);
          },
          findAndUpdate(id: number) {
            const item = todoItems.find((item) => item.id === id);
            if (item) {
              item.complete = !item.complete;
            }
            return item;
          },
        }}>
        <TodoStateContext.Provider value={todoItems}>
          {children}
        </TodoStateContext.Provider>
      </TodoDispatchContext.Provider>
    </NextIdContext.Provider>
  );
}

export default TodoProvider;
