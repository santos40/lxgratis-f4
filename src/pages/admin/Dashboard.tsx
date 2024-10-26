import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  AlertCircle,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AdminNavbar from "@/components/admin/AdminNavbar";

const mockStats = [
  {
    title: "Total de Usuários",
    value: "1,234",
    change: "+12%",
    increasing: true,
    icon: Users,
  },
  {
    title: "Anúncios Ativos",
    value: "856",
    change: "+23%",
    increasing: true,
    icon: ShoppingBag,
  },
  {
    title: "Denúncias",
    value: "42",
    change: "-8%",
    increasing: false,
    icon: AlertCircle,
  },
];

const mockRecentUsers = [
  { id: 1, name: "João Silva", email: "joao@example.com", date: "2024-02-20", status: "Ativo" },
  { id: 2, name: "Maria Santos", email: "maria@example.com", date: "2024-02-19", status: "Ativo" },
  { id: 3, name: "Pedro Costa", email: "pedro@example.com", date: "2024-02-18", status: "Suspenso" },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-accent">
      <AdminNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mockStats.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                {stat.increasing ? (
                  <ChevronUp className="h-4 w-4 text-green-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-red-500" />
                )}
                <span className={stat.increasing ? "text-green-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground ml-2">vs. mês anterior</span>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Usuários Recentes</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Data de Registro</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockRecentUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{new Date(user.date).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
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

export default AdminDashboard;
