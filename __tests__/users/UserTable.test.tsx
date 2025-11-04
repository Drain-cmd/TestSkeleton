import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserTable from "../../app/users/UserTable";

jest.mock("../../app/actions/users/ActionsUser", () => ({
  getUsers: jest.fn(),
}));

import { getUsers } from "../../app/actions/users/ActionsUser";

jest.mock("../../app/users/components/DeleteUserButton", () => () => (
  <button>Mock Delete</button>
));
jest.mock("../../app/users/components/UpdateUserButton", () => () => (
  <button>Mock Update</button>
));

const usersMock = [
  { id: 1, name: "Toto", email: "toto@toto.com" },
  { id: 2, name: "Azir", email: "azir@azir.com" },
];

describe("Testing UserTable", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders users sorted by name by default", async () => {
    // @ts-ignore
    getUsers.mockResolvedValueOnce(usersMock);

    render(await UserTable({ sortOrder: "name" }));

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(3); // header + 2 users

    expect(screen.getByText(usersMock[0].name)).toBeInTheDocument();
    expect(screen.getByText(usersMock[1].name)).toBeInTheDocument();
  });

  it("renders users sorted by email when sortOrder=email", async () => {
    // @ts-ignore
    getUsers.mockResolvedValueOnce(usersMock);

    render(await UserTable({ sortOrder: "email" }));

    const rows = screen.getAllByRole("row").slice(1);

    expect(rows[0]).toHaveTextContent("azir@azir.com");
    expect(rows[1]).toHaveTextContent("toto@toto.com");
  });
});
