import styled from "styled-components";

export const Wrapper = styled.section`
  padding-bottom: var(--px-20);

  h4 {
    font-size: var(--ft-14);
    color: var(--gray-400);
    padding-bottom: var(--px-16);
    text-transform: uppercase;
  }
`;

export const Links = styled.span`
  display: grid;
  gap: var(--px-16);

  span {
    font-family: "Roboto Mono", sans-serif;
    font-size: var(--ft-15);
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in-out;

    svg {
      margin-right: var(--px-8);
      font-size: var(--ft-20);
    }

    &.active,
    &:hover {
      color: var(--yellow-500);
    }
  }
`;
