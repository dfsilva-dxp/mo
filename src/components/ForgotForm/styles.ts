import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  height: 100%;
`;

export const Form = styled.form`
  display: grid;
  gap: var(--px-16);
  background-color: var(--gray-800);
  width: min(480px, 100%);
  border-radius: var(--px-8);
  padding: var(--px-64);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: var(--ft-24);
  }

  a {
    color: var(--yellow-500);
    font-size: var(--ft-14);
    display: flex;
    align-items: center;

    svg {
      font-size: var(--ft-16);
      margin-right: var(--px-8);
    }
  }
`;
