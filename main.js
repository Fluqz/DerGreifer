

import './node_modules/phaser/dist/phaser-arcade-physics.js'
import { Player } from './player.js'



export class Greifer {

    scene
    config
    game
    player 

    constructor() {

        this.scene = new Phaser.Scene('game')

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
            scene: this.scene
        }

        this.game = new Phaser.Game(this.config)

        this.scene.init = this.init
        this.scene.preload = this.preload
        this.scene.create = this.create
        this.scene.update = this.update
        this.scene.end = this.end

        console.log(this.scene)
    }

    init() {

    }
    preload() {

        this.load.image('handclosed', 'assets/hand-closed.png');
        this.load.image('handopen', 'assets/hand-open.png');
    }

    create() {
        this.player = new Player(this)
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