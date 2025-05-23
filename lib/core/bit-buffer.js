function BitBuffer() {
	this.buffer = []
	this.length = 0
}

BitBuffer.prototype = {

	get: function (index) {
		const bufIndex = Math.floor(index / 8)
		return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
	},

	put: function (num, length) {
		for (let i = 0; i < length; i++) {
			this.putBit(((num >>> (length - i - 1)) & 1) === 1)
		}
	},

	getLengthInBits: function () {
		return this.length
	},

	putBit: function (bit) {
		const bufIndex = Math.floor(this.length / 8)
		if (this.buffer.length <= bufIndex) {
			this.buffer.push(0)
		}

		if (bit) {
			this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
		}

		this.length++
	}
}

module.exports = BitBuffer
