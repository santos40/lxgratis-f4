const PopularCategories = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Categorias populares</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {["Veículos", "Imóveis", "Eletrônicos", "Móveis"].map((category) => (
          <div
            key={category}
            className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold">{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;