

import './node_modules/phaser/dist/phaser-arcade-physics.js'



const scene = new Phaser.Scene('game')

const config = {

    type: Phaser.AUTO,
    width: 800,
    height: 600,
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

    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('handopen', 'assets/sprites/phaser3-logo.png');
    this.load.image('handclosed', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
};

scene.create = function() {

    this.player = this.add.image(100, 100, 'handopen')
    this.player = this.add.image(100, 100, 'handclosed')
};

scene.update = function() {
    // Is mouse click down?
        // move player along the x-axis at a rate this.speed pixels


    if (this.input.activePointer.isDown) {

        // this.player = this.add.image(100, 100, 'hand-closed')
        // hand closed
        console.log(this.player.image = '');
    }
    else {

        // this.player = this.add.image(100, 100, 'hand-open')
        // Hand open

    }


    this.player.x = this.input.activePointer.x;
    this.player.y = this.input.activePointer.y;
};


scene.end = function() {

};