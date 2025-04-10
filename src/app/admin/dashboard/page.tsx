import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total des demandes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">50</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Demandes validées</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">20</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Demandes en attente</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">30</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}