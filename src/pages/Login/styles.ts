import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: var(--px-80) calc(100vh - 10rem) var(--px-80);
`;

export const Header = styled.header`
  display: grid;
  place-items: center;

  background-color: var(--gray-800);

  .container > img {
    width: 4rem;
  }
`;

export const Footer = styled.footer`
  display: grid;
  place-items: center;

  p {
    font-size: var(--ft-12);
    text-transform: uppercase;
    color: var(--gray-400);

    transition: color 0.2s ease-out;

    &:hover {
      color: var(--white);
    }

    span {
      font-weight: 300;
      font-family: "Roboto";
      color: var(--yellow-500);
    }
  }
`;
