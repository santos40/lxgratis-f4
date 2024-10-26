import Navbar from "@/components/Navbar";
import ListingForm from "@/components/ListingForm";

const CreateListing = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Criar Novo Anúncio</h1>
        <div className="max-w-2xl mx-auto">
          <ListingForm />
        </div>
      </main>
    </div>
  );
};

export default CreateListing;