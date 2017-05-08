/**
 * Holds the graph data for a single independent graph or chartline.
 * For instance, a stacked area chart would have an array of these.
 */
export interface CtlDataSerium {
    id: string;
    tags: { [id: string]: string | number };
    data: Array<Array<number>>;
}

/**
 * A logical group of chart/graph data.  For instance, if graphing multiple different data sources, each data source
 * would have a single instance of a data group.
 */
export interface CtlDataGroup {
    id: string;
    dataSeria: Array<CtlDataSerium>;
}

/**
 * Holds all the chart data to be graphed
 */
export interface CtlChartData {
    [id:string]: CtlDataGroup
}

/**
 * The initial config use to instantiate Charterial
 */
export interface CtlConfig {
    chartId: string;
    divId: string;
    chartData?: CtlChartData
}
