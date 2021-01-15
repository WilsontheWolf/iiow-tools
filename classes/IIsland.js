/**
 * Represents an iisland in IIOW.
 */
module.exports = class IIsland {
    /**
     * Represents an iisland in IIOW.
     * @module IIsland
     * @param {IIslandBlock[][]} blocks - Required. The blocks in the iisland.
     * @param {number} [coreX] - The x location of the core.
     * @param {number} [coreY] - The y location of the core.
     * @param {number} [islandWidth] - The width of the island.
     * @param {number} [islandHeight] - The x height of the island.
     * @param {number} [islandOffsetX] - Tbh I don't remember.
     * @param {number} [islandOffsetY] - Tbh I don't remember.
     * @param {Array} [playerInfo] - Info about the player in the realm.
     * 
     * @constructor
     */
    constructor(blocks, coreX = 0, coreY = 0, islandWidth = 0, islandHeight = 0, islandOffsetX = 0, islandOffsetY = 0, playerInfo = []) {
        this.blocks = blocks;
        this.coreX = coreX;
        this.coreY = coreY;
        this.islandWidth = islandWidth;
        this.islandHeight = islandHeight;
        this.islandOffsetX = islandOffsetX;
        this.islandOffsetY = islandOffsetY;
        this.playerInfo = playerInfo;
    }

    /**
     * Export the iisland to a string.
     * @returns {string} The iisland stringified as IIOW likes it.
     */
    get export() {
        let buffer = [];
        let i = [0, 0];
        let nullCount = 0;
        for (; i[1] < 12;) {
            let data = this.blocks[i[0]][i[1]];
            if (!data) {
                nullCount++;
                i[0]++;
            }
            else {
                if (nullCount) {
                    buffer.push(nullCount);
                    nullCount = 0;
                }
                buffer.push(data.export);
                i[0]++;
            }
            while (i[0] > 11) {
                i[0] -= 12;
                i[1]++;
            }
        }
        return `${this.playerInfo.length ? `${this.playerInfo.join(' ')} & ` : ''}${this.coreX} ${this.coreY} ${this.islandWidth} ${this.islandHeight} ${this.islandOffsetX} ${this.islandOffsetY} ${buffer.join(' ')} `;
    }

    toString() {
        return this.export;
    }
};