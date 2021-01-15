const IIsland = require('../classes/IIsland');
const IIslandBlock = require('../classes/IIslandBlock');
const parseItem = require('./parseItem');
const item = (i) => {
    return i !== '_' ? parseItem(i) : null;
};
const keybind = (k) => {
    return k !== '_' ? k : null;
};

module.exports = (island) => {
    let match = island.match(/^(?:(.+) & )?((?:\d+ ){6})((?:\|\S+\| |\d+ ?|_ |[A-Z]{1,2} ?)+)$/);
    if (!match) throw new Error('Invalid or malformed iisland.');
    const [, playerInfo, properties, structure] = match;
    let [coreX, coreY, islandWidth, islandHeight, islandOffsetX, islandOffsetY] = properties.split(' ');
    let buffer = structure.split(' ');
    let blocks = [...Array(12)].map(() => [...Array(12)].map(() => null));
    let index = [0, 0];
    for (let i = 0; i < buffer.length;) {
        let data = buffer[i];
        if (!isNaN(data)) {
            index[0] += Number(data);
            i++;
        }
        else {
            blocks[index[0]][index[1]] = new IIslandBlock(item(data), item(buffer[i + 1]), keybind(buffer[i + 2]));
            i += 3;
            index[0]++;
        }
        while (index[0] > 11) {
            index[0] -= 12;
            index[1]++;
        }
    }
    return new IIsland(blocks, coreX, coreY, islandWidth, islandHeight, islandOffsetX, islandOffsetY, playerInfo ? playerInfo.split(' ') : []);
};