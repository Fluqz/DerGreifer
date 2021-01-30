

import './node_modules/phaser/dist/phaser-arcade-physics.js'
import { Player } from './player.js'



export class Greifer {

    static scene
    config
    game
    player

    constructor() {

        Greifer.scene = new Phaser.Scene('game')

        this.config = {

            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: Greifer.scene
        }

        this.game = new Phaser.Game(this.config)

        Greifer.scene.init = this.init
        Greifer.scene.preload = this.preload
        Greifer.scene.create = this.create
        Greifer.scene.update = this.update
        Greifer.scene.end = this.end
    }

    init() {

    }
    preload() {

        this.load.image('handclosed', 'assets/hand-closed.png');
        this.load.image('handopen', 'assets/hand-open.png');
    }

    create() {
        this.player = new Player()
    }

    update() {

        if (this.input.activePointer.isDown) {

            this.player.close()
        }
        else {

            this.player.open()
        }

        this.player.move(this.input.activePointer.x, this.input.activePointer.y)
    }

    end() {
        
    }
}


let greifer = new Greifer()