import { Product } from "src/app/products/model/Product";

export interface Cart {
    cartId: number;
    userId: number;
    totalCost: number;
    prodCount: number;
    products: Product[];
}
