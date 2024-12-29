import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { SlidersHorizontal } from "lucide-react";

const SearchFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [category, setCategory] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  return (
    <div className="w-full bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:w-1/4">
            <Input
              type="text"
              placeholder="O que você procura?"
              className="w-full"
            />
          </div>

          <div className="w-full md:w-1/4">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="imovel">Imóveis</SelectItem>
                <SelectItem value="veiculo">Veículos</SelectItem>
                <SelectItem value="eletronicos">Eletrônicos</SelectItem>
                <SelectItem value="moveis">Móveis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-1/4">
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Localização" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sp">São Paulo</SelectItem>
                <SelectItem value="rj">Rio de Janeiro</SelectItem>
                <SelectItem value="mg">Minas Gerais</SelectItem>
                <SelectItem value="rs">Rio Grande do Sul</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-1/4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price_asc">Menor preço</SelectItem>
                <SelectItem value="price_desc">Maior preço</SelectItem>
                <SelectItem value="date_desc">Mais recentes</SelectItem>
                <SelectItem value="date_asc">Mais antigos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Mais filtros
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filtros avançados</SheetTitle>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <Label>Faixa de preço</Label>
                  <Slider
                    defaultValue={[0, 1000000]}
                    max={1000000}
                    step={1000}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>R$ {priceRange[0].toLocaleString('pt-BR')}</span>
                    <span>R$ {priceRange[1].toLocaleString('pt-BR')}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Condição</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a condição" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Novo</SelectItem>
                      <SelectItem value="used">Usado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Avaliação do vendedor</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a avaliação" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4_plus">4+ estrelas</SelectItem>
                      <SelectItem value="3_plus">3+ estrelas</SelectItem>
                      <SelectItem value="2_plus">2+ estrelas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;