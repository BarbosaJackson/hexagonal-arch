import UseCase from "@/core/shared/UseCase";
import Product from "../model/Product";
import User from "@/core/user/model/User";

export type Input = {
    id: string,
    user: User
}

export default class GetProductById implements UseCase<Input, Product> {
    
    constructor(
    ) { }

    async execute(input: Input): Promise<Product> {
        return {
            "id": input.id,
            "name": "Product 1",
            "price": 10.0,
            "getBy": input.user.email
        };
    }
}