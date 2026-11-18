import Car from "@/core/fundaments/Car";
import CarUtil from "@/util/carUtil";
import TerminalUtil from "@/util/terminalUtil";

export default async function Polimorfismo() {
    TerminalUtil.title("Polimorfismo");
    
    let car: Car = await CarUtil.selectCar();

    while(true) {
        TerminalUtil.clearScreen();
        TerminalUtil.showKeyValue(
            'Velocidade máxima: ', 
            `${car.maxVelocity} km/h`
        );
        TerminalUtil.showKeyValue(
            'Velocidade atual: ', 
            `${car.currentVelocity} km/h`
        );

        car = await CarUtil.selectAction(car);

        const continue_ = await TerminalUtil.confirm("Deseja continuar?");
        if(!continue_) {
            return;
        }
    }

}