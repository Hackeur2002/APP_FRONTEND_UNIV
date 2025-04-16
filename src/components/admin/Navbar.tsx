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
      <h1 className="text-xl font-bold text-green-800">Weman</h1>|<h4 className="text-green-900 font-bold">Plateforme de délivrance des actes académiques</h4>
      <Button className="hover:bg-red-700 text-white" onClick={handleLogout}>Déconnexion</Button>
    </nav>
  );
}