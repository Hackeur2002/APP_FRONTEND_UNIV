"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/services/auth";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Backoffice</h1>
      <Button onClick={handleLogout}>Déconnexion</Button>
    </nav>
  );
}