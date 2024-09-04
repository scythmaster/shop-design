// src/strategies/APIFetchStrategy.ts
import { ProductFetchStrategy } from './ProductFetchStrategy';
import { Product } from '../models/Product';

export class APIFetchStrategy implements ProductFetchStrategy {
    async fetchProductById(id: string): Promise<Product | null> {
        // External API fetch logic here
        return null; // Mock response
    }
}
