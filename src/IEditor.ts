import IEngine, { IEngineEventMap } from "./IEngine";

export interface IEditorEventMap extends IEngineEventMap {

}

/**
 * 编辑器
 */
export default interface IEditor<EventMap extends IEditorEventMap> extends IEngine<EventMap> {

    export(): void

}