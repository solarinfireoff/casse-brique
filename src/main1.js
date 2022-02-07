let gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,

    backgroundColor: '#000000',
    parent: 'game',
    fps: {
        target: 30,
        //forceSetTimeOut : True,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0}
        }
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);
