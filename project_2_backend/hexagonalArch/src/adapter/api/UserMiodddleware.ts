import {Request, Response, NextFunction} from 'express';
import JwtProvider from './JwtProvider';
import UserRepository from '@/core/user/service/UserRepository';
import User from '@/core/user/model/User';
import Errors from '@/core/shared/Errors';


export default function UserMiddleware(repository: UserRepository) {
    return async(
        request: Request, 
        response: Response, 
        next: NextFunction
    ) => {
        const accessDenied = (message: string) => response.status(403).send(message);
        const token = request.headers.authorization?.replace('Bearer ', '')

        if(!token) {
            accessDenied('Invalid token');
            return;
        }

        const jwtProvider = new JwtProvider(process.env.JWT_SECRET!);
        const userToken = jwtProvider.getPayload(token) as User;
        const user = await repository.searchByEmail(userToken.email);

        if(!user) {
            accessDenied(Errors.USER_NOT_EXISTS);
            return;
        }
        (request as any).user = user;

        next();
    }
}