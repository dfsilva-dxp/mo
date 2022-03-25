import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Banner from ".";

describe("Banner Component", () => {
  it("should render currectly banner", () => {
    const { container } = renderWithTheme(
      <Banner
        title="title"
        description="description"
        short_description="short description"
        image_url="./img/personal-finance.svg"
      />
    );

    expect(screen.getByRole("heading", { name: "title" })).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByText("short description")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /finance/i })).toHaveAttribute(
      "src",
      "./img/personal-finance.svg"
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
