

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
    this.load.image('hand', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
};

scene.create = function() {

    this.player = this.add.image(100, 100, 'hand')
};

scene.update = function() {
    // Is mouse click down?
    if (this.) {
        // move player along the x-axis at a rate this.speed pixels
    this.player.x += this.speed;
    }

    
};


scene.end = function() {

};