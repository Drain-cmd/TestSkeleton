import "@testing-library/jest-dom";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import UpdateUserButton from "../../../app/users/components/UpdateUserButton";

// Mock de la Server Action
jest.mock("../../../app/actions/users/ActionsUser", () => ({
  updateUser: jest.fn(),
}));

import { updateUser } from "../../../app/actions/users/ActionsUser";

describe("UpdateUserButton", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the button with correct title", () => {
    render(<UpdateUserButton id={3} name="Alice" />);
    const button = screen.getByRole("button", { name: /update/i });
    expect(button).toBeInTheDocument();
  });

  it("calls updateUser when clicked", async () => {
    // mock de la promesse
    // @ts-ignore
    updateUser.mockResolvedValueOnce({});

    render(<UpdateUserButton id={3} name="Alice" />);
    const button = screen.getByRole("button", { name: /update/i });

    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(updateUser).toHaveBeenCalledTimes(1);
      expect(updateUser).toHaveBeenCalledWith(3, { name: "Alice" });
    });
  });
});
