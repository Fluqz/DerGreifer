

import { Item } from './item.js'
import './node_modules/phaser/dist/phaser.js'
import { Player } from './player.js'



export class Greifer {

    static scene
    config
    static game
    player

    constructor() {

        Greifer.scene = new Phaser.Scene('game')

        this.config = {

            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            physics: {
                default: 'matter',
                matter: {
                    debug: true,
                    enableSleeping: true
                }
            },
            scene: Greifer.scene
        }

        Greifer.game = new Phaser.Game(this.config)

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
        this.load.image('test', 'assets/kackhaufen.png');

        this.load.image('test', 'assets/kackhaufen.png');

        
        this.load.json('player-shapes', 'assets/hitboxes/player_polygon.json');
    }

    create() {

        // this.matter.world.setBounds(0, 0, window.innerWidth, 100, false)
        this.matter.world.setBounds(0, 0, window.innerWidth, window.innerHeight, 1, true, true, true, true);

        this.player = new Player()


        for (var i = 0; i < 3; i++) {

            new Item('test', 'kacka', 1)
        }

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