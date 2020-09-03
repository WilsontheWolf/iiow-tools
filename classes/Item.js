/**
 * Represents an item in IIOW.
 */
class Item {
	/**
	 * Represents an item in IIOW.
	 * @param {number|string} id - Required. The item's ID. String values will be taken as the name and number values are taken as the ID to be parsed.
	 * @param {number} [xp] - The amount of xp in the item's current level.
	 * @param {number} [xpTotal] - The total amount of xp the item has collected.
	 * @param {number} [xpNext] - The amount of xp needed for the next tier.
	 * @param {number} [tier] - The current tier of the item.
	 * @param {boolean} [damaged] - Whether or not the item is damaged.
	 * @constructor
	 */
	constructor(id, xp = 0, xpTotal = 0, xpNext = 10, tier = 0, damaged = false) {
		this.id = id
		this.xp = xp
		this.xpTotal = xpTotal
		this.xpNext = xpNext
		this.tier = tier
		this.damaged = damaged
	}

	/**
	 * Export the item to a string.
	 * @returns {string} The item stringified as IIOW likes it.
	 */
	get export() {
		return `|${typeof this.id == 'number' ? '§' : "¶"}${this.id}|${this.xp}|${this.xpTotal}|${this.xpNext}|${this.tier}|${this.damaged ? 1 : 0}|`
	}
}

module.exports = Item