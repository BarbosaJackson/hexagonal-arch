import { Express } from "express";
import GetProductById from "@/core/product/service/GetProductById";

export default class GetProductByIdController {
    constructor(
        server: Express,
        useCase: GetProductById,
        ...middlewares: any[]
    ) {
        server.get(
            '/api/products/:id', ...middlewares,
            async (req, resp) => {
                try {
                    const product = await useCase.execute({
                        id: (req.params as any).id,
                        user: (req as any).user
                    });

                    resp.status(200).send(product);
                } catch (error: any) {
                    resp.status(400).send(error.message);
                }
        })
    }
}