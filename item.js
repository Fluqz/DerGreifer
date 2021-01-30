
import { Greifer } from "./main.js"


export class Item {

    sprite
    type
    points

    constructor(texture, type, points) {

        this.type = type
        this.points = points

        this.sprite = Greifer.scene.add.sprite(100, 100, texture)
        this.sprite.scale = .5
    }


    fall() {


    }
}