// src/strategies/DatabaseFetchStrategy.ts
import { ProductFetchStrategy } from './ProductFetchStrategy';
import { ProductRepository } from '../repositories/ProductRepository';
import { Product } from '../models/Product';

export class DatabaseFetchStrategy implements ProductFetchStrategy {
    private repository: ProductRepository;

    constructor(repository: ProductRepository) {
        this.repository = repository;
    }

    async fetchProductById(id: string): Promise<Product | null> {
        return this.repository.findById(id);
    }
}
    