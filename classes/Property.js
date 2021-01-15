// note to self the projectile properties have their own ids and i need to know that when loading.
/** Represents a property on an item. */
module.exports = class Property {
    /**
     * Represents a property on an item.
     * @param {number|string} id - Required. The property's ID. String values will be taken as the name and number values are taken as the ID to be parsed. 
     * @param {string|number|(string|number)[]} value - Required. The property's value. Can be a string, number or array of string or numbers.
     * @param {number} [layer] - The layer the property is on. 0 is an item property and numbers higher than that are projectile properties.
     */
    constructor(id, value, layer = 0) {
        this.id = id;
        this.value = value;
        this.layer = layer;
    }

    /**
    * Export the property to a string.
    * @returns {string} The property stringified as IIOW likes it.
    */
    get export() {
        let value = this.value;
        if (Array.isArray(value)) value = `¬${value.join('ǁ')}ǁ`;
        let prefix = typeof this.id == 'number' ? '·' : '°';
        if (this.layer > 0) {
            prefix = typeof this.id == 'number' ? '¤' : 'º';
            prefix = prefix.repeat(this.layer);
        }
        return `${prefix}${this.id}:${value}`;
    }

    toString() {
        return this.export;
    }
};