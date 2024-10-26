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
  // ... Add more mock listings as needed
];

const Index = () => {
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

export default Index;
