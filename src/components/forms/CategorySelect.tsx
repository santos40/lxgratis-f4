import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ListingCategory } from "@/types/listings";

interface CategorySelectProps {
  value: ListingCategory;
  onValueChange: (value: ListingCategory) => void;
}

export const CategorySelect = ({ value, onValueChange }: CategorySelectProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione uma categoria" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="imovel">Imóvel</SelectItem>
        <SelectItem value="veiculo">Veículo</SelectItem>
        <SelectItem value="outros">Outros</SelectItem>
      </SelectContent>
    </Select>
  );
};