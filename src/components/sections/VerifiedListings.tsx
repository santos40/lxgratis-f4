import ProductCard from "../ProductCard";
import { Listing } from "@/types/listings";

interface VerifiedListingsProps {
  title: string;
  category: string;
  listings: Listing[];
}

const VerifiedListings = ({ title, category, listings }: VerifiedListingsProps) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Verificados
          </span>
        </div>
        <a href={`/categoria/${category}`} className="text-primary hover:underline">
          Ver todos
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <ProductCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
};

export default VerifiedListings;