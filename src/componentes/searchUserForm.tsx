"use client";

import { useRouter } from "next/navigation";

export default function SearchUserForm() {
  const router = useRouter();

  async function handleSearchUsers(formData: FormData) {
    const userId = formData.get("userId");
    if (userId) {
      router.push(`posts/user/${userId}`);
    }
  }

  return (
    <form
      className="flex gap-2 my-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearchUsers(new FormData(e.currentTarget));
      }}
    >
      <input
        type="text"
        placeholder="ID do usuário"
        className="border border-amber-300"
        name="userId"
      />
      <button className="bg-blue-500 text-white p-2" type="submit">
        Buscar usuário
      </button>
    </form>
  );
}