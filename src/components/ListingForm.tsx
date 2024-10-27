import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ListingCategory } from "@/types/listings";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ImovelFields } from "./forms/ImovelFields";
import { VeiculoFields } from "./forms/VeiculoFields";
import { BaseListingFields } from "./forms/BaseListingFields";
import { CategorySelect } from "./forms/CategorySelect";
import { ListingFormValues, listingSchema } from "@/types/forms";

const ListingForm = () => {
  const [category, setCategory] = useState<ListingCategory>("outros");

  const form = useForm<ListingFormValues>({
    resolver: zodResolver(listingSchema),
    defaultValues: {
      category: "outros",
      title: "",
      price: 0,
      description: "",
      location: "",
    },
  });

  const onSubmit = (data: ListingFormValues) => {
    console.log(data);
  };

  const handleCategoryChange = (newCategory: ListingCategory) => {
    form.reset({
      category: newCategory,
      title: "",
      price: 0,
      description: "",
      location: "",
    });
    setCategory(newCategory);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CategorySelect value={category} onValueChange={handleCategoryChange} />
        
        {category === "imovel" && <ImovelFields form={form} />}
        {category === "veiculo" && <VeiculoFields form={form} />}
        
        <BaseListingFields form={form} />

        <Button type="submit">Criar Anúncio</Button>
      </form>
    </Form>
  );
};

export default ListingForm;