import styled, { css, DefaultTheme } from "styled-components";

import { TextFieldProps } from "./types";

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray750};
      user-select: none;

      &::placeholder {
        color: currentColor;
      }
    }
  `
};

export const Wrapper = styled.div<Pick<TextFieldProps, "disabled">>`
  ${({ theme, disabled }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`;

export const Group = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    background: ${theme.colors.panel};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.1rem solid;
    border-color: ${theme.colors.panel};

    &:focus-within {
      border-color: ${theme.colors.primary};
    }
    &:focus-within ${Icon} {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    cursor: pointer;
    font-weight: ${theme.font.medium};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.gray500};
    }
  `}
`;

export const Icon = styled.div<Pick<TextFieldProps, "iconPosition">>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    font-size: 2.4rem;
    color: ${theme.colors.gray500};
    order: ${iconPosition === "right" ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`;
