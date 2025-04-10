"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { checkAuth } from "@/services/auth";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
      const isAuthenticated = await checkAuth();
      if (!isAuthenticated) {
        router.push("/login");
      }
    };
    verifyAuth();
  }, [router]);

  return <>{children}</>;
}