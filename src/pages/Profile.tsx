import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import UserRating from "@/components/UserRating";
import ReviewsList from "@/components/ReviewsList";
import { Settings, LogOut } from "lucide-react";
import { Listing } from "@/types/listings";

const mockUser = {
  name: "João Silva",
  email: "joao@example.com",
  memberSince: "Janeiro 2023",
  location: "São Paulo, SP",
  rating: 4.5,
  totalReviews: 12,
};

const mockListings: Listing[] = [
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
  // Add more mock listings as needed
];

const mockReviews = [
  {
    id: "1",
    userId: "2",
    userName: "Maria Santos",
    rating: 5,
    comment: "Ótimo vendedor! Muito atencioso e produto conforme descrito.",
    date: "2024-02-20",
  },
  {
    id: "2",
    userId: "3",
    userName: "Pedro Costa",
    rating: 4,
    comment: "Boa comunicação e entrega rápida.",
    date: "2024-02-15",
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <Card className="p-6 lg:col-span-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-3xl font-semibold text-primary">
                  {mockUser.name[0]}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-1">{mockUser.name}</h2>
              <div className="mb-2">
                <UserRating rating={mockUser.rating} totalReviews={mockUser.totalReviews} />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Membro desde {mockUser.memberSince}
              </p>
              <div className="w-full space-y-2">
                <Button className="w-full" variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações
                </Button>
                <Button className="w-full" variant="outline">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              </div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="listings">
              <TabsList className="w-full">
                <TabsTrigger value="listings" className="flex-1">
                  Meus Anúncios
                </TabsTrigger>
                <TabsTrigger value="favorites" className="flex-1">
                  Favoritos
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">
                  Avaliações
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="listings" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {mockListings.map((listing) => (
                    <ProductCard key={listing.id} listing={listing} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="favorites" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {/* Add favorite listings here */}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <ReviewsList reviews={mockReviews} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;