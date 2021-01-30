import { Greifer } from "./main.js"

export class Player {
	sprite
	hitbox

	shapes

	constructor() {
		this.shapes = Greifer.scene.cache.json.get("player-shapes")

		console.log(this.shapes["hand-open"])

		this.sprite = Greifer.scene.matter.add.sprite(
			50,
			50,
			"handopen",
			"handopen",
			{ shape: this.shapes["hand-open"] }
		)

		// this.sprite.setRectangle(100, 100)
		// this.sprite.setDensity(1)
		// this.sprite.setFrictionAir(.05)
	}

	move(x, y) {
		this.sprite.x = x
		this.sprite.y = y
	}

	close() {
        this.sprite.destroy()
		this.sprite = Greifer.scene.matter.add.sprite(
			50,
			50,
			"handclosed",
			"handclosed",
			{ shape: this.shapes["hand-closed"] }
		)
	}

	open() {
        this.sprite.destroy()
		this.sprite = Greifer.scene.matter.add.sprite(
			50,
			50,
			"handopen",
			"handopen",
			{ shape: this.shapes["hand-open"] }
		)
	}
}
