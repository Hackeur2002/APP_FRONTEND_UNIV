"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DocumentRequest } from "@/types/index";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { api } from "@/services/api";
import toast from 'react-hot-toast';

interface RequestTableProps {
  requests: DocumentRequest[];
  setRequests?: (requests: DocumentRequest[]) => void;
}

export function RequestTable({ requests, setRequests }: RequestTableProps) {
  const [selectedRequest, setSelectedRequest] = useState<DocumentRequest | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [validationForm, setValidationForm] = useState({
    approved: true,
    comments: "",
  });
  const [generateForm, setGenerateForm] = useState({
    signature: null as File | null,
  });
  const [isValidationDialogOpen, setIsValidationDialogOpen] = useState(false);
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);

  const handleViewDocuments = async (trackingId: number) => {
    setIsLoading(true);
    try {
      const request = await api.fetchRequestById(trackingId);
      setSelectedRequest(request);
    } catch (error) {
      console.error('Failed to fetch request:', error);
      toast.error('Échec du chargement des documents');
    } finally {
      setIsLoading(false);
    }
  };

  const handleValidateSubmit = async (requestId: number) => {
    setIsLoading(true);
    try {
      const { approved, comments } = validationForm;
      const response = await api.validateRequest(requestId, approved, comments);
      if (setRequests) {
        setRequests(
          requests.map((req) =>
            req.id === requestId
              ? {
                  ...req,
                  status: response.request.status,
                  rejectionReason: response.request.rejectionReason || null,
                }
              : req
          )
        );
      }
      setIsValidationDialogOpen(false);
      setValidationForm({ approved: true, comments: "" });
      toast.success('Validation soumise avec succès');
    } catch (error) {
      console.error('Failed to validate request:', error);
      toast.error('Échec de la validation de la demande');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateSubmit = async (requestId: number) => {
    setIsLoading(true);
    try {
      const { signature } = generateForm;
      const response = await api.generateDocument(requestId, signature || undefined);
      if (setRequests) {
        setRequests(
          requests.map((req) =>
            req.id === requestId
              ? { ...req, status: 'generated' }
              : req
          )
        );
      }
      setIsGenerateDialogOpen(false);
      setGenerateForm({ signature: null });
      toast.success('Document généré et envoyé par email');
    } catch (error) {
      console.error('Failed to generate document:', error);
      toast.error('Échec de la génération du document');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID Suivi</TableHead>
          <TableHead>Nom</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Statut</TableHead>
          <TableHead>Raison de Rejet</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((request) => (
          <TableRow key={request.id}>
            <TableCell>{request.trackingId}</TableCell>
            <TableCell>{request.studentName}</TableCell>
            <TableCell>{request.documentType}</TableCell>
            <TableCell>{request.status}</TableCell>
            <TableCell>{request.rejectionReason || '-'}</TableCell>
            <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => handleViewDocuments(request.id)}
                      disabled={isLoading}
                    >
                      Voir Documents
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Documents pour {request.trackingId}</DialogTitle>
                    </DialogHeader>
                    {selectedRequest && selectedRequest.trackingId === request.trackingId ? (
                      <div className="space-y-2">
                        {[
                          { name: 'Acte de Naissance', path: selectedRequest.acteNaissancePath },
                          { name: 'Carte Étudiant', path: selectedRequest.carteEtudiantPath },
                          { name: 'Fiche Préinscription', path: selectedRequest.fichePreinscriptionPath },
                          { name: 'Diplôme Bac', path: selectedRequest.diplomeBacPath },
                          { name: 'Demande Manuscrite', path: selectedRequest.demandeManuscritePath },
                        ].map((doc) =>
                          doc.path ? (
                            <div key={doc.name}>
                              <a
                                href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${doc.path}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                {doc.name}
                              </a>
                            </div>
                          ) : null
                        )}
                      </div>
                    ) : (
                      <p>Chargement des documents...</p>
                    )}
                  </DialogContent>
                </Dialog>
                {request.status === 'pending_validator1' ? (
                  <Dialog open={isValidationDialogOpen} onOpenChange={setIsValidationDialogOpen}>
                    <DialogTrigger asChild>
                      <Button disabled={isLoading}>Valider</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Valider la Demande {request.trackingId}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="approved">Approuver</Label>
                          <Checkbox
                            id="approved"
                            checked={validationForm.approved}
                            onCheckedChange={(checked) =>
                              setValidationForm((prev) => ({ ...prev, approved: !!checked }))
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="comments">Commentaires</Label>
                          <Textarea
                            id="comments"
                            value={validationForm.comments}
                            onChange={(e) =>
                              setValidationForm((prev) => ({ ...prev, comments: e.target.value }))
                            }
                            placeholder="Entrez vos commentaires..."
                          />
                        </div>
                        <Button
                          onClick={() => handleValidateSubmit(request.id)}
                          disabled={isLoading}
                        >
                          Soumettre
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Dialog open={isGenerateDialogOpen} onOpenChange={setIsGenerateDialogOpen}>
                    <DialogTrigger asChild>
                      <Button disabled={isLoading}>
                        Générer Document
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Générer Document pour {request.trackingId}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="signature">Signature (optionnel)</Label>
                          <Input
                            id="signature"
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              setGenerateForm((prev) => ({
                                ...prev,
                                signature: e.target.files?.[0] || null,
                              }))
                            }
                          />
                        </div>
                        <Button
                          onClick={() => handleGenerateSubmit(request.id)}
                          disabled={isLoading}
                        >
                          Générer et Envoyer
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}