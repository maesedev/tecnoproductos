'use client';

import { useEffect, useState } from 'react';
import { useGetProduct } from '../../../hooks/useGetProduct';

export default function AddToCartButton({ Product }: { Product: any }) {
  const getProductsFromLocalStorage = (): Array<any> => {
    const productsCart: string = window.localStorage.getItem('Cart') ?? '[]';
    return JSON.parse(productsCart);
  };
  const removeZeroCuantityProducts = (): void => {
    const productsCart: string = window.localStorage.getItem('Cart') ?? '[]';
    let products: Array<any> = JSON.parse(productsCart);

    products = products.filter((item) => item.cantidad != 0);

    window.localStorage.setItem('Cart', JSON.stringify(products));
  };

  //Establecer inicialmente la cantidad de productos correcta en el carrito
  const productsCartArr = getProductsFromLocalStorage();
  const index: number = productsCartArr.findIndex((item) => item.id == Product.id);

  const InitialCuantity: number = index == -1 ? 0 : productsCartArr[index].cantidad;

  const [onCart, setOnCart] = useState<number>(InitialCuantity);

  useEffect(() => {
    const ArrCart = getProductsFromLocalStorage();
    Product.cantidad = onCart;

    //remover el elemento repetido
    const index: number = ArrCart.findIndex((item) => item.id == Product.id);

    if (index == -1) {
      //si no esta repetido, directamente cambiamos el item
      ArrCart.push(Product);
      window.localStorage.setItem('Cart', JSON.stringify(ArrCart));
    }
    //si esta repetido simplemente reemplazamos el elemento dentro del array y
    //cambiamos el item
    ArrCart[index] = Product;
    window.localStorage.setItem('Cart', JSON.stringify(ArrCart));

    removeZeroCuantityProducts();
  }, [onCart]);

  return (
    <div className="mt-8 flex justify-center gap-4">
      <button
        onClick={(e) => {
          e.preventDefault();
          setOnCart(onCart != 0 ? onCart - 1 : 0);
        }}
        className="block rounded bg-gray-500 px-5 py-3 text-xs font-medium text-white hover:bg-gray-600"
      >
        -
      </button>
      <div>
        <label htmlFor="quantity" className="sr-only">
          Qty
        </label>

        <input
          onChange={() => {}}
          type="number"
          id="quantity"
          value={onCart}
          className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          setOnCart(onCart + 1);
        }}
        className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
      >
        Añadir al carrito
      </button>
    </div>
  );
}
