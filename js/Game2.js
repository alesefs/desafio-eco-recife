Campus.Game2 = function(game) {
	map2 = null;
	layer2 = null;
	player = null;
	porta = null;
	//floor = null;
	elevador = null;
	speedX = 0.5;
	colisao = false;
	jumpTime  = 0;
	Keys = Phaser.Keyboard;
	trashgroup = null;
	plastic = null;
	lentidao = false;
	colletable = 0;
	text = null;
	style = null;
	
	groupEnemies = null;
	enemy = null;
	
	sacolixo = null;
	sacolixo_nascer = 0;
	sacolixo_demora = 175;
	
	conscienty = false;
	
	hurt = 10;
	
	groupEnemiesWindow = null;
	enemyWindow = null;
	
	
	tiroixo = null;
	tirolixo_nascer = 0;
	tirolixo_demora = 250;
	
};
Campus.Game2.prototype = {
	create: function() {
		
		//setup
		this.game.world.setBounds(0, 0, 3200, 800);
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		//this.game.physics.arcade.gravity.y = 300;

	
		//background
		this.game.stage.backgroundColor = '#00002d';
		
		//mapa2
		map2 = this.game.add.tilemap('maptag_2');
		map2.addTilesetImage('base32', 'tile1');
		map2.setCollisionByExclusion([1, 9]);
		map2.setTileIndexCallback([6, 7], this.slow, this);
		map2.setTileIndexCallback(8, this.faller, this);
	    layer2 = map2.createLayer(0);
		layer2.resizeWorld();
		this.game.physics.enable(layer2);
		layer2.enableBody = true;
		
		//porta
		porta = this.game.add.sprite(3100, 600, 'porta');
		this.game.physics.enable(porta);
		porta.enableBody = true;
		porta.body.gravity.y = 1000;
		porta.anchor.setTo(0.5,0.5); 
		
		//elevador
		elevador = this.game.add.sprite(1500, 700, 'elevador');
		this.game.physics.enable(elevador);
		elevador.enableBody = true;
		elevador.body.immovable = true;
		elevador.body.checkCollision.up = true;
		elevador.body.checkCollision.down = false;
		elevador.body.checkCollision.left = false;
		elevador.body.checkCollision.right = false;
		elevador.anchor.setTo(0.5,0.5);
		
		//plastic group
		trashgroup = this.game.add.group();
		trashgroup.enableBody = true;
		this.game.physics.enable(trashgroup);
		plastic = trashgroup.create(140, 400, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(290, 400, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(380, 400, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(520, 400, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(675, 400, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(675, 550, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(980, 550, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(1220, 400, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(1820, 350, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(1820, 600, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(1940, 350, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(2060, 350, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(2200, 350, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(2500, 350, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(2620, 500, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(2700, 350, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(2700, 500, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(2820, 200, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(2850, 350, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		plastic = trashgroup.create(3100, 350, 'pet_p');plastic.body.immovable = true;plastic.body.gravity.y = 200;plastic.scale.set(0.5, 0.75);
		
		
		
		
		//enemies group
		groupEnemies = this.game.add.group();
		groupEnemies.enableBody = true;
		this.game.physics.enable(groupEnemies);
		enemy = groupEnemies.create(500, 380, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		enemy = groupEnemies.create(1000, 620, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		enemy = groupEnemies.create(2000, 320, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		enemy = groupEnemies.create(2200, 320, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		enemy = groupEnemies.create(2400, 320, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		enemy = groupEnemies.create(2450, 320, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		enemy = groupEnemies.create(3100, 350, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		
		//saco_de lixo
		sacolixo = this.game.add.group();
		sacolixo.enableBody = true;
		this.game.physics.enable(sacolixo);
		
		
		//enemyWindow group
		groupEnemiesWindow = this.game.add.group();
		groupEnemiesWindow.enableBody = true;
		this.game.physics.enable(groupEnemiesWindow);
		enemyWindow = groupEnemiesWindow.create(480, 250, 'enemy');enemyWindow.anchor.setTo(0.5,0.5);enemyWindow.animations.add('spin', [6], 10, true);enemyWindow.animations.play('spin', 10, true);
		enemyWindow = groupEnemiesWindow.create(1505, 250, 'enemy');enemyWindow.anchor.setTo(0.5,0.5);enemyWindow.animations.add('spin', [6], 10, true);enemyWindow.animations.play('spin', 10, true);
		enemyWindow = groupEnemiesWindow.create(2175, 220, 'enemy');enemyWindow.anchor.setTo(0.5,0.5);enemyWindow.animations.add('spin', [6], 10, true);enemyWindow.animations.play('spin', 10, true);
		enemyWindow = groupEnemiesWindow.create(2785, 190, 'enemy');enemyWindow.anchor.setTo(0.5,0.5);enemyWindow.animations.add('spin', [6], 10, true);enemyWindow.animations.play('spin', 10, true);
		
		
		//saco_de lixo
		tiroixo = this.game.add.group();
		tiroixo.enableBody = true;
		this.game.physics.enable(tiroixo);
		
		
		//player
		player = this.game.add.sprite(80,700, 'player');
		this.game.physics.enable(player);
		player.enableBody = true;
	    player.body.gravity.y = 400;
	    player.anchor.setTo(0.5,0.5);
	    player.animations.add('idle', [0], 0, true);
	    player.animations.add('die', [0, 5], 10, true);
	    player.animations.add('walk', [1, 2, 3, 4], 10, true);
	    player.animations.add('jump', [4, 5, 4], 10, true);
	    player.animations.add('duck', [10], 0, true);
	    player.animations.add('walkduck', [10, 11, 12], 10, true);
	    player.animations.add('catch', [7], 0, true);
	   	player.animations.play('idle', 0, false);
	    this.game.camera.follow(player);
		
		
		//floor
/* 	floor = this.game.add.sprite(2848, 382, 'floor');
		this.game.physics.enable(floor);
		floor.scale.setTo(5, 1);
		floor.enableBody = true;
		floor.body.immovable = true;
		floor.body.checkCollision.up = true;
		floor.body.checkCollision.down = false; */
		
		cursors = this.game.input.keyboard.createCursorKeys();

		style = { font: "25px Arial", fill: "#ff0044", align: "left" };
		text = this.game.add.text(100, 50, "Lixo Coletado: 0 | Hurter: 10", style);
		text.anchor.set(0.5);
		text.fixedToCamera = true;
		
	},

	update: function(){
		
		this.game.physics.arcade.collide(player, layer2);
		this.game.physics.arcade.collide(porta, layer2);
		this.game.physics.arcade.collide(trashgroup, layer2); 
		this.game.physics.arcade.collide(groupEnemies, layer2); 
		this.game.physics.arcade.collide(player, elevador, this.collideble, null, this); 
		this.game.physics.arcade.overlap(player, trashgroup, this.trashable, null, this);
		//this.game.physics.arcade.collide(player, floor, this.collideble, null, this);
		this.game.physics.arcade.overlap(player, groupEnemies, this.conscientize, null, this);
		this.game.physics.arcade.overlap(player, sacolixo, this.reciclable, null, this);
		this.game.physics.arcade.overlap(player, tiroixo, this.hurter, null, this);
		
		
		//die action
		if(player.body.y > 790){
			player.animations.play('die', 15, false);
		} 
		if(player.body.y > 800){
			player.body.x = 80;
			player.body.y = 500;
			hurt -= 3;
			if(hurt <= 0){
				hurt = 0;
				this.game.state.start('GameOver');
				player.destroy();
				porta.destroy();
				elevador.destroy();
				layer2.destroy();
				colletable = 0;
				hurt =10;
				groupEnemies.destroy();
				groupEnemiesWindow.destroy();
				trashgroup.destroy();	
				tiroixo.destroy();
				conscienty = false;
				colisao = false;
				lentidao = false;
			}
			text.text = "Lixo Coletados:  " + colletable + " | hurt: " + hurt;
		}
		
		
		groupEnemies.forEach(function(enemy){
		//ida -> dir, volta -> esq
		if(map2.getTile(layer2.getTileX(enemy.x+32), layer2.getTileY(enemy.y +16)).index != 3  && 
		   map2.getTile(layer2.getTileX(enemy.x-32), layer2.getTileY(enemy.y+16)).index == 3 || 
		   map2.getTile(layer2.getTileX(enemy.x+32), layer2.getTileY(enemy.y +16)).index != 4  && 
		   map2.getTile(layer2.getTileX(enemy.x-32), layer2.getTileY(enemy.y+16)).index == 4)
		{
			enemy.body.velocity.x  = -50;
			enemy.scale.setTo(-1, 1);
		}
		//ida -> esq, volta -> dir
		else if(map2.getTile(layer2.getTileX(enemy.x+32), layer2.getTileY(enemy.y +16)).index == 3  && 
		   map2.getTile(layer2.getTileX(enemy.x-32), layer2.getTileY(enemy.y+16)).index != 3 || 
		   map2.getTile(layer2.getTileX(enemy.x+32), layer2.getTileY(enemy.y +16)).index == 4  && 
		   map2.getTile(layer2.getTileX(enemy.x-32), layer2.getTileY(enemy.y+16)).index != 4)
		{
			enemy.body.velocity.x  = 50;
			enemy.scale.setTo(1, 1);
		}
		});
		
		
		player.body.velocity.x = 0;
		
		if(player.body.y > 790){
			player.animations.play('die', 15, false);
		}
		if(player.body.y > 800){
			player.body.x = 80;
			player.body.y = 680;
		}
		
		elevador.body.velocity.x  += speedX
		if (elevador.body.x > 1550){
			elevador.body.velocity.x  -= 1;
		} else if (elevador.body.x < 1100){
			elevador.body.velocity.x  += 1;
		}
		
		
		//saco lixo
		if(conscienty == false){
			sacolixo_nascer += 1;
		} else {
			sacolixo_nascer = 0;
		}
		if(sacolixo_nascer > sacolixo_demora){
			this.lixo_nasceu();
			sacolixo_nascer = 0;
		}
		
		//tiro lixo
		tirolixo_nascer += 1;
		if(tirolixo_nascer > tirolixo_demora){
			this.tiro_nasceu();
			tirolixo_nascer = 0;
		}
		
		
		if (this.game.input.keyboard.justPressed(Keys.SPACEBAR)&& player.body.onFloor() && this.game.time.now > jumpTime ||
		this.game.input.keyboard.justPressed(Keys.SPACEBAR)&& colisao == true && this.game.time.now > jumpTime){
			player.body.velocity.y = -250;
			jumpTimer = this.game.time.now + 650;
			colisao = false;
			player.animations.play('jump', 0, false);
		} else if (this.game.input.keyboard.isDown(Keys.LEFT)){
			if(lentidao == false){
				player.scale.setTo(-1, 1);
				player.body.velocity.x = -150;
				player.animations.play('walk', 15, false);
			} else {
				player.scale.setTo(-1, 1);
				player.body.velocity.x = -50;
				player.animations.play('walk', 15, false);
				lentidao = false;
				colisao = false;
			}		
		} else if (this.game.input.keyboard.isDown(Keys.RIGHT)){
			if(lentidao == false){
				player.scale.setTo(1, 1);
				player.body.velocity.x = 150;
				player.animations.play('walk', 15, false);			
			} else{
				player.scale.setTo(1, 1);
				player.body.velocity.x = 50;
				player.animations.play('walk', 15, false);
				lentidao = false;
			}
		} else if (player.body.velocity.x == 0){
			player.animations.play('idle', 0, false);
		}

		//next stage
		if(colletable >= 20 && groupEnemies.countLiving() == 0){
			if(player.x > porta.x  && player.y > porta.y-16 && colletable >= 10){
				this.game.state.start('GameWin');
				player.destroy();
				porta.destroy();
				elevador.destroy();
				layer2.destroy();
				colletable = 0;
				hurt =10;
				groupEnemies.destroy();
				groupEnemiesWindow.destroy();
				trashgroup.destroy();	
				tiroixo.destroy();
				conscienty = false;
				colisao = false;
				lentidao = false;
			}
		} 
		
	},
	
	collideble: function(){
		colisao = true;
	},

	
	slow: function(){
		lentidao = true;
		player.body.velocity.y = -15;
		colisao = true;
	},
	
	faller: function(p, t){
		layer2.dirty = true;
		return false;
	},
	
	conscientize: function(p, e){
			e.tint = 0x1e7c03;
			e.kill();
			groupEnemies.forEachAlive(function(enemy){
				enemy.conscienty = false;
			});
	},
	
	lixo_nasceu: function(){
		groupEnemies.forEachAlive(function(enemy){
			if(conscienty == false){
				var lixo = sacolixo.create(enemy.x, enemy.y - 15, 'saco');
			}
		});
	},
	
	
	tiro_nasceu: function(){
		groupEnemiesWindow.forEachAlive(function(enemyWindow){
			var lixo = tiroixo.create(enemyWindow.x, enemyWindow.y, 'saco');
			lixo.body.velocity.y = 150;
		});
	},
	
	
	reciclable: function(p, l){
		l.kill();
		colletable += 1;
		if(colletable == 1){
			text.text = "Lixo Coletado:  " + colletable + " | Hurt: " + hurt;
		} else if (colletable > 1){
			text.text = "Lixos Coletados:  " + colletable + " | Hurt: " + hurt;
		}
	},
	
	
	hurter:function(p, b){
		hurt -= 1;
		b.kill();
		if(hurt <= 0){
			hurt = 0;
			this.game.state.start('GameOver');
				player.destroy();
				porta.destroy();
				elevador.destroy();
				layer2.destroy();
				colletable = 0;
				hurt =10;
				groupEnemies.destroy();
				groupEnemiesWindow.destroy();
				trashgroup.destroy();	
				tiroixo.destroy();
				conscienty = false;
				colisao = false;
				lentidao = false;
		}
		text.text = "Lixo Coletados:  " + colletable + " | hurt: " + hurt;
	},
	
	
	trashable: function(p, t){
		t.kill();
		colletable += 1;
		if(colletable == 1){
			text.text = "Lixo Coletado:  " + colletable + " | Hurt: " + hurt;
		} else if (colletable > 1){
			text.text = "Lixos Coletados:  " + colletable + " | Hurt: " + hurt;
		}
	}
	
};