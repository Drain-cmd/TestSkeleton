import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import DeleteUserButton from "../../../app/users/components/DeleteUserButton";

jest.mock("../../../app/actions/users/ActionsUser", () => ({
  deleteUser: jest.fn(),
}));

import { deleteUser } from "../../../app/actions/users/ActionsUser";

describe("Testing DeleteUserButton", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the button with correct title", () => {
    render(<DeleteUserButton id={5} />);
    const button = screen.getByRole("button", { name: /delete/i });
    expect(button).toBeInTheDocument();
  });

  it("calls deleteUser when clicked", async () => {
    // @ts-ignore
    deleteUser.mockResolvedValueOnce({});

    render(<DeleteUserButton id={5} />);
    const button = screen.getByRole("button", { name: /delete/i });

    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(deleteUser).toHaveBeenCalledTimes(1);
      expect(deleteUser).toHaveBeenCalledWith(5);
    });
  });
});
