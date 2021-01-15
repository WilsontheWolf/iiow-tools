const Item = require('./Item');
/**
 * Represents an item in your inventory. 
 * @extends Item
 */
module.exports = class InventoryItem extends Item {
    /**
 	* Represents an item in your inventory. Identical to Item except it has a quantity. 
	* @param {number|string} id - Required. The item's ID. String values will be taken as the name and number values are taken as the ID to be parsed.
	* @param {number} quantity - The amount of the item you have.
	* @param {Property[]} [properties] - The properties of the save
	* @param {number} [xp] - The amount of xp in the item's current level.
	* @param {number} [xpTotal] - The total amount of xp the item has collected.
	* @param {number} [xpNext] - The amount of xp needed for the next tier.
	* @param {number} [tier] - The current tier of the item.
	* @param {boolean} [damaged] - Whether or not the item is damaged.
	* @constructor
 	*/
    constructor(id, quantity = 1, properties = [], xp = 0, xpTotal = 0, xpNext = 10, tier = 0, damaged = false) {
        super(id, properties, xp, xpTotal, xpNext, tier, damaged);
        this.quantity = quantity;
    }
    /**
 * Exports the item as a string, with the quantity.
 * @returns {string} The item stringified as IIOW likes it.
 */
    get export() {
        return `${super.export} ${this.quantity}`;
    }

    toString() {
        return this.export;
    }
};