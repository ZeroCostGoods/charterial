/**
 * Holds the graph data for a single independent graph or chart
 */
export interface ICharterialChartData {
    id: string;
    tags: { [id:string]:string|number };
    data: Array<Array<number>>;
}

/**
 * A logical group of chart/graph data.  For instance, a stacked area chart would have an array of these
 */
export interface ICharterialDataGroup {
    id: string;
    chartData: Array<ICharterialChartData>;
}

export interface ICharterialConfig {
    graphId: string;
    divId: string;
    chartData?: {
        [id: string]: ICharterialDataGroup;
    };
}
