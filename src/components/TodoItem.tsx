import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../hooks/useContext";
import { Item } from "../types";
import Button from "./common/Button";
import { isComplete } from "./tools";

type Props = {
  todo: Item;
};

function TodoItem({ todo }: Props) {
  const [fade, setFade] = useState(todo.complete);
  const [show, setShow] = useState(false);
  const dispatch = useTodoDispatch();
  const onClick = (e: React.MouseEvent, id: number) => {
    const newItem = dispatch.findAndUpdate(id);
    dispatch.dispatch({ type: "UPDATE", id: id, todo: newItem });
    setFade(newItem.complete);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if ((e.target as HTMLLIElement).tagName === "LI") {
      switch (e.type) {
        case "mouseenter":
          setShow(true);
          break;
        case "mouseleave":
          setShow(false);
          break;
      }
    }
  };
  const handleRemove = (e: React.MouseEvent, id: number) => {
    dispatch.dispatch({ type: "REMOVE", id: id });
  };
  return (
    <li
      onMouseEnter={handleMouseMove}
      onMouseLeave={handleMouseMove}
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
      <span
        style={{
          flex: 1,
        }}>
        <span>{isComplete(todo.complete)}</span>
        <span
          style={{
            textDecorationThickness: 7,
            textDecorationColor: "rgba(0,0,0,0.3)",
            textDecoration: fade ? "line-through" : "",
          }}>
          {todo.task}
        </span>
      </span>
      <span
        style={{
          flex: 0.2,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 3,
        }}>
        {show && (
          <Button
            variant='danger'
            px={8}
            py={6}
            onClick={(e) => handleRemove(e, todo.id)}
            style={{
              animation: "fade 300ms ease both",
            }}>
            🗑️
          </Button>
        )}
        <Button
          variant={!fade ? "success" : "danger"}
          px={8}
          py={6}
          cases={"capital"}
          onClick={(e) => onClick(e, todo.id)}>
          {!fade ? "Done" : "Cancel"}
        </Button>
      </span>
    </li>
  );
}

export default TodoItem;
