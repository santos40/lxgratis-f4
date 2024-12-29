import { Search, Bell, User, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-primary text-white px-3 py-1 rounded-lg">LX</span>
              <span className="text-2xl font-bold text-secondary">Grátis</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="O que você procura?"
                className="w-full pl-10 pr-4 bg-muted border-0 focus:ring-2 focus:ring-primary/20"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
              <Bell className="h-5 w-5 text-secondary" />
            </Button>
            
            <Link to="/perfil">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                <User className="h-5 w-5 text-secondary" />
              </Button>
            </Link>
            
            <Link to="/criar-anuncio">
              <Button className="hidden md:flex gap-2 bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                Anunciar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;