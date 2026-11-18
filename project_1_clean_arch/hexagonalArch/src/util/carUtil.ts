import Car from "@/core/fundaments/Car";
import TerminalUtil from "./terminalUtil";
import Fusca from "@/core/fundaments/Fusca";
import Ferrari from "@/core/fundaments/Ferrari";

export default class CarUtil {
    static async selectCar(): Promise<Car> {
        const [carType, _] = await TerminalUtil.select(
            "tipo de carro?", [
                "ferrari", 
                "fusca"
            ]
        );
    
        const car: Car = carType === 0 ? new Ferrari() : new Fusca();
        return car;
    }

    static async selectAction(car: Car): Promise<Car> {
        const [ idx, _ ] = await TerminalUtil.select(
            "Você quer?", [
                "Acelerar",
                "Frear"
            ]
        );

        switch(idx) {
            case 0:
                car.accelerate();
                break;
            case 1:
                car.brake();
                break;
        }
        return car;
    }
}