export default interface ProviderCripto {
    cripto(text: string): string;
    compare(password: string, criptoPassaword: string): boolean;
}