const Item = require('./Item')
/**
 * Represents an item in your inventory. 
 * @extends Item
 */
class InventoryItem extends Item {
	/**
 	* Represents an item in your inventory. Identical to Item except it has a quantity. 
	* @param {number|string} id - Required. The item's ID. String values will be taken as the name and number values are taken as the ID to be parsed.
	* @param {number} quantity - The amount of the item you have.
	* @param {number} [xp] - The amount of xp in the item's current level.
	* @param {number} [xpTotal] - The total amount of xp the item has collected.
	* @param {number} [xpNext] - The amount of xp needed for the next tier.
	* @param {number} [tier] - The current tier of the item.
	* @param {boolean} [damaged] - Whether or not the item is damaged.
	* @constructor
 	*/
	constructor(id, quantity = 1, xp = 0, xpTotal = 0, xpNext = 10, tier = 0, damaged = false) {
		super(id, xp, xpTotal, xpNext, tier, damaged)
		this.quantity = quantity
	}
	get export() {
		return `${super.export} ${this.quantity}`
	}
}

module.exports = InventoryItem