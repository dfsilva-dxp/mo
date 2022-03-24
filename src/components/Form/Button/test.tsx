import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TiShoppingCart } from "react-icons/ti";

import { renderWithTheme } from "utils/tests/helpers";

import Button from ".";

describe("Button Component", () => {
  it("should render a button", () => {
    const { container } = renderWithTheme(<Button>Button</Button>);

    expect(screen.getByRole("button", { name: /Button/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the md button by default", () => {
    renderWithTheme(<Button>Button</Button>);

    expect(screen.getByRole("button", { name: /Button/i })).toHaveStyle({
      padding: "0.8rem 1.6rem",
      "font-size": "1.4rem"
    });
  });

  it("should render the small button when sm size is passed", () => {
    renderWithTheme(<Button size="sm">Button</Button>);

    expect(screen.getByRole("button", { name: /Button/i })).toHaveStyle({
      padding: "0.4rem 1rem",
      height: "3rem",
      "font-size": "1.2rem"
    });
  });

  it("should render the large button when lg size is passed", () => {
    renderWithTheme(<Button size="lg">Button</Button>);

    expect(screen.getByRole("button", { name: /Button/i })).toHaveStyle({
      padding: "0.8rem 2rem",
      height: "4rem",
      "font-size": "1.6rem"
    });
  });

  it("should render the full width button when full size is passed", () => {
    renderWithTheme(<Button fullSize>Button</Button>);

    expect(screen.getByRole("button", { name: /Button/i })).toHaveStyle({
      width: "100%"
    });
  });

  it("should render without icon", () => {
    renderWithTheme(<Button>Buy now</Button>);

    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  it("should render with icon", () => {
    renderWithTheme(
      <Button icon={<TiShoppingCart data-testid="icon" />}>Buy now</Button>
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should is accessible by tab", () => {
    renderWithTheme(<Button>Button</Button>);

    const button = screen.getByRole("button", { name: /Button/i });

    expect(document.body).toHaveFocus();
    userEvent.tab();

    expect(button).toHaveFocus();
  });
});
