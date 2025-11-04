import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ActionButton from "../../app/components/ActionButton";

describe("Testing ActionButton", () => {
  it("renders with the correct title", () => {
    const mockAction = jest.fn();
    render(<ActionButton action={mockAction} title="Click me" />);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it("calls the action function when clicked", () => {
    const mockAction = jest.fn();
    render(<ActionButton action={mockAction} title="Click me" />);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  it("applies custom className if provided", () => {
    const mockAction = jest.fn();
    render(
      <ActionButton
        action={mockAction}
        title="Click me"
        className="btn-error"
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn-error");
  });
});
