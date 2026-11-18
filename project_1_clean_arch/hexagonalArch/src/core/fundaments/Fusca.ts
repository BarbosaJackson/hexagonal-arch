import Car from "./Car";

export default class Fusca implements Car {
    constructor(
        readonly maxVelocity: number = 140,
        private _currentVelocity: number = 0
    ) {}

    get currentVelocity() {
        return this._currentVelocity;
    }

    accelerate(): void {
        this._currentVelocity = Math.min(
            this._currentVelocity + 5,
            this.maxVelocity
        );
    }

    brake(): void {
        this._currentVelocity = Math.max(
            this._currentVelocity - 5,
            0
        );
    }
}