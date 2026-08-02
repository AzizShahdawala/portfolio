import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio's primary identity and navigation", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /build reliable digital products/i })).toBeInTheDocument();
  expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /explore my work/i })).toHaveAttribute("href", "#projects");
});
