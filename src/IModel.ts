import INativable from "./INativable"
import IVector3 from "./IVector3"

/**
 * 模型
 */
export default interface IModel<T> extends INativable<T> {

    readonly id: number
    /**
     * 名称
     */
    name: string

    /**
     * 是否可见
     */
    visible: boolean

    /**
     * 位置（厘米）
     */
    position: IVector3

    /**
     * 旋转（角度）
     */
    rotation: IVector3

    /**
     * 缩放（比例）
     */
    scale: IVector3

}