import Link from "next/link";
import { sort } from "fast-sort";
import DeleteUserButton from "./components/DeleteUserButton";
import { User } from "./interfaceUser";
import { getUsers, deleteUser } from "../actions/users/ActionsUser";
import UpdateUserButton from "./components/UpdateUserButton";

interface UserTableProps {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: UserTableProps) => {
  const users: User[] = await getUsers();

  const sortedUsers = sort(users).asc(
    sortOrder === "email"
      ? (user: User) => user.email
      : (user: User) => user.name
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className="max-w-2">
              <DeleteUserButton id={user.id} />
            </td>
            <td className="max-w-2">
              <UpdateUserButton id={user.id} name={"Toto"} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
