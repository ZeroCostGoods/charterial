/**
 * Holds the graph data for a single independent graph or chartline.
 * For instance, a stacked area chart would have an array of these.
 */
export interface ChtlDataSerium {
    id: string;
    tags: { [id: string]: string | number };
    data: Array<Array<number>>;
}

/**
 * A logical group of chart/graph data.  For instance, if graphing multiple different data sources, each data source
 * would have a single instance of a data group.
 */
export interface ChtlDataGroup {
    id: string;
    dataSeria: Array<ChtlDataSerium>;
}

/**
 * Holds all the chart data to be graphed
 */
export interface ChtlChartData {
    [id:string]: ChtlDataGroup
}

/**
 * The initial config use to instantiate Charterial
 */
export interface ICharterialConfig {
    graphId: string;
    divId: string;
    chartData?: ChtlChartData
}
