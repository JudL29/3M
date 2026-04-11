var agent = {};

function makeAgent(agent_id){
    if (!(agent_id in agent)){
        agent[agent_id] = {
            High: {Count: 0, Events:[]},
            Medium: {Count: 0, Events:[]},
            Low: {Count: 0, Events:[]}
        }
    }
}

function parseAgent(chat_json){
    const json = chat_json.parse;
    const agent_id = json.agent_id;
    if (!(agent_id in agent)) {
        makeAgent(agent_id);
    }

    const eventSeverity = json.severity;
    let eventLevel = {};
    if (eventSeverity == "High") {
        eventLevel = agent[agent_id][High];
    }
    if (eventSeverity == "Medium") {
        eventLevel = agent[agent_id][Medium];
    }
    if (eventSeverity == "Low") {
        eventLevel = agent[agent_id][Low];
    }
    let count = eventLevel[Count]++;
    eventLevel[Events].append(json);
}

function parseJson(){
    return;
}

function getAgent(agent_id){
    if (agent_id in agent) {
        return agent[agent_id];
    }
    return null;
}