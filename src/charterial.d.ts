import * as types from "./types";
import "./styles/chart.scss";
/**
 * The main Charterial class
 */
declare class Charterial {
    private wrapperDiv;
    private canvasElements;
    constructor(options: types.ICharterialConfig);
    private createCanvases;
}
export { Charterial };
