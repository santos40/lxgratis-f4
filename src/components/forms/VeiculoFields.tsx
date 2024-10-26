import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ListingFormValues } from "@/types/forms";

const veiculoTypes = [
  { value: "carro", label: "Carro" },
  { value: "moto", label: "Moto" },
  { value: "caminhao", label: "Caminhão" },
];

const carBrands = [
  "Chevrolet",
  "Volkswagen",
  "Fiat",
  "Ford",
  "Toyota",
  "Honda",
  "Hyundai",
  "Jeep",
];

interface VeiculoFieldsProps {
  form: UseFormReturn<ListingFormValues>;
}

export const VeiculoFields = ({ form }: VeiculoFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="veiculoType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tipo de Veículo</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {veiculoTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="brand"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Marca</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a marca" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {carBrands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="model"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Modelo</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="year"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ano</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                {...field} 
                onChange={e => field.onChange(Number(e.target.value))}
                value={field.value || ''} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="mileage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quilometragem</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                {...field} 
                onChange={e => field.onChange(Number(e.target.value))}
                value={field.value || ''} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};