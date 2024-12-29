import { Card } from "./ui/card";
import { Heart } from "lucide-react";
import { Listing, ImovelListing, VeiculoListing } from "@/types/listings";

interface ProductCardProps {
  listing: Listing;
}

const ProductCard = ({ listing }: ProductCardProps) => {
  const renderDetails = () => {
    if (listing.category === "imovel") {
      const imovelListing = listing as ImovelListing;
      return (
        <div className="text-sm text-muted-foreground space-y-1">
          {imovelListing.area && <p>{imovelListing.area}m² • {imovelListing.type}</p>}
          {imovelListing.bedrooms && <p>{imovelListing.bedrooms} quartos</p>}
        </div>
      );
    }
    
    if (listing.category === "veiculo") {
      const veiculoListing = listing as VeiculoListing;
      return (
        <div className="text-sm text-muted-foreground space-y-1">
          {veiculoListing.brand && veiculoListing.model && (
            <p>{veiculoListing.brand} • {veiculoListing.model}</p>
          )}
          {veiculoListing.year && veiculoListing.mileage && (
            <p>{veiculoListing.year} • {veiculoListing.mileage}km</p>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <Card className="group cursor-pointer overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:text-primary transition-colors">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg truncate text-secondary">{listing.title}</h3>
        <p className="text-2xl font-bold text-primary">
          R$ {listing.price.toLocaleString('pt-BR')}
        </p>
        {renderDetails()}
        <div className="pt-2 text-sm text-muted-foreground space-y-1">
          <p>{listing.location}</p>
          <p>{new Date(listing.createdAt).toLocaleDateString('pt-BR')}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;