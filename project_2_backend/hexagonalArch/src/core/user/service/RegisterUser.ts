import UseCase from "@/core/shared/UseCase";
import User from "../model/User";
import Errors from "@/core/shared/Errors";
import Id from "@/core/shared/Id";
import ProviderCripto from "./ProviderCripto";
import UserRepository from "./UserRepository";

export default class RegisterUser implements UseCase <User, void>{

    constructor(
        private userRepo: UserRepository,
        private provider: ProviderCripto
    ) {}

    async execute(user: User): Promise<void> {
        const criptoPassword = this.provider.cripto(user.password!);
        const existUser = await this.userRepo.searchByEmail(user.email);
        if(existUser) {
            throw new Error(Errors.USER_EXISTS);
        }   

        const newUser: User = {
            id: Id.generate(),
            name: user.name,
            email: user.email,
            password: criptoPassword
        }

        await this.userRepo.insert(newUser);
    }

}