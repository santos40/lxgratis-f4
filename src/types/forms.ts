import { z } from "zod";

const baseSchema = {
  title: z.string().min(1),
  price: z.number().min(0),
  description: z.string(),
  location: z.string(),
};

export const imovelSchema = z.object({
  ...baseSchema,
  category: z.literal("imovel"),
  imovelType: z.enum(["casa", "apartamento", "terreno", "chacara"]),
  area: z.number().min(1),
  bedrooms: z.number().optional(),
});

export const veiculoSchema = z.object({
  ...baseSchema,
  category: z.literal("veiculo"),
  veiculoType: z.enum(["carro", "moto", "caminhao"]),
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  mileage: z.number(),
});

export const outrosSchema = z.object({
  ...baseSchema,
  category: z.literal("outros"),
});

export const listingSchema = z.discriminatedUnion("category", [
  imovelSchema,
  veiculoSchema,
  outrosSchema,
]);

export type ImovelFormValues = z.infer<typeof imovelSchema>;
export type VeiculoFormValues = z.infer<typeof veiculoSchema>;
export type OutrosFormValues = z.infer<typeof outrosSchema>;
export type ListingFormValues = z.infer<typeof listingSchema>;