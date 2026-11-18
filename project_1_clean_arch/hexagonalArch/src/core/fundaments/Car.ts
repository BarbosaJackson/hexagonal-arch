export default interface Car {
    readonly maxVelocity: number;
    currentVelocity: number;

    accelerate(): void;
    brake(): void;
}