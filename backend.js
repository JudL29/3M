const fs = requires("fs");

var agent = {};

function makeAgent(agentId){
    if (!(agentId in agent)){
        agent[agentId] = {
            High: {Count: 0, Events:[]},
            Medium: {Count: 0, Events:[]},
            Low: {Count: 0, Events:[]}
        }
    }
}

function parseAgent(chatJson){
    const agentId = chatJson.agentId;
    if (!(agentId in agent)) {
        makeAgent(agentId);
    }

    const eventSeverity = chatJson.severity;
    let eventLevel = {};
    if (eventSeverity == "High") {
        eventLevel = agent[agentId][High];
    }
    if (eventSeverity == "Medium") {
        eventLevel = agent[agentId][Medium];
    }
    if (eventSeverity == "Low") {
        eventLevel = agent[agentId][Low];
    }
    let count = eventLevel[Count]++;
    eventLevel[Events].append(chatJson);
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