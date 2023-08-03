"use client"

import { useEffect, useState } from "react"

export default function TotalPrice() {
    const [price,setPrice] = useState<string>("")

    useEffect(()=>{

        let productsCart: string  =  window.localStorage.getItem("Cart") ?? "[]" 
    
        let Products:Array<any> = JSON.parse(productsCart)
        let TotalPrice:number = 0
    
        Products.forEach((item,index)=>{
            TotalPrice += item.price * item.cantidad
        })
        setPrice(TotalPrice.toLocaleString("es-ES"))
        
    },[])

    return (
        <p className="text-2xl font-medium tracking-tight text-gray-900">
            ${price},00
        </p>
    )
}