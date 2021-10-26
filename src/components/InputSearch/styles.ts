import styled from "styled-components";

export const WrapSearch = styled.label`
  height: var(--px-48);
  padding: 0 var(--px-40);
  width: min(400px, 100%);
  background: var(--gray-800);
  border-radius: var(--px-48);
  display: flex;
  align-items: center;
  position: relative;
`;

export const Icon = styled.div`
  width: var(--px-48);
  height: var(--px-48);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--ft-24);
`;

export const Input = styled.input`
  width: 100%;
  height: 70%;
  background-color: transparent;
  border: 0;
  outline: 0;
`;
