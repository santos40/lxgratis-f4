import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Share2, MapPin, Calendar, Facebook, Instagram, Flag, ThumbsUp, ThumbsDown } from "lucide-react";
import UserRating from "@/components/UserRating";
import { useToast } from "@/components/ui/use-toast";
import ReviewForm from "@/components/ReviewForm";
import ReviewsList from "@/components/ReviewsList";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock product data
  const product = {
    title: "iPhone 13 Pro Max 256GB",
    price: 5999.99,
    description: "iPhone 13 Pro Max em perfeito estado, com garantia até 2024. Acompanha todos os acessórios originais.",
    location: "São Paulo, SP",
    date: "Publicado em 20/02/2024",
    seller: {
      id: "1",
      name: "João Silva",
      joinDate: "2023",
      rating: 4.5,
      totalReviews: 28,
      trustScore: 95,
      likes: 45,
      dislikes: 2,
      social: {
        facebook: "joaosilva",
        instagram: "joao.silva"
      }
    },
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500",
      "https://images.unsplash.com/photo-1632661675197-99701c9b414c?w=500",
    ],
  };

  // Mock reviews data
  const reviews = [
    {
      id: "1",
      userId: "2",
      userName: "Maria Santos",
      rating: 5,
      comment: "Ótimo vendedor! Produto chegou conforme descrito.",
      date: "2024-02-15",
    },
    {
      id: "2",
      userId: "3",
      userName: "Pedro Oliveira",
      rating: 4,
      comment: "Comunicação rápida e eficiente.",
      date: "2024-02-10",
    },
  ];

  const handleSellerClick = () => {
    navigate(`/profile/${product.seller.id}`);
  };

  const handleReport = () => {
    toast({
      title: "Denúncia registrada",
      description: "Nossa equipe irá analisar sua denúncia em breve.",
    });
  };

  const handleReviewSubmit = (rating: number, comment: string) => {
    toast({
      title: "Avaliação enviada",
      description: "Obrigado por compartilhar sua experiência!",
    });
    // Here you would typically send the review to your backend
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
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-semibold">Vendedor</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleReport}
                  className="text-destructive hover:text-destructive"
                >
                  <Flag className="h-4 w-4 mr-1" />
                  Denunciar
                </Button>
              </div>
              
              <div 
                className="flex items-center gap-4 cursor-pointer hover:bg-accent p-3 rounded-lg transition-colors"
                onClick={handleSellerClick}
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xl font-semibold">{product.seller.name[0]}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-primary hover:underline">{product.seller.name}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <ThumbsUp className="h-4 w-4 text-green-500" />
                      <span>{product.seller.likes}</span>
                      <ThumbsDown className="h-4 w-4 ml-2 text-red-500" />
                      <span>{product.seller.dislikes}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <UserRating rating={product.seller.rating} totalReviews={product.seller.totalReviews} />
                  </div>
                  <p className="text-sm text-muted-foreground">Membro desde {product.seller.joinDate}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Índice de Confiabilidade:</span>
                      <span className={`text-sm font-semibold ${
                        product.seller.trustScore >= 90 ? 'text-green-500' :
                        product.seller.trustScore >= 70 ? 'text-yellow-500' : 'text-red-500'
                      }`}>
                        {product.seller.trustScore}%
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {product.seller.social.facebook && (
                        <a 
                          href={`https://facebook.com/${product.seller.social.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Facebook className="h-4 w-4" />
                        </a>
                      )}
                      {product.seller.social.instagram && (
                        <a 
                          href={`https://instagram.com/${product.seller.social.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-800"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Instagram className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-primary mt-2 hover:underline">Ver mais anúncios deste vendedor →</p>
                </div>
              </div>
            </Card>

            {/* Reviews Section */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Avaliações</h2>
              <div className="space-y-6">
                <ReviewForm onSubmit={handleReviewSubmit} />
                <ReviewsList reviews={reviews} />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;