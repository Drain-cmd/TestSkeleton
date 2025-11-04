import "@testing-library/jest-dom";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import CreateUserForm from "../../../app/users/new/CreateUserForm";

jest.mock("../../../app/actions/users/ActionsUser", () => ({
  createUser: jest.fn(),
}));

import { createUser } from "../../../app/actions/users/ActionsUser";

const pushMock = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("Testing CreateUserForm", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the form inputs and button", () => {
    render(<CreateUserForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /create user/i })).toBeInTheDocument();
  });

  it("calls createUser and redirects on submit", async () => {
    // @ts-ignore
    createUser.mockResolvedValueOnce({});

    render(<CreateUserForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole("button", { name: /create user/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(createUser).toHaveBeenCalledTimes(1);
      expect(createUser).toHaveBeenCalledWith({
        name: "John Doe",
        email: "john@example.com",
      });
    });

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/users");
    });
  });
});
