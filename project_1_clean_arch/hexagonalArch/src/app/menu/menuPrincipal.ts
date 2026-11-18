import TerminalUtil from "@/util/terminalUtil";
import menuFundamentos from "./menuFundamentos";
import menuUsuario from "./menuUsuario";

export default async function MenuPrincipal() {
    TerminalUtil.title('Menu principal');
    const [idx, _] = await TerminalUtil.menu([
        '1. Fundamentos',
        '2. Usuario',
        'Sair'
    ]);

    switch(idx) {
        case 0:
            await menuFundamentos();
            break;
        case 1:
            await menuUsuario();
            break;
        default:
            TerminalUtil.exitMenu();
            return;
    }

    await MenuPrincipal();
}