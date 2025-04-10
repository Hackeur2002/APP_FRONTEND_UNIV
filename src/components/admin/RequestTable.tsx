"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DocumentRequest } from "@/types/index";

interface RequestTableProps {
  requests: DocumentRequest[];
}

export function RequestTable({ requests }: RequestTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID Suivi</TableHead>
          <TableHead>Nom</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Statut</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((request) => (
          <TableRow key={request.id}>
            <TableCell>{request.trackingId}</TableCell>
            <TableCell>{request.studentName}</TableCell>
            <TableCell>{request.documentType}</TableCell>
            <TableCell>{request.status}</TableCell>
            <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}