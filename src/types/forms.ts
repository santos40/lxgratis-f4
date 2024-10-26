import { z } from "zod";
import { ListingCategory, ImovelType, VeiculoType } from "./listings";

const baseSchema = {
  title: z.string().min(1),
  price: z.number().min(0),
  description: z.string(),
  location: z.string(),
  category: z.enum(["imovel", "veiculo", "outros"] as const),
};

export const imovelSchema = z.object({
  ...baseSchema,
  category: z.literal("imovel"),
  imovelType: z.enum(["casa", "apartamento", "terreno", "chacara"] as const),
  area: z.number(),
  bedrooms: z.number().optional(),
});

export const veiculoSchema = z.object({
  ...baseSchema,
  category: z.literal("veiculo"),
  veiculoType: z.enum(["carro", "moto", "caminhao"] as const),
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  mileage: z.number(),
});

export const outrosSchema = z.object({
  ...baseSchema,
  category: z.literal("outros"),
});

export type ImovelFormValues = z.infer<typeof imovelSchema>;
export type VeiculoFormValues = z.infer<typeof veiculoSchema>;
export type OutrosFormValues = z.infer<typeof outrosSchema>;
export type ListingFormValues = ImovelFormValues | VeiculoFormValues | OutrosFormValues;