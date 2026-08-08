import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders the portfolio's primary identity and navigation", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /build reliable digital products/i })).toBeInTheDocument();
  expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /explore product concepts/i })).toHaveAttribute("href", "#templates");
  expect(screen.getByRole("heading", { name: /one engineering system/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /saifee rovers operations platform/i })).toBeInTheDocument();
});

test("lets a visitor inspect an original product concept", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole("button", { name: /explore concept/i })[0]);
  const dialog = screen.getByRole("dialog");
  expect(dialog).toBeInTheDocument();
  expect(within(dialog).getByRole("heading", { name: /commerce atelier/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /close concept preview/i }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
