import { updateUser } from "../../actions/users/ActionsUser";
import ActionButton from "../../components/ActionButton";

export default function UpdateUserButton({
  id,
  name,
}: {
  id: number;
  name: string;
}) {
  const action = async () => {
    "use server";
    await updateUser(id, { name });
  };

  return <ActionButton title="Update" action={action} />;
}
