import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";

const mockProducts = [
  {
    title: "iPhone 13 Pro Max 256GB",
    price: 5999.99,
    location: "São Paulo, SP",
    date: "Hoje, 14:30",
    imageUrl: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500",
  },
  {
    title: "Apartamento 2 quartos - Centro",
    price: 350000,
    location: "Rio de Janeiro, RJ",
    date: "Ontem, 18:45",
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
  },
  {
    title: "Honda Civic EXL 2022",
    price: 140000,
    location: "Curitiba, PR",
    date: "Há 2 dias",
    imageUrl: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500",
  },
  {
    title: "Sofá 3 lugares retrátil",
    price: 2499.99,
    location: "Belo Horizonte, MG",
    date: "Há 3 dias",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
  },
  {
    title: "PlayStation 5 + 2 controles",
    price: 3999.99,
    location: "Salvador, BA",
    date: "Há 4 dias",
    imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500",
  },
  {
    title: "Notebook Dell XPS 15",
    price: 8999.99,
    location: "Brasília, DF",
    date: "Há 5 dias",
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Navbar />
      <Categories />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Anúncios em destaque</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
