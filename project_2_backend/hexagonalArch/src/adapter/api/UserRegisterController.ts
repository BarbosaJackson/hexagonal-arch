import RegisterUser from "@/core/user/service/RegisterUser";
import { Express } from "express";

export default class UserRegisterController {
    constructor(
        server: Express,
        useCase: RegisterUser
    ) {
        server.post(
            '/api/users/register', 
            async (req, resp) => {
                try {
                    await useCase.execute({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password
                    });
                    resp.status(200).send();
                } catch (error: any) {
                    resp.status(400).send(error.message);
                }
        })
    }
}