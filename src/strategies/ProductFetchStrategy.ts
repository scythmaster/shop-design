// src/strategies/ProductFetchStrategy.ts
import { Product } from '../models/Product';

export interface ProductFetchStrategy {
    fetchProductById(id: string): Promise<Product | null>;
}
