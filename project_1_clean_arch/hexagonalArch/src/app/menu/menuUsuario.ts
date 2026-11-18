import TerminalUtil from "@/util/terminalUtil";
import RegistryUser from "@/app/User/RegistryUser";

export default async function  menuUsuario() {


        TerminalUtil.title('Usuario');
        const [idx, _] = await TerminalUtil.menu([
            '1. Registrar usuario',
            'voltar'
        ])

        switch(idx) {
            case 0: 
                // await RegisterUser.execute();
                await RegistryUser();
                break;
            default:
                return;            
        }

        await menuUsuario();

}