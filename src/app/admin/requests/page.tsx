"use client";
import { useState, useEffect } from "react";
import { RequestTable } from "@/components/admin/RequestTable";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { api } from "@/services/api";
export default function RequestsPage() {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchRequests = async () => {
      const requests = await api.fetchRequests();
      setRequests(requests);
      setIsLoading(false);
    };
    fetchRequests();
  }, []);

  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Toutes les demandes</h1>
        {isLoading ? (
          <p>Chargement...</p>
        ) : (
          <RequestTable requests={requests || []} />
        )}
      </div>
    </ProtectedRoute>
  );
}