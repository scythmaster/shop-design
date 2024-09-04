
import { NextApiRequest, NextApiResponse } from 'next';
import { ProductController } from '../../../backend/src/controllers/ProductController';
import { errorMiddleware } from '../../../backend/src/middlewares/error.middleware';
import { ProductRepositoryFactory } from '../../../backend/src/repositories/ProductRepositoryFactory';
import { ProductService } from '../../../backend/src/services/ProductService';

// Dependency Injection
const productRepository = ProductRepositoryFactory.create();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await productController.handleGetAll(req, res);
    } else if (req.method === 'POST') {
        await productController.handleCreate(req, res);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default errorMiddleware(handler);
