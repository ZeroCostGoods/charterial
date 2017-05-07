// Our constructor options...
let options = {
    divId: 'demo1',     // specifies the ID of the div into which to place Charterial
    graphId: 'demo1'    // the name of the graph we want to create.  Should be globally unique
};

// instantiate Charterial
let chtl = new Charterial(options);

let dataSeria = [];

let startingTimestamp = new Date().getTime() - 60000;

// create our sample data
for (let i = 0; i < 10; i++) {
    let value = Math.random() * 500;
    let timestamp = startingTimestamp;
    let multiplier = 0;

    let data = [];

    for (let j = 0; j < 60; j++) {
        value += Math.random() * 100 * Math.sin(multiplier);
        data.push([timestamp, value]);

        timestamp += 1000;
        multiplier += Math.PI /15;
    }

    dataSeria.push({
        id: Math.random().toString(36).slice(2, 8),
        tags: {},
        data,
    })
}

let dataGroup = {
    id: Math.random().toString(36).slice(2, 8),
    dataSeria,
};

let chartData = {
    [dataGroup.id]: dataGroup
};

console.log(JSON.stringify(chartData, null, 4));

