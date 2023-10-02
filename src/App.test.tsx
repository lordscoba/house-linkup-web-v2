import { render, screen } from "@testing-library/react";
import { HomeScreen } from "./screens";

test("renders learn react link", () => {
  render(<HomeScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
