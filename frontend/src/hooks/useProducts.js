import { useEffect, useCallback, useState } from "react";
import { httpGetProducts } from "./requests"

export default function useProducts(type) {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const fetchedProducts = await httpGetProducts(type);
    setProducts(fetchedProducts.data.data);
  }, [type]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return products;
}
