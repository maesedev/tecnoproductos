/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import { useEffect, useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid';

export default function CheckOutProducts() {
  const [Products, setProducts] = useState<Array<any>>([]);

  useEffect(() => {
    const getProductsFromLocalStorage = (): Array<any> => {
      const productsCart: string = window.localStorage.getItem('Cart') ?? '[]';
      return JSON.parse(productsCart);
    };

    const removeZeroCuantityProducts = (): void => {
      const productsCart: string = window.localStorage.getItem('Cart') ?? '[]';
      let products: Array<any> = JSON.parse(productsCart);

      products = products.filter((item) => item.cantidad != 0);
      console.log(products);

      window.localStorage.setItem('Cart', JSON.stringify(products));
    };
    setProducts(getProductsFromLocalStorage());
  }, []);

  return (
    <ul className="-my-4 divide-y divide-gray-100">
      {Products.map((item, index) => (
        <li key={index} className="flex items-center justify-between gap-4 py-4">
          <div className="flex items-center">
            <a href={`/product/${item.id}`}>
              <img
                src={item.mainImage}
                height={50}
                width={50}
                alt=""
                className="h-16 w-16 rounded object-cover"
              />
            </a>

            <div>
              <h3 className="text-sm text-gray-900">
                <a href={`/product/${item.id}`}>{item.title}</a>
              </h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">Color:</dt>
                  <dd className="inline">Negro</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex">
            <div className="cursor-pointer">
              <MinusCircleIcon height={25} width={25} />
            </div>
            <div className="mx-4">{item.cantidad}</div>
            <div className="cursor-pointer">
              <PlusCircleIcon height={25} width={25} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
