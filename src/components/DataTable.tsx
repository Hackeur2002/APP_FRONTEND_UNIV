import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
export type DocumentRequest = {
  id: number
  trackingId: string
  studentName: string
  documentType: string
  status: string
  createdAt: string
}

export const columns: ColumnDef<DocumentRequest>[] = [
  {
    accessorKey: "trackingId",
    header: "ID",
  },
  {
    accessorKey: "studentName",
    header: "Étudiant",
  },
  {
    accessorKey: "documentType",
    header: "Type de document",
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Statut
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue("status")
      const variant = {
        'completed': 'default',
        'pending': 'secondary',
        'rejected': 'destructive',
        'pending_validation1': 'warning',
      }[status as string] as 'outline' | 'default' | 'secondary' | 'destructive'
      
      return <Badge variant={variant}>{status as string}</Badge>
    }
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => new Date(row.getValue("createdAt")).toLocaleDateString(),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const request = row.original
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Voir détails</DropdownMenuItem>
            {request.status === 'pending_validation1' && (
              <DropdownMenuItem>Valider</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]