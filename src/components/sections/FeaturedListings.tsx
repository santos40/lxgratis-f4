import ProductCard from "../ProductCard";
import { Listing } from "@/types/listings";

interface FeaturedListingsProps {
  listings: Listing[];
}

const FeaturedListings = ({ listings }: FeaturedListingsProps) => {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Anúncios em destaque</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((product) => (
          <ProductCard key={product.id} listing={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;