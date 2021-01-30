
import { Greifer } from "./main.js"


export class Item {

    sprite
    type
    points

    constructor(texture, type, points) {

        this.type = type
        this.points = points

        let test = Greifer.scene.matter.add.image(Phaser.Math.Between(0, window.innerWidth), 0, 'test')
        test.scale = .2
        test.setRectangle(100, 100)


    }


    fall() {


    }
}