import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Share2, MapPin, Calendar } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();

  // Mock product data
  const product = {
    title: "iPhone 13 Pro Max 256GB",
    price: 5999.99,
    description: "iPhone 13 Pro Max em perfeito estado, com garantia até 2024. Acompanha todos os acessórios originais.",
    location: "São Paulo, SP",
    date: "Publicado em 20/02/2024",
    seller: "João Silva",
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500",
      "https://images.unsplash.com/photo-1632661675197-99701c9b414c?w=500",
    ],
  };

  return (
    <div className="min-h-screen bg-accent">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images Section */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${product.title} - ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <Card className="p-6">
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <p className="text-3xl font-bold text-primary mb-4">
                R$ {product.price.toLocaleString('pt-BR')}
              </p>
              <div className="flex gap-4 mb-6">
                <Button className="flex-1">Contatar Vendedor</Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{product.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{product.date}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Descrição</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Vendedor</h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xl font-semibold">{product.seller[0]}</span>
                </div>
                <div>
                  <p className="font-semibold">{product.seller}</p>
                  <p className="text-sm text-muted-foreground">Membro desde 2023</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;