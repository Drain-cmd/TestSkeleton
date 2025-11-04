"use client";

import { useTransition } from "react";

interface ActionButtonProps {
  action: () => void;
  title: string;
  className?: string;
}

const ActionButton = ({
  action,
  title,
  className = "btn-info",
}: ActionButtonProps) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => action())}
      className={`btn text-white ${className}`}
    >
      {isPending ? "Pending..." : title}
    </button>
  );
};

export default ActionButton;
