import { screen } from "@testing-library/react";
import { TiPlus } from "react-icons/ti";

import { renderWithTheme } from "utils/tests/helpers";

import NewTransactionButton from ".";

describe("ButtonNewTransaction Component", () => {
  it("should render the Button", () => {
    const { container } = renderWithTheme(
      <NewTransactionButton
        label="Gerar nova transação"
        icon={<TiPlus data-testid="icon" />}
        href="/"
      />
    );

    expect(
      screen.getByRole("link", { name: /gerar nova transação/i })
    ).toHaveAttribute("href", "/");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render a description when is passed", () => {
    renderWithTheme(
      <NewTransactionButton
        label="Gerar nova transação"
        description="Movimentações de entradas e saídas"
        icon={<TiPlus data-testid="icon" />}
      />
    );

    expect(
      screen.getByText(/Movimentações de entradas e saídas/i)
    ).toBeInTheDocument();
  });

  it("should render an icon when is passed", () => {
    renderWithTheme(
      <NewTransactionButton
        label="Gerar nova transação"
        description="Movimentações de entradas e saídas"
        icon={<TiPlus data-testid="icon" />}
      />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render the button with currect background", () => {
    renderWithTheme(
      <NewTransactionButton
        label="Gerar nova transação"
        icon={<TiPlus data-testid="icon" />}
        href="/"
      />
    );

    expect(
      screen.getByRole("link", { name: /gerar nova transação/i })
    ).toHaveStyle({
      background: "#1F2029",
      width: "100%",
      height: "10rem"
    });
  });
});
