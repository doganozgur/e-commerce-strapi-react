import { useEffect, useCallback, useState } from "react";

export function useProducts(id) {
  const [products, setProducts] = useState([]);

  const fetchedProducts = useCallback(async () => {
    const getProducts = async () => {
      const url = `https://api.escuelajs.co/api/v1/categories/${id}/products`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    };
    const products = await getProducts();
    setProducts(products);
  }, [id]);

  useEffect(() => {
    fetchedProducts();
  }, [fetchedProducts]);

  return products;
}
