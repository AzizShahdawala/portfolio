import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio's primary identity and navigation", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /build reliable digital products/i })).toBeInTheDocument();
  expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /explore product concepts/i })).toHaveAttribute("href", "#templates");
  expect(screen.getByRole("heading", { name: /open them.*click around/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /saifee rovers operations platform/i })).toBeInTheDocument();
});

test("links visitors to working website demos", () => {
  render(<App />);
  expect(screen.getAllByRole("link", { name: /open live demo/i })).toHaveLength(3);
  expect(screen.getByRole("heading", { name: /noir & loom/i })).toBeInTheDocument();
});
