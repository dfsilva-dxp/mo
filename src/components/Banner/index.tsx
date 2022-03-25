import { BannerProps } from "./types";

import {
  Description,
  Display,
  Picture,
  ShortDescription,
  Title,
  Wrapper
} from "./styles";

export default function Banner({
  title,
  description,
  short_description,
  image_url
}: BannerProps) {
  return (
    <Wrapper>
      <Display>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ShortDescription>{short_description}</ShortDescription>
      </Display>
      <Picture
        src={image_url}
        alt="Mulher segurando um cofrinho em formato de porco, pensando no seus gastos."
        title="Mulher segurando um cofrinho em formato de porco, pensando no seus gastos."
        role="img"
        aria-label="finance"
        loading="lazy"
      />
    </Wrapper>
  );
}
