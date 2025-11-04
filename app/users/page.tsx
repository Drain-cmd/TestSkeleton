import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";

interface UsersPageProps {
  searchParams: { sortOder: string };
}

const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const { sortOder } = await searchParams;

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
