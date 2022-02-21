import IEngine, { IEngineEventMap, IEngineInitProps } from "../IEngine";


export default class Engine implements IEngine<IEngineEventMap>{

    eventMap: Map<keyof IEngineEventMap, IEngineEventMap[keyof IEngineEventMap][]> = new Map();

    props: IEngineInitProps

    container: Element

    constructor(container: string | Element, props?: IEngineInitProps) {
        if (container instanceof Element) {
            this.container = container
        } else {
            this.container = document.getElementById(container);
        }
        if (!container) {
            throw new Error("container is requisite")
        }
        this.init(props)
    }

    init = (props?: IEngineInitProps) => {
        this.props = props;
        return this;
    }


    addListener<K extends keyof IEngineEventMap>(type: K, listener: IEngineEventMap[K]): void {
        let list = this.eventMap.get(type)
        list = list ? list : [];
        list.push(listener);
        this.eventMap.set(type, list);
    }

    removeListener<K extends keyof IEngineEventMap>(type: K, listener: IEngineEventMap[K]): void {
        let list = this.eventMap.get(type)
        if (list) {
            for (let i = 0; i < list.length; i++) {
                const item = list[i];
                if (item === listener) {
                    list.splice(i, 1)
                }
            }
        }
    }

}