export type ListingCategory = 'imovel' | 'veiculo' | 'outros';

export type ImovelType = 'casa' | 'apartamento' | 'terreno' | 'chacara';
export type VeiculoType = 'carro' | 'moto' | 'caminhao';

interface BaseListing {
  id: string;
  title: string;
  price: number;
  description: string;
  location: string;
  images: string[];
  category: ListingCategory;
  createdAt: string;
  userId: string;
}

export interface ImovelListing extends BaseListing {
  category: 'imovel';
  type: ImovelType;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  garage?: number;
  hasPool?: boolean;
}

export interface VeiculoListing extends BaseListing {
  category: 'veiculo';
  type: VeiculoType;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuel?: 'gasolina' | 'etanol' | 'diesel' | 'eletrico' | 'hibrido';
  transmission?: 'manual' | 'automatico';
}

export interface OutrosListing extends BaseListing {
  category: 'outros';
}

export type Listing = ImovelListing | VeiculoListing | OutrosListing;