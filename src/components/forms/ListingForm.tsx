import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ListingCategory } from "@/types/listings";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { BaseListingFields } from "./BaseListingFields";
import { ImovelFields } from "./ImovelFields";
import { VeiculoFields } from "./VeiculoFields";

const listingFormSchema = z.discriminatedUnion("category", [
  z.object({
    category: z.literal("imovel"),
    title: z.string().min(1),
    price: z.number().min(0),
    description: z.string(),
    location: z.string(),
    type: z.enum(["casa", "apartamento", "terreno", "chacara"]),
    area: z.number(),
    bedrooms: z.number().optional(),
  }),
  z.object({
    category: z.literal("veiculo"),
    title: z.string().min(1),
    price: z.number().min(0),
    description: z.string(),
    location: z.string(),
    type: z.enum(["carro", "moto", "caminhao"]),
    brand: z.string(),
    model: z.string(),
    year: z.number(),
    mileage: z.number(),
  }),
  z.object({
    category: z.literal("outros"),
    title: z.string().min(1),
    price: z.number().min(0),
    description: z.string(),
    location: z.string(),
  }),
]);

export type ListingFormValues = z.infer<typeof listingFormSchema>;

const ListingForm = () => {
  const [category, setCategory] = useState<ListingCategory>("outros");

  const form = useForm<ListingFormValues>({
    resolver: zodResolver(listingFormSchema),
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Select
          onValueChange={(value: ListingCategory) => {
            form.setValue("category", value as ListingCategory);
            setCategory(value as ListingCategory);
          }}
          value={category}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="imovel">Imóvel</SelectItem>
            <SelectItem value="veiculo">Veículo</SelectItem>
            <SelectItem value="outros">Outros</SelectItem>
          </SelectContent>
        </Select>

        {category === "imovel" && <ImovelFields form={form} />}
        {category === "veiculo" && <VeiculoFields form={form} />}
        
        <BaseListingFields form={form} />

        <Button type="submit">Criar Anúncio</Button>
      </form>
    </Form>
  );
};

export default ListingForm;