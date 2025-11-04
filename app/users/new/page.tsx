import CreateUserForm from "./CreateUserForm";

export default function NewUserPage() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Create a new user</h1>
      <CreateUserForm />
    </div>
  );
}
