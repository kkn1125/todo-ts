import { useContext } from "react";
import { NextIdContext, TodoDispatchContext, TodoStateContext } from "../core/TodoProvider";

export const useNextId = function () {
  return useContext(NextIdContext);
};

export const useTodo = function () {
  return useContext(TodoStateContext);
};

export const useTodoDispatch = function () {
  return useContext(TodoDispatchContext);
};
