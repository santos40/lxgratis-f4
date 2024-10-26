import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ListingFormValues } from "@/types/forms";

const imovelTypes = [
  { value: "casa", label: "Casa" },
  { value: "apartamento", label: "Apartamento" },
  { value: "terreno", label: "Terreno" },
  { value: "chacara", label: "Chácara" },
];

interface ImovelFieldsProps {
  form: UseFormReturn<ListingFormValues>;
}

export const ImovelFields = ({ form }: ImovelFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="imovelType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tipo de Imóvel</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {imovelTypes.map((type) => (
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
        name="area"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Área (m²)</FormLabel>
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
        name="bedrooms"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quartos</FormLabel>
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