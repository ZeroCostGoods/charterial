import * as types from "./types";
import "./styles/chart.scss";
/**
 * The main Charterial class
 */
declare class Charterial {
    private wrapperDiv;
    private canvasElements;
    private graphsPaper;
    private markingsPaper;
    private overlayPaper;
    private interactionTool;
    constructor(options: types.ICharterialConfig);
    /**
     * Create our canvas elements:
     * * graphs: this canvas element will hold the main elements of the graph(s)
     * * markings: this canvas element will hold the dynamic markings (like the time marker, etc)
     * * overlay: this canvas element will hold any overlays, like loading indicators, and will track mouse movement
     */
    private createCanvases;
    /**
     * Creates the PaperJS objects and the layers and interaction event handlers we need.
     */
    private setupPaper;
    private mouseMove;
    private mouseUp;
    private mouseDrag;
    private mouseLeave;
}
export { Charterial };
