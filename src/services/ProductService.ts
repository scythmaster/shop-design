// import { IProductService } from "../interfaces/IProductService";

//   export class ProductService implements IProductService{
//     getProducts():any[] {
//         return [
//             { id: 1, name: 'Vibrant T-Shirt', price: 29.99, category: 'Clothing', image: '/placeholder.svg' },
//             { id: 2, name: 'Colorful Sneakers', price: 59.99, category: 'Footwear', image: '/placeholder.svg' },
//             { id: 3, name: 'Stylish Backpack', price: 49.99, category: 'Accessories', image: '/placeholder.svg' },
//             { id: 4, name: 'Trendy Sunglasses', price: 39.99, category: 'Accessories', image: '/placeholder.svg' },
//             { id: 5, name: 'Cozy Hoodie', price: 54.99, category: 'Clothing', image: '/placeholder.svg' },
//             { id: 6, name: 'Denim Jeans', price: 69.99, category: 'Clothing', image: '/placeholder.svg' },
//           ];
//     }
//   }
// src/services/ProductService.ts
import { ProductRepository } from '../repositories/ProductRepository';
import { Product } from '../models/Product';

export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    async getAllProducts(): Promise<Product[]> {
        return this.productRepository.findAll();
    }

    async getProductById(id: string): Promise<Product | null> {
        return this.productRepository.findById(id);
    }

    async createProduct(product: Product): Promise<Product> {
        return this.productRepository.create(product);
    }

    async updateProduct(id: string, product: Product): Promise<Product | null> {
        return this.productRepository.update(id, product);
    }

    async deleteProduct(id: string): Promise<void> {
        return this.productRepository.delete(id);
    }
}
