import styled from "styled-components";

export const Wrapper = styled.section`
  border: 1px solid #f00;
  height: 100vh;

  .container {
    display: grid;
    grid-template-columns: 13.75rem 23.125rem auto;
    grid-template-rows: var(--px-80) auto;
    grid-template-areas:
      "H H H"
      "AS AB CNT";
    gap: 1rem;
  }
`;

export const Sidebar = styled.aside`
  border: 1px solid #fff;
  height: 95rem;
  grid-area: AS;
`;

export const About = styled.div`
  border: 1px solid #f0f;
  grid-area: AB;
`;

export const Content = styled.div`
  border: 1px solid #00f;
  grid-area: CNT;
  overflow-y: auto;
`;
