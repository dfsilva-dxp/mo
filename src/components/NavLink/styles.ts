import styled from "styled-components";

export const Wrapper = styled.section`
  a {
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
