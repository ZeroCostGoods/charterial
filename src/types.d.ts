export interface ICharterialGraphData {
    id: string;
    graphType: string;
    data: Array<number>;
}
export interface ICharterialConfig {
    graphId: string;
    divId: string;
    graphData: {
        [id: string]: ICharterialGraphData;
    };
}
