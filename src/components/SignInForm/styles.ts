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
    margin-bottom: var(--px-20);
  }
  h1 {
    font-size: var(--ft-54);
    line-height: 1;
    font-weight: 700;

    span {
      color: var(--yellow-500);
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

  a {
    color: var(--yellow-500);
    margin-left: var(--px-10);
    text-align: right;
    font-size: var(--ft-14);
    transition: color 0.2s;

    &:hover {
      color: var(--yellow-400);
    }
  }
`;

export const Paragraph = styled.p`
  color: var(--gray-700);
  text-align: center;
  border-top: 1px solid var(--gray-750);
  padding-top: var(--px-8);
`;
