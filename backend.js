const fs = require("fs");

var agent = {};

function makeAgent(agentId){
    if (!(agentId in agent)){
        agent[agentId] = {
            high: {count: 0, events:[]},
            medium: {count: 0, events:[]},
            low: {count: 0, events:[]}
        }
    }
}

function parseAgent(chatJson){
    const agentId = chatJson.agent_id;
    if (!(agentId in agent)) {
        makeAgent(agentId);
    }

    const eventSeverity = chatJson.severity.toLowerCase();
    let eventLevel = {};
    if (eventSeverity == "high") {
        eventLevel = agent[agentId].high;
    }
    if (eventSeverity == "medium") {
        eventLevel = agent[agentId].medium;
    }
    if (eventSeverity == "low") {
        eventLevel = agent[agentId].low;
    }
    eventLevel["count"]++;
    eventLevel["events"].push(chatJson);
}

function parseJson(fileName){
    const lines = fs.readFileSync(fileName, "utf8").split("\n")

    lines.forEach(line => {
        if (!line.trim()) return;
        const json = JSON.parse(line);
        parseAgent(json);
    });
}

function getAgent(agentId){
    if (agentId in agent) {
        return agent[agentId];
    }
    return null;
}

async function parseData() {
    try {
        parseJson("inhibitor_events.jsonl");
    }
    catch (error) {
        console.error('Error:', error);
    }
}

parseData();

console.log(Object.keys(agent));