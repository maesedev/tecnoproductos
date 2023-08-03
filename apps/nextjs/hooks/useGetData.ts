import useGetImages from "./useGetImages";


interface product {
    id: number;
    title: string;
    tagline: string;
    price: number;
    longDescription?: string;
    mainImage: any;
    images: Array<any>;
    garantia: string;
    categoria: string | undefined;
    invisible: boolean;
    colors?: Array<string>;
    video?: any
}

const { 
    LY021, H2013D, 
    JTY900, VG02, 
    A7, X15, Q25, 
    P47, VG121, G02, 
    E6S, JS25, HS400A,
    P2962 , GXT310C
} = useGetImages()

export const ArrayCategorias  = [
    {
        name: "Audifonos Bluetooth",
        avatar: VG02.VG02Main
    },
    {
        name: "Audifonos de oficina",
        avatar: JTY900.JTY900Main
    },
    {
        name: "gamer",
        avatar: X15.X15Main
    }
]

export function useGetData() {


    const Products: Array<product> = [
        {
            id: 1,
            title: "Diadema Bluetooth LY021 Negro",
            tagline: "Diadema Bluetooth LY021 Negro",
            price: 80000,
            longDescription: "",
            mainImage: LY021.LY021Main,
            images: LY021.Images,
            garantia: "3 meses",
            invisible: false,
            categoria: ArrayCategorias[0]?.name,
            colors: ["Negro", "Rojo", "Azul"]
        },
        {
            id: 2,
            title: "Audífonos Gaming H2013D Negro",
            tagline: "Audífonos Gaming H2013D Negro",
            price: 110000,
            longDescription: "",
            mainImage: H2013D.H2013DMain,
            images: H2013D.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false,
        },
        {
            id: 3,
            title: "Auriculares Con Micrófono JTY-900",
            tagline: "Auriculares Con Micrófono JTY-900",
            price: 25000,
            longDescription: "",
            mainImage: JTY900.JTY900Main,
            images: JTY900.Images,
            garantia: "2 meses",
            categoria: ArrayCategorias[1]?.name,
            invisible: false
        },
        {
            id: 4,
            title: "Audífonos Sport VG02 negro",
            tagline: "Audífonos Sport VG02 negro",
            price: 50000,
            longDescription: "",
            mainImage: VG02.VG02Main,
            images: VG02.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false
        },
        {
            id: 5,
            title: "Audífonos bluetooth gamer X15 ",
            tagline: "Audífonos bluetooth gamer X15",
            price: 55000,
            longDescription: "",
            mainImage: X15.X15Main,
            images: X15.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[2]?.name,
            invisible: false
        },
        {
            id: 6,
            title: "Audifonos Bluetooth A7-TWS caja dinamica",
            tagline: "Audifonos Bluetooth A7-TWS Verde Claro",
            price: 50000,
            longDescription: "",
            mainImage: A7.A7Main,
            images: A7.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false
        },
        {
            id: 7,
            title: "Audifonos Bluetooth TWS Truly Q25",
            tagline: "Audifonos Bluetooth TWS Truly Q25",
            price: 50000,
            longDescription: "",
            mainImage: Q25.Q25Main,
            images: Q25.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false,
            video: "https://youtu.be/ozF7ZqgvJds"
        },
        {
            id: 8,
            title: "Audífonos Diadema Bluetooth EDR P47 Blanco",
            tagline: "Audífonos Diadema Bluetooth EDR P47 Blanco",
            price: 38000,
            longDescription: "",
            mainImage: P47.P47Main,
            images: P47.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false,
            video: "https://youtu.be/nmXF8YO1GZg"
        },
        {
            id: 9,
            title: "Audifono Bluetooth VG121 Negro",
            tagline: "Audifono Bluetooth VG121 Negro",
            price: 80000,
            longDescription: "",
            mainImage: VG121.VG121Main,
            images: VG121.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false,
            video: "https://youtu.be/7E_AB5bT4Gg"
        },
        {
            id: 10,
            title: "Audifonos Wireless E6S Negro",
            tagline: "Audifonos Wireless E6S Negro",
            price: 45000,
            longDescription: "",
            mainImage: E6S.E6SMain,
            images: E6S.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false,
            video: "https://youtu.be/I0_uwObm7ps"
        },
        {
            id: 11,
            title: "Audifonos Sport G02 - Blanco",
            tagline: "Audifonos Sport G02 - Blanco",
            price: 35000,
            longDescription: "",
            mainImage: G02.G02Main,
            images: G02.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false,
            video: "https://youtu.be/wJN_9L_EF2c",
            colors: ["negro", "blanco", "rojo"]
        },
        {
            id: 12,
            title: "Audífonos Bluetooth TWS JS25 Negro",
            tagline: "Audífonos Bluetooth TWS JS25 Negro",
            price: 65000,
            longDescription: "",
            mainImage: JS25.JS25Main,
            images: JS25.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false,
            video: "https://youtu.be/nXhX7SfEqsQ",
            colors: ["negro", "blanco"]
        }, 
        {
            id: 13,
            title: "Audífono Diadema HS-400A 2 plug 3.5mm Negro",
            tagline: "Audífono Diadema HS-400A 2 plug 3.5mm Negro",
            price: 68000,
            longDescription: "",
            mainImage: HS400A.HS400AMain,
            images: HS400A.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false,
        },
        {
            id: 14,
            title: "Diadema Bluetooth EJ-P2962 Negro / Beige / Rosado",
            tagline: "Diadema Bluetooth EJ-P2962 Negro / Beige / Rosado",
            price: 75000,
            longDescription: "",
            mainImage: P2962.P2962Main,
            images: P2962.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false,
        },
        {
            id: 15,
            title: "Audífonos Trust GXT310C Verde Camuflado",
            tagline: "Audífonos Trust GXT310C Verde Camuflado",
            price: 99000,
            longDescription: "",
            mainImage: GXT310C.GXT310CMain,
            images: GXT310C.Images,
            garantia: "3 meses",
            categoria: ArrayCategorias[0]?.name,
            invisible: false,
        },

    ]

    return Products
}