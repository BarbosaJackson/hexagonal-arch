import { terminal } from 'terminal-kit';

export default class TerminalUtil {

    static title(texto: string) {
        TerminalUtil.clearScreen();
        terminal.magenta(`${texto}\n`);
        terminal.magenta(`-`.repeat(texto.length) + `\n`);
    }

    static clearScreen() {
        terminal.clear();
    }

    static async confirm(text: string): Promise<boolean> {
        terminal.yellow(`\n${text}`);
        const response = await terminal.singleLineMenu(["Sim", "Nao"]).promise;
        return response.selectedIndex === 0;
    }

    static async menu(options: string[]): Promise<[number, string]> {
        const response = await terminal.singleColumnMenu(options).promise;
        return [response.selectedIndex, response.selectedText];
    }

    static async select(text: string, options: string[]): Promise<[number, string]> {
        terminal.yellow(`\n${text}`);
        const response = await terminal.singleLineMenu(options).promise;
        return [response.selectedIndex, response.selectedText];
    }

    static showKeyValue(key: string, value: any) {
        terminal.yellow(key).green(value).white('\n');
    }

    static exitMenu() {
        terminal.processExit(0);
    }

    static showMessage(text: string): void {
        terminal.gray(text);
    }

    static async waitEnter(): Promise<void> {
        terminal.white('\nPressione ENTER para continuar...');
        await terminal.inputField({echo: false }).promise;
    }

    static async readData(label: string, defaultValue: string=""): Promise<string> {
        terminal.yellow(`\n${label}`);
        const value = await terminal.inputField({default: defaultValue}).promise;
        if(value) {
            return value;
        }
        return TerminalUtil.readData(label, defaultValue);
    }

    static async sucess(text: string) {
        terminal.green(text);
    }

    static async error(text: string) {
        terminal.red(`\n\n${text}\n`);
    }
}