import styled from "styled-components";

export const FormGroup = styled.div`
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  width: var(--px-48);
  height: var(--px-48);
  font-size: var(--ft-24);
  display: grid;
  place-items: center;
  color: var(--gray-300);
`;

export const Input = styled.input`
  width: 100%;
  height: var(--px-48);
  padding: 0 3.5rem;
  border-radius: var(--px-4);
  border: 1px solid var(--gray-750);
  outline: 0;
  background-color: var(--gray-900);
  background-clip: padding-box;
  font-size: var(--ft-16);
  line-height: 1.5;
  transition: all 0.1s ease-out;

  &::placeholder {
    color: var(--gray-300);
  }

  &:hover:not(:disabled):not([readonly]),
  &:focus:not(:disabled):not([readonly]) {
    border-color: var(--yellow-500);
  }
`;
