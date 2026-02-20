class EventEngine {
    constructor() {
        this.worldEvents = [];
        this.personalEvents = {};
    }

    // Method to handle world events
    addWorldEvent(event) {
        this.worldEvents.push(event);
        console.log(`World event added: ${event}`);
    }

    // Method to handle personal events for characters
    addPersonalEvent(characterId, event) {
        if (!this.personalEvents[characterId]) {
            this.personalEvents[characterId] = [];
        }
        this.personalEvents[characterId].push(event);
        console.log(`Personal event added for character ${characterId}: ${event}`);
    }

    // Method to retrieve world events
    getWorldEvents() {
        return this.worldEvents;
    }

    // Method to retrieve personal events for a character
    getPersonalEvents(characterId) {
        return this.personalEvents[characterId] || [];
    }
}

export default EventEngine;
