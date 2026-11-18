import ProviderCripto from "@/core/user/service/ProviderCripto";

export default class RevertPassword  implements ProviderCripto {
    cripto(password: string): string {
        return password.split('').reverse().join('');
    }
}