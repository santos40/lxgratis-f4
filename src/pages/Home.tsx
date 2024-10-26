import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import { Listing } from "@/types/listings";

const mockProducts: Listing[] = [
  {
    id: "1",
    title: "iPhone 13 Pro Max 256GB",
    price: 5999.99,
    location: "São Paulo, SP",
    description: "iPhone em perfeito estado",
    category: "outros",
    createdAt: new Date().toISOString(),
    userId: "1",
    images: ["https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500"],
  },
  {
    id: "2",
    title: "Apartamento 2 quartos - Centro",
    price: 350000,
    location: "Rio de Janeiro, RJ",
    description: "Apartamento bem localizado no centro da cidade.",
    category: "imovel",
    type: "apartamento",
    area: 75,
    bedrooms: 2,
    createdAt: new Date().toISOString(),
    userId: "2",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500"],
  },
  {
    id: "3",
    title: "Honda Civic EXL 2022",
    price: 140000,
    location: "Curitiba, PR",
    description: "Carro em excelente estado, com baixa quilometragem.",
    category: "veiculo",
    type: "carro",
    brand: "Honda",
    model: "Civic EXL",
    year: 2022,
    mileage: 15000,
    createdAt: new Date().toISOString(),
    userId: "3",
    images: ["https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500"],
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Navbar />
      <Categories />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Anúncios em destaque</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} listing={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;