// src/repositories/ProductRepository.ts
import { BaseRepository } from './BaseRepository';
import { Product } from '../models/Product';

export class ProductRepository extends BaseRepository<Product> {
    private products: Product[] = [];

    async findAll(): Promise<Product[]> {
        return this.products;
    }

    async findById(id: string): Promise<Product | null> {
        const product = this.products.find(p => p.id === id);
        return product || null;
    }

    async create(product: Product): Promise<Product> {
        this.products.push(product);
        return product;
    }

    async update(id: string, product: Product): Promise<Product | null> {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) return null;
        this.products[index] = product;
        return product;
    }

    async delete(id: string): Promise<void> {
        this.products = this.products.filter(p => p.id !== id);
    }
}
