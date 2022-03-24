import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from "./types";

type BtnProps = Pick<ButtonProps, "size" | "fullSize" | "color">;

const buttonModifiers = {
  sm: (theme: DefaultTheme) => css`
    padding: 0.4rem 1rem;
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};

    svg {
      font-size: ${theme.font.sizes.small};
    }
  `,
  md: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};

    svg {
      font-size: ${theme.font.sizes.medium};
    }
  `,
  lg: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    height: 4rem;
    font-size: ${theme.font.sizes.medium};

    svg {
      font-size: 2rem;
    }
  `,
  fullSize: () => css`
    width: 100%;
  `,
  primary: () => css`
    background: linear-gradient(180deg, #f2a516 0%, #ffc727 50%);

    &:hover {
      background: linear-gradient(180deg, #ffc727 0%, #f2a516 50%);
    }
  `,
  darkgray: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: linear-gradient(180deg, #1f2029 0%, #022b3a 50%);

    &:hover {
      background: linear-gradient(180deg, #022b3a 0%, #1f2029 50%);
    }
  `,
  lightgray: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: linear-gradient(180deg, #616480 0%, #797d9a 50%);

    &:hover {
      background: linear-gradient(180deg, #797d9a 0%, #616480 50%);
    }
  `
};

export const Btn = styled.button<BtnProps>`
  ${({ theme, size, fullSize, color }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
    min-width: 64px;
    font-size: initial;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.gray750};
    border: 0;
    border-radius: ${theme.border.radius};

    ${!!size && buttonModifiers[size](theme)};
    ${fullSize && buttonModifiers.fullSize()};
    ${!!color && buttonModifiers[color](theme)};
  `}
`;
