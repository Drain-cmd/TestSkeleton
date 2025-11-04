import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ErrorPage from "../app/error";

describe("Testing ErrorPage", () => {
  it("renders ErrorPage and calls reset on button click", () => {
    const mockReset = jest.fn();

    const error = { name: "MockedError", message: "An error happened" };

    render(<ErrorPage error={error} reset={mockReset} />);

    expect(screen.getByText(error.message)).toBeInTheDocument();

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
