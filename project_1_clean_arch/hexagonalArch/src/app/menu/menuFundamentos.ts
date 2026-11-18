import TerminalUtil from "@/util/terminalUtil";
import Polimorfismo from "../fundamentos/polimorfismo";
import dip from "../fundamentos/dip";

export default async function  menuFundamentos() {


        TerminalUtil.title('Fundamentos');
        const [idx, _] = await TerminalUtil.menu([
            '1. Polimorfismo',
            '2. DIP',
            'voltar'
        ])

        switch(idx) {
            case 0: 
                await Polimorfismo();
                break;
            case 1: 
                await dip();
                break;
            default:
                return;            
        }

        await menuFundamentos();

}