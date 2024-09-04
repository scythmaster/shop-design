// src/repositories/ProductRepositoryFactory.ts
import { ProductRepository } from './ProductRepository';

export class ProductRepositoryFactory {
    static create(): ProductRepository {
        return new ProductRepository();
    }
}
