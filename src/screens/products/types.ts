export interface ICategory {
    id: string
    name:string
}
export interface IProduct {
    id: string
    image: string
    images:string[]
    name:string
    price:string
    off:string
    rating:number
    new: boolean
    isFav:boolean
    out_of_stock: boolean
    reviewCount: number
    sizes: number[]
    description: string
}