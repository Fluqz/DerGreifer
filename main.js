

import './node_modules/phaser/dist/phaser-arcade-physics.js'



const scene = new Phaser.Scene('game')

const config = {

    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: scene
}

var game = new Phaser.Game(config)

scene.init = function() {

};

scene.preload = function() {

    this.load.setBaseURL('./');

    this.load.image('handclosed', 'assets/hand-closed.png');
    this.load.image('handopen', 'assets/hand-open.png');
};

scene.create = function() {
    this.player = this.add.sprite(100, 100, 'handopen')
    this.player.scale = .5
};

scene.update = function() {
    // Is mouse click down?
        // move player along the x-axis at a rate this.speed pixels

    if (this.input.activePointer.isDown) {

        // this.player = this.add.image(100, 100, 'hand-closed')
        // hand closed

        this.player.setTexture('handclosed')

    }
    else {
        this.player.setTexture('handopen')

        // this.player = this.add.image(100, 100, 'hand-open')
        // Hand open

    }


    this.player.x = this.input.activePointer.x;
    this.player.y = this.input.activePointer.y;
};


scene.end = function() {

};