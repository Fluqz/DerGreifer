import { Greifer } from "./main.js"



export class Player {

    sprite

    constructor() {

        this.sprite = Greifer.scene.matter.add.sprite(100, 100, 'handopen', )
        this.sprite.scale = .5
        this.sprite.setRectangle(100, 100)
        this.sprite.setDensity(1)
        this.sprite.setFrictionAir(.05)
    }
 
    
    move(x, y) {

        this.sprite.x = x


        // Nur bis halber Bildschirm
        if (y > window.innerHeight / 2) {
            this.sprite.y = y
        }
        else this.sprite.y = window.innerHeight / 2

    }


    close() {
        this.sprite.setTexture('handclosed')

    }

    open() {
        this.sprite.setTexture('handopen')

    }

}