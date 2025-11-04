"use server";

import { revalidatePath } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function deleteUser(id: number) {
  const res = await fetch(`${BASE_URL}/api/users/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    console.error("Failed to delete user");
    throw new Error("Failed to delete user");
  }

  revalidatePath("/users");
}

export async function createUser(data: { name: string; email: string }) {
  const res = await fetch(`${BASE_URL}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Failed to create user:", errorText);
    throw new Error("Failed to create user");
  }

  revalidatePath("/users");
}

export async function updateUser(
  id: number,
  data: { name?: string; email?: string }
) {
  const res = await fetch(`${BASE_URL}/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Failed to update user:", errorText);
    throw new Error("Failed to update user");
  }

  revalidatePath("/users");
}

export async function getUser(id: number) {
  const res = await fetch(`${BASE_URL}/api/users/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch user");
    throw new Error("Failed to fetch user");
  }

  const user = await res.json();
  return user;
}

export async function getUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch users");
    throw new Error("Failed to fetch users");
  }

  const users = await res.json();
  return users;
}
