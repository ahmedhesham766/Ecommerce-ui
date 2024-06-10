export interface ProductImages {
    imageUrl: string;
}
export interface ProductColors {
    colorName: string;
}


export interface Product {
    productId: number;
    productName: string;
    stock: number;
    price: number;
    images: ProductImages[];
    colors: ProductColors[];
    categoryName: string;
}