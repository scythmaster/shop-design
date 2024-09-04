// src/controllers/ProductController.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ProductService } from '../services/ProductService';

export class ProductController {
    constructor(private productService: ProductService) {}

    async handleGetAll(req: NextApiRequest, res: NextApiResponse) {
        const products = await this.productService.getAllProducts();
        res.status(200).json(products);
    }

    async handleGetById(req: NextApiRequest, res: NextApiResponse) {
        const { id } = req.query;
        const product = await this.productService.getProductById(id as string);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }

    async handleCreate(req: NextApiRequest, res: NextApiResponse) {
        const product = await this.productService.createProduct(req.body);
        res.status(201).json(product);
    }

    async handleUpdate(req: NextApiRequest, res: NextApiResponse) {
        const { id } = req.query;
        const product = await this.productService.updateProduct(id as string, req.body);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }

    async handleDelete(req: NextApiRequest, res: NextApiResponse) {
        const { id } = req.query;
        await this.productService.deleteProduct(id as string);
        res.status(204).end();
    }
}
