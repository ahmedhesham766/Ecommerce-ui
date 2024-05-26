export interface ProductImage {
    imageUrl: string;
}

export interface Product {
    productId: number;
    productName: string;
    stock: number;
    price: number;
    images: ProductImage[];
    categoryName: string;
}