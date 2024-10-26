import { 
  Car, Home, Smartphone, Sofa, Briefcase, 
  Gamepad, Book, Dog, Camera, MoreHorizontal 
} from "lucide-react";

const categories = [
  { name: "Veículos", icon: Car },
  { name: "Imóveis", icon: Home },
  { name: "Celulares", icon: Smartphone },
  { name: "Móveis", icon: Sofa },
  { name: "Empregos", icon: Briefcase },
  { name: "Games", icon: Gamepad },
  { name: "Livros", icon: Book },
  { name: "Animais", icon: Dog },
  { name: "Eletrônicos", icon: Camera },
  { name: "Mais", icon: MoreHorizontal },
];

const Categories = () => {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`/categoria/${category.name.toLowerCase()}`}
              className="flex flex-col items-center gap-1 min-w-fit hover:text-primary transition-colors"
            >
              <category.icon className="h-6 w-6" />
              <span className="text-sm">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;