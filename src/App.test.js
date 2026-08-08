import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio's primary identity and navigation", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /build reliable digital products/i })).toBeInTheDocument();
  expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /explore website concepts/i })).toHaveAttribute("href", "#templates");
  expect(screen.getByRole("heading", { name: /choose a direction/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /saifee rovers operations platform/i })).toBeInTheDocument();
});

test("lets a prospective client preview and request a website concept", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole("button", { name: /explore concept/i })[0]);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /request this website/i }));
  expect(screen.getByLabelText(/subject/i)).toHaveValue("Website enquiry: Commerce Atelier");
  expect(screen.getByLabelText(/project brief/i).value).toContain("Commerce Atelier");
});
