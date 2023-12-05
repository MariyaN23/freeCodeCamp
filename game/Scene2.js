class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame")
    }
    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background")
        this.background.setOrigin(0, 0)
        this.ship = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship")
        this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2")
        this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3")

        this.ship.play('ship_anim')
        this.ship2.play('ship2_anim')
        this.ship3.play('ship3_anim')

        this.ship.setInteractive()
        this.ship2.setInteractive()
        this.ship3.setInteractive()

        this.input.on('gameobjectdown', this.destroyShip, this)

        this.add.text(20, 20, "Playing game", {
            font: "25px Arial",
            fill: "yellow",
        })

        this.physics.world.setBoundsCollision();
        this.powerUps = this.physics.add.group();
        const maxObjects = 4;
        for (let i = 0; i <= maxObjects; i++) {
            let powerUp = this.physics.add.sprite(16, 16, "power-up");
            this.powerUps.add(powerUp);
            powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);
            if (Math.random() > 0.5) {
                powerUp.play("red");
            } else {
                powerUp.play("gray");
            }
            powerUp.setVelocity(100, 100);
            powerUp.setCollideWorldBounds(true);
            powerUp.setBounce(1);
        }

        this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, 'player')
        this.player.play('thrust')
        this.cursorKeys = this.input.keyboard.createCursorKeys()
        this.player.setCollideWorldBounds(true)
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }
    moveShip(ship, speed) {
        ship.y += speed
        if (ship.y > config.height) {
            this.resetShipPosition(ship)
        }
    }
    update() {
        this.moveShip(this.ship, 1)
        this.moveShip(this.ship2, 2)
        this.moveShip(this.ship3, 3)
        this.background.tilePositionY -= 0.5
        this.movePlayerManager()

        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.shootBeam()
        }
    }
    resetShipPosition(ship) {
        ship.y = 0
        ship.x = Phaser.Math.Between(0, config.width)
    }
    destroyShip(pointer, gameObject) {
        gameObject.setTexture('explosion')
        gameObject.play('explode')
    }
    movePlayerManager() {
        if (this.cursorKeys.left.isDown) {
            this.player.setVelocityX(-gameSettings.playerSpeed)
        } else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(gameSettings.playerSpeed)
        }
        if (this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-gameSettings.playerSpeed)
        } else if (this.cursorKeys.down.isDown) {
            this.player.setVelocityY(gameSettings.playerSpeed)
        }
    }
    shootBeam() {
        //let beam = this.physics.add.sprite(this.player.x, this.player.y, 'beam')
        let beam = new Beam(this)
    }
}