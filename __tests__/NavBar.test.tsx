import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar, { navLinks } from "../app/NavBar";

describe("Testing NavBar", () => {
  it("renders NavBar", () => {
    render(<NavBar />);

    navLinks.forEach((navLink) => {
      const link = screen.getByText(navLink.title);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", navLink.href);
    });
  });
});
