import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ListingCategory, ImovelType, VeiculoType } from "@/types/listings";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BaseListingFields } from "./BaseListingFields";
import { ImovelFields } from "./ImovelFields";
import { VeiculoFields } from "./VeiculoFields";

const listingFormSchema = z.object({
  title: z.string().min(1),
  price: z.number().min(0),
  description: z.string(),
  location: z.string(),
  category: z.enum(["imovel", "veiculo", "outros"] as const),
  imovelType: z.enum(["casa", "apartamento", "terreno", "chacara"] as const).optional(),
  area: z.number().optional(),
  bedrooms: z.number().optional(),
  veiculoType: z.enum(["carro", "moto", "caminhao"] as const).optional(),
  brand: z.string().optional(),
  year: z.number().optional(),
  mileage: z.number().optional(),
});

export type ListingFormValues = z.infer<typeof listingFormSchema>;

const ListingForm = () => {
  const [category, setCategory] = useState<ListingCategory>("outros");

  const form = useForm<ListingFormValues>({
    resolver: zodResolver(listingFormSchema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      location: "",
      category: "outros",
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
            form.setValue("category", value);
            setCategory(value);
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