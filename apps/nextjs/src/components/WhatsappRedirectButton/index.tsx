"use client"
import Image from "next/image";
import WhatsAppImage from "../../../public/assets/whatsapp.svg"

export default function WhatsappRedirectButton({WhatsAppApiUrl}:{WhatsAppApiUrl:string}) {
    return (
        <div className="col-span-6">
            <button
                onClick={(e) => {
                    e.preventDefault();
                    if (confirm("Seras enviado a Whatsapp")) {
                        window.open(WhatsAppApiUrl)

                    }
                }}
                className="flex w-full justify-center items-center rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
            >
                Enviar pedido a WhatsApp
                <Image src={WhatsAppImage} className="invert mx-2" height={20} width={20} alt="Logo Blanco y Negro de whatsapp" />
            </button>
        </div>
    )
}