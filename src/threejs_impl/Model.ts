import { Euler, Object3D, Vector3 } from "three";
import IModel from "../IModel";
import IVector3 from "../IVector3";
import Rotation from "./Rotation";



export default class Model<T extends Object3D> implements IModel<T> {

    nativeObject: T
    constructor(nativeObject: T) {
        this.nativeObject = nativeObject
    }

    get id() {
        return this.nativeObject.id;
    }

    get name() {
        return this.nativeObject.name;
    }

    set name(value: string) {
        this.nativeObject.name = value;
    }

    get visible() {
        return this.nativeObject.visible;
    }

    set visible(value: boolean) {
        this.nativeObject.visible = value;
    }

    get position() {
        return this.nativeObject.position
    }

    set position(value: IVector3) {
        this.nativeObject.position.set(value.x, value.y, value.z)
    }

    get rotation() {
        return new Rotation(this.nativeObject.rotation)
    }

    set rotation(value: IVector3) {
        const rotation = new Rotation(this.nativeObject.rotation)
        rotation.x = value.x;
        rotation.y = value.y;
        rotation.z = value.z;
    }

    get scale() {
        return this.nativeObject.scale
    }

    set scale(value: IVector3) {
        this.nativeObject.scale.set(value.x, value.y, value.z)
    }

    asNativeObject(): T {
        return this.nativeObject
    }

}