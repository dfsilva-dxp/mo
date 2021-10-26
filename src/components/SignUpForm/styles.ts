import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  height: 100%;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const WelcomeDisplay = styled.div`
  p {
    margin: var(--px-20) 0 var(--px-40) 0;
  }
  h1 {
    font-size: var(--ft-54);
    line-height: 1;
    font-weight: 700;

    span {
      color: var(--yellow-500);
    }
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
`;
