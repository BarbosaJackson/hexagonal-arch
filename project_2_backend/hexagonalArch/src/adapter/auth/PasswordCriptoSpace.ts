import ProviderCripto from "@/core/user/service/ProviderCripto";

export default class PasswordCriptoSpace implements ProviderCripto {
    cripto(text: string): string {
        return text.split('').join(' ');
    }
    compare(password: string, criptoPassaword: string): boolean {
        return this.cripto(password) === criptoPassaword;
    }
}