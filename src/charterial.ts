import * as types from "./types";
import "./styles/chart.scss"


/**
 * The main Charterial class
 */
class Charterial {
    // wrapper div that is specified at instantiation; we put all out elements in here
    private wrapperDiv: HTMLElement;

    private canvasElements: { [id:string]: HTMLElement };

    constructor(options: types.ICharterialConfig) {
        console.log("Charterial()");
        console.log(JSON.stringify(options, null, 4));

        this.wrapperDiv = document.getElementById(options.divId);

        if (!this.wrapperDiv) {
            console.error(`Charterial: could not instantiate. No div with id ${options.divId}`);
            return;
        }

        this.createCanvases();

    }

    private createCanvases = () => {
        this.canvasElements = {};

        let graphsCanvas = document.createElement("canvas");
        graphsCanvas.id = 'graphsCanvas';
        graphsCanvas.className = 'main-canvas';
        graphsCanvas.dataset.paperResize = 'true';

        // <canvas className="main-canvas" key="mainCanvas" id={this.mainCanvasId}
        // data-paper-resize="true"></canvas>


        this.wrapperDiv.appendChild(graphsCanvas)
    };
}

export {Charterial};
