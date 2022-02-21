
export type OnProgress = (progress: IProgress) => void

/**
 * 进度
 */
export default interface IProgress {
    /**
     * 总量
     */
    total: number

    /**
     * 已加载量
     */
    loaded: number

    /**
     * 百分比
     */
    percentage: number
}