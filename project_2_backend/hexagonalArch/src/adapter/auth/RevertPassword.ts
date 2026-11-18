import ProviderCripto from "@/core/user/service/ProviderCripto";

export default class RevertPassword  implements ProviderCripto {
    cripto(password: string): string {
        return password.split('').reverse().join('');
    }
    compare(password: string, criptoPassaword: string): boolean {
        return this.cripto(password) === criptoPassaword;
    }
}