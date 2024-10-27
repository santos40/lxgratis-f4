import { z } from "zod";
import { ImovelType, VeiculoType } from "./listings";

const baseSchema = z.object({
  title: z.string().min(1),
  price: z.number().min(0),
  description: z.string(),
  location: z.string(),
  category: z.enum(["imovel", "veiculo", "outros"]),
});

export const imovelSchema = baseSchema.extend({
  category: z.literal("imovel"),
  imovelType: z.enum(["casa", "apartamento", "terreno", "chacara"]),
  area: z.number().min(1),
  bedrooms: z.number().optional(),
});

export const veiculoSchema = baseSchema.extend({
  category: z.literal("veiculo"),
  veiculoType: z.enum(["carro", "moto", "caminhao"]),
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  mileage: z.number(),
});

export const outrosSchema = baseSchema.extend({
  category: z.literal("outros"),
});

export const listingSchema = z.discriminatedUnion("category", [
  imovelSchema,
  veiculoSchema,
  outrosSchema,
]);

export type ListingFormValues = z.infer<typeof listingSchema>;