import AdminNavbar from "@/components/admin/AdminNavbar";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, AlertCircle } from "lucide-react";

const mockListings = [
  { 
    id: 1, 
    title: "iPhone 13 Pro Max", 
    category: "Eletrônicos",
    price: "R$ 5.999,00",
    status: "Ativo", 
    date: "2024-02-20" 
  },
  { 
    id: 2, 
    title: "Apartamento 2 quartos", 
    category: "Imóveis",
    price: "R$ 350.000,00",
    status: "Pendente", 
    date: "2024-02-19" 
  },
];

const Listings = () => {
  return (
    <div className="min-h-screen bg-accent">
      <AdminNavbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Anúncios</h1>
          <Button variant="destructive">
            <AlertCircle className="mr-2 h-4 w-4" />
            Denúncias
          </Button>
        </div>

        <Card className="mb-8">
          <div className="p-6">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Buscar anúncios..." className="pl-10" />
              </div>
              <Button variant="outline">Filtros</Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockListings.map((listing) => (
                  <TableRow key={listing.id}>
                    <TableCell>{listing.title}</TableCell>
                    <TableCell>{listing.category}</TableCell>
                    <TableCell>{listing.price}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        listing.status === 'Ativo' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {listing.status}
                      </span>
                    </TableCell>
                    <TableCell>{new Date(listing.date).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">Visualizar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Listings;