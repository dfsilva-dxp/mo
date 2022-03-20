import { screen, render } from "@testing-library/react";

import App from "./App";

describe("<App/>", () => {
  it("should render app component", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /mo app/i })
    ).toBeInTheDocument();

    expect(1 + 1).toBe(2);
  });
});
