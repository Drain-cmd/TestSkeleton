
import { deleteUser } from "../../actions/users/ActionsUser";
import ActionButton from "../../components/ActionButton";

export default function DeleteUserButton({ id }: { id: number }) {
  const action = async () => {
    "use server";
    await deleteUser(id);
  };

  return <ActionButton title="Delete" action={action} className="btn-error" />;
}