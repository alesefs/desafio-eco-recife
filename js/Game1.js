Campus.Game1 = function(game) {
	map1 = null;
	layer1 = null;
	player = null;
	porta = null;
	elevador = null;
	speedY = 0.5;
	colisao = false;
	jumpTime  = 0;
	Keys = Phaser.Keyboard;
	trashgroup = null;
	tin = null;
	lentidao = false;
	colletable = 0;
	text = null;
	style = null;
	
	groupEnemies = null;
	enemy = null;
	
	barraca = null;
	tirolixo = null;
	tirolixo_nascer = 0;
	tirolixo_demora = 100;
	
	sacolixo = null;
	sacolixo_nascer = 0;
	sacolixo_demora = 250;
	
	conscienty = false;
	conscienty_bar = false;
	
	hurt = 10;
	
};
Campus.Game1.prototype = {
	create: function() {
		
		//setup
		this.game.world.setBounds(0, 0, 3200, 800);
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		//background
		this.game.stage.backgroundColor = '#00002d';
		
		//mapa1
		map1 = this.game.add.tilemap('maptag_1');
		map1.addTilesetImage('base32', 'tile1');
		map1.setCollisionByExclusion([1, 9]);
		map1.setTileIndexCallback([6, 7], this.slow, this);
		layer1 = map1.createLayer(0);
		layer1.resizeWorld();
		this.game.physics.enable(layer1);
		layer1.enableBody = true; 
		
		//porta
		porta = this.game.add.sprite(3136, 680, 'porta');
		this.game.physics.enable(porta);
		porta.enableBody = true;
		porta.body.gravity.y = 1000;
		porta.anchor.setTo(0.5,0.5);
		
		//elevador
		elevador = this.game.add.sprite(2000, 400, 'elevador');
		this.game.physics.enable(elevador);
		elevador.enableBody = true;
		elevador.body.immovable = true;
		elevador.body.checkCollision.up = true;
		elevador.body.checkCollision.down = false;
		elevador.body.checkCollision.left = false;
		elevador.body.checkCollision.right = false;
		elevador.anchor.setTo(0.5,0.5);
		
		//tin group
		trashgroup = this.game.add.group();
		trashgroup.enableBody = true;
		this.game.physics.enable(trashgroup);
		tin = trashgroup.create(80, 400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(300, 400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(500, 400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(650, 400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(800, 400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(1000, 400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(1200, 400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(1300, 400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(1700, 400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(1900, 400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(2100, 400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200; tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(2230, 200, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(2375, 200, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(2450, 200, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(2650,400, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		tin = trashgroup.create(2850, 200, 'refri_al');tin.body.immovable = true;tin.body.gravity.y = 200;tin.anchor.setTo(0.5,0.5);tin.scale.set(0.5, 0.5);
		
		
		//enemies group
		groupEnemies = this.game.add.group();
		groupEnemies.enableBody = true;
		this.game.physics.enable(groupEnemies);
		enemy = groupEnemies.create(500, 380, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		enemy = groupEnemies.create(800, 380, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		enemy = groupEnemies.create(800, 580, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		enemy = groupEnemies.create(2000,350, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		enemy = groupEnemies.create(2600,620, 'enemy');enemy.body.gravity.y = 200;enemy.anchor.setTo(0.5,1);enemy.animations.add('spin', [1, 2, 3, 4], 10, true);enemy.animations.play('spin', 10, true);enemy.body.velocity.x = 50;
		
		//saco_de lixo
		sacolixo = this.game.add.group();
		sacolixo.enableBody = true;
		this.game.physics.enable(sacolixo);
		
		
		//tiro de lixo
		tirolixo = this.game.add.group();
		tirolixo.enableBody = true;
		this.game.physics.enable(tirolixo);
		
		
		//barraca
		barraca = this.game.add.sprite(1488,512, 'barraca');
		this.game.physics.enable(barraca);
		barraca.enableBody = true;
	    barraca.anchor.setTo(0.5,0.5);
		
		
		//player
		player = this.game.add.sprite(80,580, 'player');
		this.game.physics.enable(player);
		player.enableBody = true;
	    player.body.gravity.y = 400;
	    player.anchor.setTo(0.5,0.5);
	    player.animations.add('idle', [0], 0, true);
	    player.animations.add('die', [0, 5], 10, true);
	    player.animations.add('walk', [1, 2, 3, 4], 10, true);
	    player.animations.add('jump', [4, 5, 4], 10, true);
	    player.animations.play('idle', 0, false);
	    this.game.camera.follow(player);
		
		cursors = this.game.input.keyboard.createCursorKeys();
	
		style = { font: "25px Arial", fill: "#ff0044", align: "left" };
		text = this.game.add.text(100, 50, "Lixo Coletado: 0 | hurt: 10", style);
		text.fixedToCamera = true;
		
	},

	update: function(){
		
		this.game.physics.arcade.collide(player, layer1);
		this.game.physics.arcade.collide(groupEnemies, layer1); 
		this.game.physics.arcade.collide(porta, layer1); 
		this.game.physics.arcade.collide(trashgroup, layer1); 
		this.game.physics.arcade.collide(player, elevador, this.collideble, null, this); 
		this.game.physics.arcade.overlap(player, trashgroup, this.trashable, null, this);
		this.game.physics.arcade.overlap(player, sacolixo, this.reciclable, null, this);
		this.game.physics.arcade.overlap(player, groupEnemies, this.conscientize, null, this);
		this.game.physics.arcade.overlap(player, barraca, this.conscientize2, null, this);
		this.game.physics.arcade.overlap(player, tirolixo, this.hurter, null, this);
		
		
		groupEnemies.forEach(function(enemy){
		//ida -> dir, volta -> esq
		if(map1.getTile(layer1.getTileX(enemy.x+32), layer1.getTileY(enemy.y +16)).index != 3  && 
		   map1.getTile(layer1.getTileX(enemy.x-32), layer1.getTileY(enemy.y+16)).index == 3 || 
		   map1.getTile(layer1.getTileX(enemy.x+32), layer1.getTileY(enemy.y +16)).index != 4  && 
		   map1.getTile(layer1.getTileX(enemy.x-32), layer1.getTileY(enemy.y+16)).index == 4)
		{
			enemy.body.velocity.x  = -50;
			enemy.scale.setTo(-1, 1);
		}
		//ida -> esq, volta -> dir
		else if(map1.getTile(layer1.getTileX(enemy.x+32), layer1.getTileY(enemy.y +16)).index == 3  && 
		   map1.getTile(layer1.getTileX(enemy.x-32), layer1.getTileY(enemy.y+16)).index != 3 || 
		   map1.getTile(layer1.getTileX(enemy.x+32), layer1.getTileY(enemy.y +16)).index == 4  && 
		   map1.getTile(layer1.getTileX(enemy.x-32), layer1.getTileY(enemy.y+16)).index != 4)
		{
			enemy.body.velocity.x  = 50;
			enemy.scale.setTo(1, 1);
		}
		});
		
		player.body.velocity.x = 0;
		
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
				layer1.destroy();
				colletable = 0;
				hurt = 10;
				trashgroup.destroy();			
				groupEnemies.destroy();
				tirolixo.destroy();
				conscienty = false;
				conscienty_bar = false;
				colisao = false;
				lentidao = false;
			}
			text.text = "Lixo Coletados:  " + colletable + " | hurt: " + hurt;
		}
		
		//elevador
		elevador.body.velocity.y  += speedY
		if (elevador.body.y >= 500){
			elevador.body.velocity.y  -= 1;
		} 
		if (elevador.body.y <= 375){
			elevador.body.velocity.y  += 1;
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
		if(conscienty_bar == false){
			tirolixo_nascer += 1;
		} else {
			tirolixo_nascer = 0;
			barraca.tint = 0x1e7c03;
		}
		if(tirolixo_nascer > tirolixo_demora){
			this.tirolixo_nasceu();
			tirolixo_nascer = 0;
		}
		
		
		//player moves
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
				colisao = false;
			}
		} else if (player.body.velocity.x == 0){
			player.animations.play('idle', 0, false);
		}

		//next stage
		if(colletable >= 20 && groupEnemies.countLiving() == 0){
			
			map1.replace(8, 1);
			map1.setTileIndexCallback(1, this.passer, this);
			
			if(player.x > porta.x  && player.y > porta.y-16 || player.x > 3120 && player.y > 500){
				this.game.state.start('Game2');
				player.destroy();
				porta.destroy();
				elevador.destroy();
				layer1.destroy();
				colletable = 0;
				hurt = 10;
				trashgroup.destroy();			
				groupEnemies.destroy();
				tirolixo.destroy();
				conscienty = false;
				conscienty_bar = false;
				colisao = false;
				lentidao = false;

			}
		}
	} ,
	
	passer: function(p, t){
		layer1.dirty = true;
		return false;
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
			layer1.destroy();
			colletable = 0;
			hurt = 10;
			trashgroup.destroy();			
			groupEnemies.destroy();
			tirolixo.destroy();
			conscienty = false;
			conscienty_bar = false;
			colisao = false;
			lentidao = false;
		}
		text.text = "Lixo Coletados:  " + colletable + " | hurt: " + hurt;
	},
	
	collideble: function(){
		colisao = true;
	},
	
	slow: function(){
		lentidao = true;
		colisao = true;
		player.body.velocity.y = -15;
	},
	
	trashable: function(p, t){
		t.kill();
		colletable += 1;
		if(colletable == 1){
			text.text = "Lixo Coletado:  " + colletable + " | hurt: " + hurt;
		} else if (colletable > 1){
			text.text = "Lixos Coletados:  " + colletable + " | hurt: " + hurt;
		}
	},
	
	
	conscientize: function(p, e){
			e.tint = 0x1e7c03;
			e.kill();
			groupEnemies.forEachAlive(function(enemy){
				enemy.conscienty = false;
			});
	},
	
	
	conscientize2: function(p, b){
			conscienty_bar = true;
	},
	
	reciclable: function(p, l){
		l.kill();
		colletable += 1;
		if(colletable == 1){
			text.text = "Lixo Coletado:  " + colletable;
		} else if (colletable > 1){
			text.text = "Lixos Coletados:  " + colletable;
		}
	},
	
	
	lixo_nasceu: function(){
		groupEnemies.forEachAlive(function(enemy){
			if(conscienty == false){
				var lixo = sacolixo.create(enemy.x, enemy.y - 15, 'saco');
			}
		});
	},
	

	tirolixo_nasceu: function(){
		if(conscienty_bar == false){
			var tiro = tirolixo.create(barraca.x, barraca.y, 'saco');
			tiro.body.velocity.x = -150;
		}
		tirolixo.forEachAlive(function(tiro){
			if(tiro.x <  barraca.x - 445){
				tiro.kill();
			}
		});
	},
	
	
	 render: function() {
    	/* this.game.debug.text(' AD: ' + map1.getTile(layer1.getTileX(enemyA.x+32), layer1.getTileY(enemyA.y+16)).index, 50, 20, 'rgb(255,0,255)');
    	this.game.debug.text(' BD: ' + map1.getTile(layer1.getTileX(enemyB.x+32), layer1.getTileY(enemyB.y+16)).index, 50, 120, 'rgb(255,0,255)');
    	this.game.debug.text(' AE: ' + map1.getTile(layer1.getTileX(enemyA.x-32), layer1.getTileY(enemyA.y+16)).index, 50, 40, 'rgb(123,123,255)');
    	this.game.debug.text(' BE: ' + map1.getTile(layer1.getTileX(enemyB.x-32), layer1.getTileY(enemyB.y+16)).index, 50, 140, 'rgb(123,123,255)'); */
   	}
	
};