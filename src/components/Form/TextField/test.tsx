import { screen, waitFor } from "@testing-library/react";
import { TiMail } from "react-icons/ti";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "utils/tests/helpers";

import TextField from ".";

describe("TextField Component", () => {
  it("should renders with label", () => {
    const { container } = renderWithTheme(
      <TextField label="Label" labelFor="field" id="field" />
    );

    expect(screen.getByLabelText("Label")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should renders without label", () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
  });

  it("should renders with placeholder", () => {
    renderWithTheme(
      <TextField
        label="Label"
        labelFor="field"
        id="field"
        placeholder="Your placeholder"
      />
    );

    expect(
      screen.getByPlaceholderText(/Your placeholder/i)
    ).toBeInTheDocument();
  });

  it("should renders an icon", () => {
    renderWithTheme(<TextField icon={<TiMail data-testid="icon" />} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should renders an icon on the right side", () => {
    renderWithTheme(
      <TextField icon={<TiMail data-testid="icon" />} iconPosition="right" />
    );

    expect(screen.getByTestId("icon").parentElement).toHaveStyle({
      order: 1
    });
  });

  it("should renders without an icon", () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  it("should change its value when typing", async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField onInput={onInput} label="Label" labelFor="field" id="field" />
    );

    const input = screen.getByRole("textbox");
    const text = "This is my new value!";

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });

  it("should is accessible by tab", () => {
    renderWithTheme(<TextField label="Label" labelFor="field" id="field" />);

    const input = screen.getByRole("textbox");

    expect(document.body).toHaveFocus();
    userEvent.tab();

    expect(input).toHaveFocus();
  });

  it("should does not changes its value when disabled", async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="Label"
        labelFor="field"
        id="field"
        disabled
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();

    const text = "This is my new text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it("should is not accessible by tab when disabled", () => {
    renderWithTheme(
      <TextField label="Label" labelFor="field" id="field" disabled />
    );

    const input = screen.getByLabelText("Label");
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});
