import { Euler } from "three";
import INativable from "../INativable";
import IVector3 from "../IVector3";

export const ANGLE = (Math.PI / 180)

export default class Rotation implements IVector3, INativable<Euler> {
    euler: Euler
    constructor(euler: Euler) {
        this.euler = euler
    }
    get x() {
        return this.euler.x / ANGLE;
    }
    set x(value: number) {
        this.euler.x = value * ANGLE;
    }
    get y() {
        return this.euler.x / ANGLE;
    }
    set y(value: number) {
        this.euler.x = value * ANGLE;
    }
    get z() {
        return this.euler.x / ANGLE;
    }
    set z(value: number) {
        this.euler.x = value * ANGLE;
    }

    asNativeObject(): Euler {
        return this.euler;
    }
}