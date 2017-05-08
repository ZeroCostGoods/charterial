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
    private chartData;
    /**
     * Create a new Charterial instance.  In the config options, a chartId and a divId *must* be specified.
     * The chartId will be the unique name for this chart.  And the divId *must* identify an existing div in the DOM
     * into which Charterial will create the canvases and charts.
     * @param options the config options to use for creating this instance of Charterial
     */
    constructor(options: types.CtlConfig);
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
    /** BEGIN MOUSE HANDLERS **/
    private mouseMove;
    private mouseUp;
    private mouseDrag;
    private mouseLeave;
    /** END MOUSE HANDLERS **/
    /************** BEGIN PUBLIC METHODS  ****************************************************************************/
    /**
     * Set the chart data for the chart.  Upon validation, immediately redraw the chart.
     * @param chartData CtlChartData that holds the data upon which to draw the chart
     */
    setChartData(chartData: types.CtlChartData): void;
}
export { Charterial };
