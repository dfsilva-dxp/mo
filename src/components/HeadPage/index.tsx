interface HeadProps {
  title: string;
  description: string;
}

const Head = ({ title, description }: HeadProps) => {
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);

  return <></>;
};

export default Head;
