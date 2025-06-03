export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  colors: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  description: string;
  category: string;
}