import React, { useState } from "react";
import { useNextId, useTodo, useTodoDispatch } from "../hooks/useContext";
import { todoItem } from "./forms";
import { getCompletes } from "./tools";

type Props = {
  title: string;
};

const titleStyle = {
  fontSize: "2rem",
  fontWeight: 700,
  marginBottom: "1rem",
};

const subTitleStyle = {
  fontSize: "1rem",
  fontWeight: 700,
  marginBottom: "1rem",
};

function TodoHeader({ title }: Props) {
  const todos = useTodo();
  const nextId = useNextId();
  const [task, setTask] = useState<string>("");
  const dispatch = useTodoDispatch();

  const handleChange = (e: React.ChangeEvent): void => {
    setTask((e.target as HTMLInputElement).value);
  };
  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      dispatch.dispatch({
        type: "ADD",
        todo: todoItem(nextId.current, task),
      });

      nextId.current++;
      setTask("");
    }
  };

  return (
    <div>
      <div style={titleStyle}>{title}</div>
      <div style={subTitleStyle}>
        현재 남은 할 일 {getCompletes(todos, false).length} 개
      </div>
      <div>
        <input
          type='text'
          value={task}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {/* <div>현재 남은 할 일은 {incompletes.length}개 입니다.</div> */}
    </div>
  );
}

export default TodoHeader;
