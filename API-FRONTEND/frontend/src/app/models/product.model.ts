export interface Product {
    id?: number
    nameproduct: string
    amount: number
    price: number
    sector: {
        id?:number
        name?: string
    }
}