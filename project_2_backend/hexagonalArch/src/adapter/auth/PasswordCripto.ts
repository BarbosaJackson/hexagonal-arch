import bcrypt from 'bcrypt';
import ProviderCripto from "@/core/user/service/ProviderCripto";

export default class PasswordCripto implements ProviderCripto {
    cripto(text: string): string {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(text, salt);
    }
    compare(password: string, criptoPassaword: string): boolean {
        return bcrypt.compareSync(password, criptoPassaword);
    }
}