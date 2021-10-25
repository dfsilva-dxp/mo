import styled from "styled-components";

export const Button = styled.button`
  height: var(--px-48);
  padding: 0 2.25rem;
  vertical-align: middle;
  user-select: none;
  border-radius: var(--px-4);
  font-size: var(--ft-14);
  color: var(--gray-500);
  line-height: 1.5;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;

  &.primary {
    background-color: var(--yellow-500);
    border: 1px solid transparent;
    &:not([disabled]):hover {
      background-color: var(--yellow-400);
    }
  }

  &.secondary {
    border: 1px solid var(--gray-150);
    background-color: var(--gray-750);
    &:not([disabled]):hover {
      background-color: var(--gray-700);
    }
  }
`;
