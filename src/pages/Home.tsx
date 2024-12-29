import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import BrazilianStates from "@/components/BrazilianStates";
import SearchFilters from "@/components/SearchFilters";
import FeaturedListings from "@/components/sections/FeaturedListings";
import VerifiedListings from "@/components/sections/VerifiedListings";
import PopularCategories from "@/components/sections/PopularCategories";
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
    description: "Apartamento bem localizado no centro da cidade",
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
    description: "Carro em excelente estado, baixa quilometragem",
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

const mockRealEstateListings: Listing[] = [
  {
    id: "4",
    title: "Apartamento Luxuoso - 3 Quartos",
    price: 850000,
    location: "São Paulo, SP",
    description: "Apartamento de alto padrão com vista panorâmica",
    category: "imovel",
    type: "apartamento",
    area: 120,
    bedrooms: 3,
    createdAt: new Date().toISOString(),
    userId: "4",
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500"],
  },
  {
    id: "5",
    title: "Casa em Condomínio Fechado",
    price: 1200000,
    location: "Rio de Janeiro, RJ",
    description: "Casa moderna em condomínio de luxo",
    category: "imovel",
    type: "casa",
    area: 250,
    bedrooms: 4,
    createdAt: new Date().toISOString(),
    userId: "5",
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500"],
  },
  {
    id: "6",
    title: "Cobertura Duplex",
    price: 1500000,
    location: "Belo Horizonte, MG",
    description: "Cobertura com piscina privativa",
    category: "imovel",
    type: "apartamento",
    area: 180,
    bedrooms: 3,
    createdAt: new Date().toISOString(),
    userId: "6",
    images: ["https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500"],
  }
];

const mockVerifiedVehicles: Listing[] = [
  {
    id: "7",
    title: "Mercedes-Benz C300 2023",
    price: 380000,
    location: "São Paulo, SP",
    description: "Veículo zero km, completo com teto solar",
    category: "veiculo",
    type: "carro",
    brand: "Mercedes-Benz",
    model: "C300",
    year: 2023,
    mileage: 0,
    createdAt: new Date().toISOString(),
    userId: "7",
    images: ["https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=500"],
  },
  {
    id: "8",
    title: "BMW X5 2022",
    price: 420000,
    location: "Rio de Janeiro, RJ",
    description: "SUV em estado de zero, apenas 5.000km",
    category: "veiculo",
    type: "carro",
    brand: "BMW",
    model: "X5",
    year: 2022,
    mileage: 5000,
    createdAt: new Date().toISOString(),
    userId: "8",
    images: ["https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500"],
  },
  {
    id: "9",
    title: "Porsche Cayenne 2023",
    price: 750000,
    location: "Curitiba, PR",
    description: "Modelo mais completo, pronta entrega",
    category: "veiculo",
    type: "carro",
    brand: "Porsche",
    model: "Cayenne",
    year: 2023,
    mileage: 1500,
    createdAt: new Date().toISOString(),
    userId: "9",
    images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500"],
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Categories />
      <BrazilianStates />
      <SearchFilters />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          <FeaturedListings listings={mockProducts} />
          
          <VerifiedListings
            title="Imóveis de Imobiliárias"
            category="imovel"
            listings={mockRealEstateListings}
          />

          <VerifiedListings
            title="Veículos de Garagens"
            category="veiculo"
            listings={mockVerifiedVehicles}
          />

          <PopularCategories />
        </div>
      </main>
    </div>
  );
};

export default Home;
