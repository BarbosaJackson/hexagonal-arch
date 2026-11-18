import TerminalUtil from "@/util/terminalUtil";
import Car from "./Car";

export default function run(
    car: Car,
    logger: (str: string) => void = console.log
) {
    Array.from({length: 10}).forEach(() => {
        car.accelerate();
        logger(`\nVelocidade: ${car.currentVelocity}`);
    });
    Array.from({length: 10}).forEach(() => {
        car.brake();
        logger(`\nVelocidade: ${car.currentVelocity}`);
    });
}