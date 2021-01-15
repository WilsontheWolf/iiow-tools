const Item = require('../classes/Item');
const parseProperty = require('./parseProperty');

module.exports = (item) => {
    let [id, xp, xpTotal, xpNext, tier, damaged, ...properties] = item.replace(/^(\|)+|(\|)+$/g, '').split('|');
    if (id.startsWith('¶')) id = id.substring(1);
    else if (id.startsWith('§')) id = parseInt(id.substring(1));
    if (!id || typeof id === 'number' && isNaN(id)) throw new Error('Invalid or malformed item.');
    xp = parseFloat(xp);
    if (isNaN(xp)) throw new Error('Invalid or malformed item.');
    xpTotal = parseFloat(xpTotal);
    if (isNaN(xpTotal)) throw new Error('Invalid or malformed item.');
    xpNext = parseFloat(xpNext);
    if (isNaN(xpNext)) throw new Error('Invalid or malformed item.');
    tier = parseFloat(tier);
    if (isNaN(tier)) throw new Error('Invalid or malformed item.');
    if (damaged === '0') damaged = false;
    else if (damaged === '1') damaged = true;
    else throw new Error('Invalid or malformed item.');
    properties = properties.map(parseProperty);
    return new Item(id, properties, xp, xpTotal, xpNext, tier, damaged);
};