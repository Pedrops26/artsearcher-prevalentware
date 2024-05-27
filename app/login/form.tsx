"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Form() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (response?.error) {
      setError(response.error);
    } else {
      router.push("/museum");
      router.refresh();
    }
  };

  return (
    <div className="px-5 py-2 bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mx-auto max-w-md mt-10"
      >
        <div>
          <Label htmlFor="email">Your email address</Label>
          <Input
            name="email"
            className="border border-black text-black"
            type="email"
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Your password</Label>
          <Input
            name="password"
            className="border border-black text-black"
            type="password"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-center py-4">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
}
