export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export interface PriceRange {
  label: string;
  min: number;
  max: number;
} 