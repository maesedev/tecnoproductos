
import Image from "next/image";
import { useGetPrettiePrice } from "../../../hooks/useGetPrettiePrice";
interface options {
    id: number;
    title: string;
    price: number;
    description: string;
    mainImageURL: string;
}

export default function Product({ id, title, price, description, mainImageURL }: options) {
    
    return (

        <div className="flex flex-row items-center   sm:flex-col w-full sm:w-[220px]   bg-white p-2 hover:shadow-2xl hover:scale-105 transition-all">
            <div className="p-2">
                <a href={"/product/" + id} className="">
                    <Image className="h-64 w-auto rounded-3xl object-contain transition-all hover:scale-110 hover:shadow-lg" src={mainImageURL} alt={title} />
                </a>
            </div>
            <div className=" ">
                <p className="text-2xl text-center ">{useGetPrettiePrice(price)} <span className="text-sm font-light">cop</span></p>
                <h2 className="text-sm text-slate-600">{title}</h2>
                <a href={"/product/" + id} className="bg-green-400 text-sm text-white hover:bg-green-500 block w-52 text-center px-4 py-2 my-2 rounded-xl">Ver producto </a>
            </div>

        </div>
    )
}