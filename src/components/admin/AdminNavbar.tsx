import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  Settings,
  LogOut
} from "lucide-react";

const AdminNavbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/admin" className="flex items-center">
              <span className="text-2xl font-bold text-primary">LX</span>
              <span className="text-2xl font-bold text-secondary">Admin</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/admin" icon={LayoutDashboard}>
              Dashboard
            </NavLink>
            <NavLink href="/admin/usuarios" icon={Users}>
              Usuários
            </NavLink>
            <NavLink href="/admin/anuncios" icon={ShoppingBag}>
              Anúncios
            </NavLink>
            <NavLink href="/admin/configuracoes" icon={Settings}>
              Configurações
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Admin</span>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ 
  href, 
  icon: Icon, 
  children 
}: { 
  href: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
}) => {
  const isActive = window.location.pathname === href;
  
  return (
    <Link
      to={href}
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
        isActive 
          ? 'bg-primary/10 text-primary' 
          : 'hover:bg-accent hover:text-primary'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{children}</span>
    </Link>
  );
};

export default AdminNavbar;