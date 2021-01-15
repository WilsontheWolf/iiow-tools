const Property = require('../classes/Property');
const parse = (value) => {
    if (!isNaN(value)) return Number(value);
    let array = value.match(/^¬(\S*)ǁ$/);
    if (array) return array[1].split('ǁ').map(parse);
    return value;
};

module.exports = (prop) => {
    let match = prop.match(/^(¤+|º+|°|·)(\S+):(\S+)$/);
    if (!match) throw new Error('Invalid or malformed property.');
    let [, type, id, value] = match;
    let layer = 0;
    if (type === '·' || type.startsWith('¤')) id = parseInt(id);
    if (id === undefined || typeof id === 'number' && isNaN(id)) throw new Error('Invalid or malformed property.');
    value = parse(value);
    if (type.startsWith('¤') || type.startsWith('º')) layer = type.length;
    if (value === undefined) throw new Error('Invalid or malformed property.');
    return new Property(id, value, layer);
};