export function useGetPrettiePrice(price:number){
    return "$" + (price.toLocaleString("es-ES")) + ",00"
}