
export interface IEventMap {
    [key: string]: [value: Function]
}

export default interface IEvent<IEventMap> {

    addListener<K extends keyof IEventMap>(type: K, listener: IEventMap[K]): void

    removeListener<K extends keyof IEventMap>(type: K, listener: IEventMap[K]): void

}
