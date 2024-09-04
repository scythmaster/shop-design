// src/decorators/LoggingProductRepository.ts
import { ProductRepository } from '../repositories/ProductRepository';
import { Product } from '../models/Product';

export class LoggingProductRepository extends ProductRepository {
    async findAll(): Promise<Product[]> {
        console.log('Fetching all products');
        return super.findAll();
    }

    async findById(id: string): Promise<Product | null> {
        console.log(`Fetching product with ID: ${id}`);
        return super.findById(id);
    }

    async create(product: Product): Promise<Product> {
        console.log(`Creating product with ID: ${product.id}`);
        return super.create(product);
    }

    async update(id: string, product: Product): Promise<Product | null> {
        console.log(`Updating product with ID: ${id}`);
        return super.update(id, product);
    }

    async delete(id: string): Promise<void> {
        console.log(`Deleting product with ID: ${id}`);
        return super.delete(id);
    }
}
