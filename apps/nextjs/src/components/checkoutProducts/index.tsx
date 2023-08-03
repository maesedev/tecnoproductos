"use client"

import useGetImages from "../../../hooks/useGetImages";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CheckOutProducts() {
    const [Products,setProducts] = useState<Array<any>>([])

    useEffect(()=>{
        const getProductsFromLocalStorage = (): Array<any> => {
            let productsCart: string = window.localStorage.getItem("Cart") ?? "[]"
            return JSON.parse(productsCart)
        }
    
        const removeZeroCuantityProducts = (): void => {
    
            let productsCart: string = window.localStorage.getItem("Cart") ?? "[]"
            let products: Array<any> = JSON.parse(productsCart)
    
            products = products.filter((item) => item.cantidad != 0)
            console.log(products);
    
            window.localStorage.setItem("Cart", JSON.stringify(products))
    
        
            
        }
        setProducts(getProductsFromLocalStorage())
        
    },[])




    return (
        <ul className="-my-4 divide-y divide-gray-100">

            {
                Products.map((item,index) => (

                    <li key={index} className="flex items-center justify-between gap-4 py-4">
                        <div className="flex items-center">
                            <Image
                                src={item.mainImage}
                                height={50}
                                width={50}
                                alt=""
                                className="h-16 w-16 rounded object-cover"
                            />

                            <div>
                                <h3 className="text-sm text-gray-900">{item.title}</h3>

                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dt className="inline">Color:</dt>
                                        <dd className="inline">Negro</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="cursor-pointer"><MinusCircleIcon height={25} width={25} /></div>
                            <div className="mx-4">{item.cantidad}</div>
                            <div className="cursor-pointer"><PlusCircleIcon height={25} width={25} /></div>
                        </div>
                    </li>
                ))
            }

        </ul>
    )

}