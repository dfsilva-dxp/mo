import styled, { css } from "styled-components";

export const Button = styled.a`
  ${({ theme }) => css`
    display: inline-grid;
    grid-template-columns: auto 1fr;
    place-items: center;
    gap: ${theme.spacings.xsmall};
    background: ${theme.colors.panel};
    width: 100%;
    height: 10rem;
    padding: ${theme.spacings.small} 5.6rem;
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.large};
    cursor: pointer;
    transition: filter ${theme.transition.default};

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: repeat(2, auto);
    place-items: center;
    text-align: center;
    font-size: ${theme.font.sizes.small};

    span {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray400};
    }
  `}
`;
