export interface IProduct {
  _id: string;
  productName: string;
  title: string;
  brand: string;
  price: number;
  discountPercent: number;
  flashSale: boolean;
  images: string[];
  inStock: number;
  category: string;
  subcategory: string;
  productDetails: string;
  rating: number;
  numberOfRatings: number;
}
