import IEvent, { IEventMap } from "./IEvent";
import Initializable from "./IInitializable";
import IProgress, { OnProgress } from "./IProgress";

export interface IEngineEventMap {
    "test": () => void
}

export interface IEngineInitProps {
}

/**
 * 引擎
 */
export default interface IEngine<EventMap extends IEngineEventMap> extends IEvent<EventMap>, Initializable<IEngineInitProps> {


}
