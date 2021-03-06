import * as types from "./types";
import "./styles/chart.scss"

declare let paper: any;

/**
 * The main Charterial class
 */
class Charterial {
    // wrapper div that is specified at instantiation; we put all out elements in here
    private wrapperDiv: HTMLElement;

    private canvasElements: { [id: string]: HTMLElement };   // holds refs to the canvas html elements

    // the Paper objects
    private graphsPaper: any;
    private markingsPaper: any;
    private overlayPaper: any;

    // the Paper interaction tool
    private interactionTool:any;

    // the graphs data
    private chartData:types.CtlChartData;

    /**
     * Create a new Charterial instance.  In the config options, a chartId and a divId *must* be specified.
     * The chartId will be the unique name for this chart.  And the divId *must* identify an existing div in the DOM
     * into which Charterial will create the canvases and charts.
     * @param options the config options to use for creating this instance of Charterial
     */
    constructor(options: types.CtlConfig) {
        this.wrapperDiv = document.getElementById(options.divId);

        if (!this.wrapperDiv) {
            console.error(`Charterial: could not instantiate. No div with id ${options.divId}`);
            return;
        }

        if (!options.chartId) {
            console.error(`Charterial: could not instantiate without a chart Id`);
            return;
        }

        this.createCanvases();
        this.setupPaper();
    }

    /**
     * Create our canvas elements:
     * * graphs: this canvas element will hold the main elements of the graph(s)
     * * markings: this canvas element will hold the dynamic markings (like the time marker, etc)
     * * overlay: this canvas element will hold any overlays, like loading indicators, and will track mouse movement
     */
    private createCanvases = () => {
        this.canvasElements = {};

        ['graphs', 'markings', 'overlay'].forEach((name) => {
            let canvas = document.createElement("canvas");
            canvas.id = name + 'Canvas';
            canvas.className = name + '-canvas';
            canvas.dataset.paperResize = 'true';
            this.canvasElements[name] = canvas;


            this.wrapperDiv.appendChild(canvas)
        });
    };

    /**
     * Creates the PaperJS objects and the layers and interaction event handlers we need.
     */
    private setupPaper = () => {
        // setup the main paperjs scope
        this.graphsPaper = new paper.PaperScope();
        this.graphsPaper.setup(this.canvasElements['graphs']);

        // setup the markings paperjs scope
        this.markingsPaper = new paper.PaperScope();
        this.markingsPaper.setup(this.canvasElements['markings']);

        // setup the overlay paperjs scope
        this.overlayPaper = new paper.PaperScope();
        this.overlayPaper.setup(this.canvasElements['overlay']);


        this.interactionTool = new paper.Tool();
        this.interactionTool.minDistance = 0;
        this.interactionTool.onMouseMove = this.mouseMove;
        this.interactionTool.onMouseUp = this.mouseUp;
        this.interactionTool.onMouseDrag = this.mouseDrag;

        // setup our axis and graphs layer
        // axis is where we will draw the X/Y axis and labels
        // graphs is where we will draw all the graph lines and areas
        this.graphsPaper.activate();
        let layer = new this.graphsPaper.Layer();
        layer.setName('axis');
        layer = new this.graphsPaper.Layer();
        layer.setName('graphs');

        // add the timemarker and global timemarker layers
        // timemarker is where we will draw the timemarker when the user is moused over this Charterial instance
        // global timemarker is drawn when we are told user is moused over another Charterial instance
        this.markingsPaper.activate();
        layer = new this.markingsPaper.Layer();
        layer.setName('globalTimemarker');
        layer = new this.markingsPaper.Layer();
        layer.setName('timemarker');

        // add the messages layer
        this.overlayPaper.activate();
        layer = new this.overlayPaper.Layer();
        layer.setName('messages');

        this.graphsPaper.activate();
        // this.graphsPaper.view.onFrame = this.animate;
        window.addEventListener("resize", () => {
        });

        this.canvasElements['overlay'].addEventListener("mouseleave", this.mouseLeave);
    };

    /** BEGIN MOUSE HANDLERS **/
    private mouseMove = (paperEvent:any) => {
        console.log(`mouse move`);
    };

    private mouseUp = (paperEvent:any) => {
        console.log(`mouse up`);
    };

    private mouseDrag = (paperEvent:any) => {
        console.log(`mouse drag`);
    };

    private mouseLeave = (paperEvent:any) => {
        console.log(`mouse leave`);
    };
    /** END MOUSE HANDLERS **/

    /************** BEGIN PUBLIC METHODS  ****************************************************************************/

    /**
     * Set the chart data for the chart.  Upon validation, immediately redraw the chart.
     * @param chartData CtlChartData that holds the data upon which to draw the chart
     */
    public setChartData(chartData:types.CtlChartData) {
        this.chartData = chartData;
    }

    /************** END PUBLIC METHODS *******************************************************************************/
}

export {Charterial};
