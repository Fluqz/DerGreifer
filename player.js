


export class Player {

    scene

    sprite

    constructor(scene) {

        this.scene = scene

        this.sprite = scene.add.sprite(100, 100, 'handopen')
        this.sprite.scale = .5

    }
 
    
    move(x, y) {

        this.sprite.x = x
        this.sprite.y = y
    }


    close() {
        this.sprite.setTexture('handclosed')

    }

    open() {
        this.sprite.setTexture('handopen')

    }

}