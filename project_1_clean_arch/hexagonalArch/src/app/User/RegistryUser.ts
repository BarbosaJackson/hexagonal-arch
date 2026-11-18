import User from "@/core/user/model/User";
import TerminalUtil from "@/util/terminalUtil";

import RegisterUser from "@/core/user/service/RegisterUser";
import RevertPassword from "@/adapter/auth/RevertPassword";
import PasswordCriptoSpace from "@/adapter/auth/PasswordCriptoSpace";
import PasswordCripto from "@/adapter/auth/PasswordCripto";
import MockUsers from "@/adapter/database/mockUsers";
import UserPgRepository from "@/adapter/database/UserPgRepository";

export default async function RegistryUser() {

    const {title, readData, sucess, error, waitEnter} = TerminalUtil;
    title("Registrar Usuario");
    const name = await readData("Name: ");
    const email = await readData("Email:");
    const password = await readData("Password:");

    const user: User = { name, email, password};
    // const providerCripto = new RevertPassword();
    // const providerCripto = new PasswordCriptoSpace(); 
    const providerCripto = new PasswordCripto();
    // const userRepository = new MockUsers();
    const userRepository = new UserPgRepository();
    try {
        await new RegisterUser(userRepository, providerCripto).execute(user);
        sucess("\nUsuario criado com sucesso");
    } catch(e: any) {
        error(e.message);
    } finally {
        await waitEnter();
    }
}