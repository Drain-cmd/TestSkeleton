import { createUser } from "../../actions/users/ActionsUser";
import ActionButton from "../../components/ActionButton";

export default function CreateUserButton({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const action = async () => {
    "use server";
    await createUser({ name, email });
  };

  return <ActionButton title="Create" action={action} />;
}
