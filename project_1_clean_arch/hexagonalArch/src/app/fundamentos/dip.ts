import Car from "@/core/fundaments/Car";
import run from "@/core/fundaments/run";
import CarUtil from "@/util/carUtil";
import TerminalUtil from "@/util/terminalUtil";

export default async function dip() {
    TerminalUtil.title("DIP");
    let car: Car = await CarUtil.selectCar();
    run(car, TerminalUtil.showMessage);
    await TerminalUtil.waitEnter();
}