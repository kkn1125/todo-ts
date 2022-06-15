import React, {
  createContext,
  Dispatch,
  useContext,
  useReducer,
  useRef,
} from "react";

export interface Item {
  id: number;
  task: string;
  complete: boolean;
}

export type state = Item;

export type Action =
  | { type: "ADD"; todo: Item }
  | { type: "UPDATE"; id: number; todo: Item }
  | { type: "REMOVE"; id: number };

type NextId = {
  current: number;
};

type TodoDispatch = Dispatch<Action>;

const todos: Item[] = [
  {
    id: 0,
    task: "test task",
    complete: false,
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

const NextIdContext = createContext<NextId | null>(null);
const TodoStateContext = createContext<Item[]>([]);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);

function TodoProvider({ children }: React.PropsWithChildren) {
  const [todoItems, dispatch] = useReducer(reducer, todos);
  const nextId = useRef(latestNextId);
  return (
    <NextIdContext.Provider value={nextId}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoStateContext.Provider value={todoItems}>
          {children}
        </TodoStateContext.Provider>
      </TodoDispatchContext.Provider>
    </NextIdContext.Provider>
  );
}

export const useNextId = function () {
  return useContext(NextIdContext);
};

export const useTodo = function () {
  return useContext(TodoStateContext);
};

export const useTodoDispatch = function () {
  return useContext(TodoDispatchContext);
};

export default TodoProvider;
