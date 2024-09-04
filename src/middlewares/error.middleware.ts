// src/middlewares/errorMiddleware.ts
import { NextApiRequest, NextApiResponse } from 'next';

export const errorMiddleware = (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await handler(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
