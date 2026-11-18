import UserLogin from "@/core/user/service/UserLogin";
import { Express } from "express";
import JwtProvider from "./JwtProvider";

export default class UserLoginController {
    constructor(
        server: Express,
        useCase: UserLogin
    ) {
        server.post(
            '/api/users/login', 
            async (req, resp, next) => {
                next();
            },
            async (req, resp) => {
                try {
                    const user = await useCase.execute({
                        email: req.body.email,
                        password: req.body.password
                    });
                    const jwtProvider = new JwtProvider(process.env.JWT_SECRET!)

                    resp.status(200).send({
                        token: jwtProvider.generate(user)
                    });
                } catch (error: any) {
                    resp.status(400).send(error.message);
                }
        })
    }
}