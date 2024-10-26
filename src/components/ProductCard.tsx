import { Card } from "./ui/card";
import { Heart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  location: string;
  date: string;
  imageUrl: string;
}

const ProductCard = ({ title, price, location, date, imageUrl }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden">
      <div className="relative aspect-square">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full hover:text-primary transition-colors">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{title}</h3>
        <p className="text-2xl font-bold text-primary">
          R$ {price.toLocaleString('pt-BR')}
        </p>
        <div className="mt-2 text-sm text-gray-500">
          <p>{location}</p>
          <p>{date}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;