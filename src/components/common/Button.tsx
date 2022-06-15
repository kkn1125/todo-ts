import React from "react";
import styled from "styled-components";
import { Variant } from "../../types";
import { theme } from "../theme";

type ButtonStyle = {
  [padding: string]: number | string;
};

type Props = {
  children: React.ReactNode;
  px?: number;
  py?: number;
  variant?: Variant;
  cases?: "upper" | "lower" | "capital";
  onClick?: React.MouseEventHandler;
  style?: object;
};

type ButtonBlock = {
  cases: string;
  variant: string;
};

type CasesDict = {
  upper: string;
  lower: string;
  capital: string;
};

const casesDict: CasesDict = {
  upper: "uppercase",
  lower: "lowercase",
  capital: "capitalize",
};

const buttonStyle = (px: number, py: number): ButtonStyle => ({
  paddingLeft: px,
  paddingRight: px,
  paddingTop: py,
  paddingBottom: py,
});

const ButtonBlock = styled.button<ButtonBlock>`
  &:hover {
    background: ${(props) => theme[props.variant].background}c5 !important;
  }
  &:focus-within {
    box-shadow: 0 0 0 5px ${(props) => theme[props.variant].background}35;
  }
  display: inline-block;
  transition: 150ms ease-in-out;
  border-width: 0;
  outline: none;
  border-radius: 10px;
  text-transform: ${(props) => {
    return casesDict["upper"];
  }};
  width: 100%;
  height: 100%;
  max-width: 80px;
  min-height: 30px;
`;

function Button({
  children,
  px = 8,
  py = 6,
  variant = "info",
  cases = "capital",
  onClick,
  style,
}: Props) {
  return (
    <ButtonBlock
      variant={variant}
      cases={cases}
      style={{
        ...buttonStyle(px, py),
        ...theme[variant],
        ...style,
      }}
      onClick={onClick}>
      {children}
    </ButtonBlock>
  );
}

export default Button;
