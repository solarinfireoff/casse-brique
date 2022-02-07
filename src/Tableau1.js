class Tableau1 extends Phaser.Scene{


    preload (){
            this.load.image('carre', 'assets/carre.png');
            this.load.image('carre2', 'assets/carre2.png');
            this.load.image('carre3', 'assets/carre3.png');
            this.load.image('carre4', 'assets/carre3.png');
            this.load.image('cercle', 'assets/cercle.png');
            this.load.image('brique', 'assets/brique/brique.png');
    }
    create(){
            this.hauteur = 800;
            this.largeur = 800;


        //mur du haut
            this.haut = this.physics.add.image(0,0,'carre').setOrigin(0,0);
            this.haut.setDisplaySize(this.largeur,20);
            this.haut.body.setAllowGravity(false);
            this.haut.setImmovable(true);
            this.haut.setVisible(true)
        //mur de droite
            this.right = this.physics.add.image(780,0,'carre2').setOrigin(0,0);
            this.right.setDisplaySize(20,1000);
            this.right.body.setAllowGravity(false);
            this.right.setImmovable(true);





        // mur de gauche
            this.left = this.physics.add.image(0,0,'carre3').setOrigin(0,0);
            this.left.setDisplaySize(20,1000);
            this.left.body.setAllowGravity(false);
            this.left.setImmovable(true);


        //Balle
            this.balle = this.physics.add.image(this.largeur/2, this.hauteur/2,'cercle').setOrigin(0,0);
            this.balle.setDisplaySize(20,20);
            this.balle.body.setBounce(2,2);
            this.balle.setVelocityX(200);
            this.balle.setVelocityY(200);
            this.balle.body.setMaxVelocity(1000,1000);
        //raquette
            this.raquette = this.physics.add.image(300,700,'carre4').setOrigin(0,0);
            this.raquette.setDisplaySize(200,20);
            this.left.body.setAllowGravity(false);
            this.left.setImmovable(true);
        //brique
        for (let pas = 1; pas < 2; pas++) {
            this.brique = this.physics.add.image(100, 200, 'brique').setOrigin(0, 0);






            this.brique.setDisplaySize(60, 30);
            this.left.body.setAllowGravity(false);
            this.left.setImmovable(true);
            break
        }






        this.joueurGauche = new Joueur('Points','joueurGauche');
        this.joueurDroite = new Joueur('Vies','joueurDroite');
        console.log(this.joueurGauche);

        this.initKeyboard()

    }









    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.droite.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.gauche.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.droite.setVelocityY(0);
                    break;
            }
        })
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(-800);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.droite.setVelocityY(-800);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.gauche.setVelocityY(800);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.droite.setVelocityY(800);
                    break;
            }
        })
    }

    update(){



    }
}