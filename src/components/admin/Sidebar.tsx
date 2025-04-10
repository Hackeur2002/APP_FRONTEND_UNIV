"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const menuItems = [
    { label: "Tableau de bord", href: "/admin/dashboard" },
    { label: "Toutes les demandes", href: "/admin/requests" },
    { label: "Demandes validées", href: "/admin/validated" },
    { label: "Demandes en attente", href: "/admin/pending" },
  ];

  return (
    <aside className="w-64 bg-white shadow h-full p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block p-2 rounded hover:bg-gray-100",
              "text-gray-700 hover:text-gray-900"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}