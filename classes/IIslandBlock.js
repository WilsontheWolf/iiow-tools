/** Represents a the block, attachment and keybind(s) in a slot on an IIsland. */
module.exports = class IIslandBlock {
    /**
     * Represents a the block, attachment and keybind(s) in a slot on an IIsland.
     * @param {Item} [block] - The block of the IIslandBlock.
     * @param {Item} [attachment] - The attachment of the IIslandBlock.
     * @param {String} [keybind] - The keybind of the IIslandBlock.
     */
    constructor(block, attachment, keybind) {
        this.block = block || null;
        this.attachment = attachment || null;
        this.keybind = keybind || null;
    }

    /**
    * Export the IIslandBlock to a string.
    * @returns {string} The IIslandBlock stringified as IIOW likes it.
    */
    get export() {
        return `${this.block ? this.block.export : '_'} ${this.attachment ? this.attachment.export : '_'} ${this.keybind || '_'}`;
    }

    toString() {
        return this.export;
    }
};