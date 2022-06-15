import React, {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import { TodoComment } from "typescript";
import { Item, useTodo } from "./TodoProvider";

interface Props {
  title: string;
}

function TodoHeader({ title }: Props) {
  const todos = useTodo();
  const [task, setTask] = useState<string>();
  const handleChange = (e: ChangeEvent): void => {
    setTask((e.target as HTMLInputElement).value);
  };
  return (
    <div>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: 700,
        }}>
        {title}
      </div>
      <div>
        <input type='text' value={task} onChange={handleChange} />
      </div>
      {/* <div>현재 남은 할 일은 {incompletes.length}개 입니다.</div> */}
    </div>
  );
}

export default TodoHeader;
