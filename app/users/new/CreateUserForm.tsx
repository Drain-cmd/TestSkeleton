"use client";

import { useState, useTransition } from "react";
import { createUser } from "../../actions/users/ActionsUser";
import { useRouter } from "next/navigation";

export default function CreateUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        await createUser({ name, email });
        router.push("/users");
      } catch (err) {
        console.error("Failed to create user:", err);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={`btn btn-primary text-white ${isPending ? "opacity-70" : ""}`}
      >
        {isPending ? "Creating..." : "Create User"}
      </button>
    </form>
  );
}
