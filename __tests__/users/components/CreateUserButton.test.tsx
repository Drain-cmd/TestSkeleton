import "@testing-library/jest-dom";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import CreateUserButton from "../../../app/users/components/CreateUserButton";

jest.mock("../../../app/actions/users/ActionsUser", () => ({
  createUser: jest.fn(),
}));

import { createUser } from "../../../app/actions/users/ActionsUser";

describe("Testing CreateUserButton", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the button with correct title", () => {
    render(<CreateUserButton name="John" email="john@example.com" />);
    const button = screen.getByRole("button", { name: /create/i });
    expect(button).toBeInTheDocument();
  });

  it("calls createUser when clicked", async () => {
    // @ts-ignore
    createUser.mockResolvedValueOnce({});

    render(<CreateUserButton name="John" email="john@example.com" />);

    const button = screen.getByRole("button", { name: /create/i });

    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(createUser).toHaveBeenCalledTimes(1);
      expect(createUser).toHaveBeenCalledWith({ name: "John", email: "john@example.com" });
    });
  });
});