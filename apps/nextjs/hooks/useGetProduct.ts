import { useGetData } from './useGetData';

export function useGetProduct(id: number) {
  const Products = useGetData();
  return Products.find((item) => item.id === id);
}
