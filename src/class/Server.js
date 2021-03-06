/**
 * Represent a server object
 */

class Server {
    /**
     * Create the server
     * @param {Object} serverData - The serverData of Northwood Studio
     */
    constructor(serverData) {
        this.serverId = serverData.serverId;
        this.accountId = serverData.accountId;
        this.ip = serverData.ip;
        this.port = serverData.port;
        this.players = serverData.players;
        this.distance = serverData.distance;
        this.info = Buffer.from(serverData.info, 'base64').toString().replace(/<size=1>.*?<\/size>/g, '').replace( /<.*?>/g , '');
        this.pastebin = serverData.pastebin;
        this.version = serverData.version;
        this.privateBeta = serverData.privateBeta;
        this.friendlyFire = serverData.friendlyFire;
        this.modded = serverData.modded;
        this.whitelist = serverData.whitelist;
        this.isoCode = serverData.isoCode;
        this.continentCode = serverData.continentCode;
        this.latitude = serverData.latitude;
        this.longitude = serverData.longitude;
        this.official = serverData.official;
        this.officialCode = serverData.officialCode;
        this.displaySection = serverData.displaySection;
    }

    /**
     * Get the pastebin link of the server
     * @return {string} - Pastebin URL
     */

    getPastebinLink() {
        return `https://pastebin.net/${this.pastebin}`
    }

    /**
     * Get the player number of the server
     * @return {Number} - The player numbers
     */

    getPlayerNumber() {
        return Number.parseInt(this.players.split("/")[0])
    }
}

module.exports = Server
