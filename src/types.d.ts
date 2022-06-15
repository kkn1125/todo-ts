export interface Item {
  id: number;
  task: string;
  complete: boolean;
}

export type Variant =
  | "primary"
  | "info"
  | "danger"
  | "warning"
  | "success"
  | "secondary"
  | "dark"
  | "white"
  | "ghost"
  | "gray";

export type state = Item;

export type Action =
  | { type: "ADD"; todo: Item }
  | { type: "UPDATE"; id: number; todo: Item }
  | { type: "REMOVE"; id: number };

export type NextId = {
  current: number;
};

export type TodoDispatch = Dispatch<Action>;
