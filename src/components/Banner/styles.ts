import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 87rem;
    height: 24rem;
    background: ${theme.colors.panel};
    padding: ${theme.spacings.xsmall};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    border-radius: ${theme.border.radius};
  `}
`;

export const Display = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const Title = styled.h4``;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 1;
    font-weight: ${theme.font.bold};
  `}
`;

export const ShortDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    line-height: 1;
  `}
`;

export const Picture = styled.img``;
