import { Greifer } from "./main.js"



export class Player {

    sprite
    hitbox

    constructor() {

        this.sprite = Greifer.scene.matter.add.sprite(100, 100, 'handopen')
        
        this.sprite.scale = .5
        this.sprite.setPolygon('40 0 40 20 100 20 100 80 40 80 40 100 0 50')
    }
 
    
    move(x, y) {

        this.sprite.x = x


        // Nur bis halber Bildschirm
        if (y > window.innerHeight / 2) {
            this.sprite.y = y
        }

    }


    close() {
        this.sprite.setTexture('handclosed')

    }

    open() {
        this.sprite.setTexture('handopen')

    }

}