"use client";
import { useUser } from "@/providers/UserProvider";
import { useRouter, redirect } from "next/navigation";

export default function PrivateRoute({ children }: any) {
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    router.push("/login");
    return;
  }

  return children;
}
