import UseCase from "@/core/shared/UseCase";
import User from "../model/User";
import UserRepository from "./UserRepository";
import Errors from "@/core/shared/Errors";
import ProviderCripto from "./ProviderCripto";

export type UserLoginInput = {
    email: string,
    password: string
}

export type UserLoginOutput = {
    user: User,
    token: string
};

export default class UserLogin implements UseCase<UserLoginInput, User> {
    
    constructor(
        private repository: UserRepository,
        private criptoProvider: ProviderCripto
    ) {

    }

    async execute(input: UserLoginInput): Promise<User> {
        const user = await this.repository.searchByEmail(input.email);
        
        if(!user) {
            throw new Error(Errors.USER_NOT_EXISTS);
        }

        const samePassword = this.criptoProvider.compare(
            input.password, 
            user.password!
        );

        if(!samePassword) {
            throw new Error(Errors.PASSWORD_WRONG);
        }

        return {...user, password: undefined};
    }
}