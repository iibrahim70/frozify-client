const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  POPULAR_PRODUCTS: `${API_BASE_URL}/products/popular-products`,
};
