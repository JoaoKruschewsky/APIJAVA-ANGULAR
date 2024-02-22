export interface Product {
    id?: number
    nameproduct: string
    amount: number
    price: number
    validity: Date
    sector: {
        id?:number
        name?: string
    }
}