Campus.Preloader = function(game) {};
Campus.Preloader.prototype = {
	preload: function() {

		this.game.world.setBounds(0, 0, 800, 600);
		//background
		this.game.stage.backgroundColor = '#15162d';

		//loading
		this.preloadBg = this.add.sprite(((this.game.world.width - 300)/2), ((this.game.world.height - 75)/2), 'preloaderBg');
		this.preloadBar = this.add.sprite(((this.game.world.width - 300)/2), ((this.game.world.height - 75)/2), 'preloaderBar');
		this.game.load.setPreloadSprite(this.preloadBar);
		//logo echo
		this.game.load.image('echo', 'img/logo.png');
		//titulo
		this.game.load.image('titulo', 'img/titulo.png');
		//bgajuda
		this.game.load.image('bgajuda', 'img/ajuda.png');
		//bgcreditos
		this.game.load.image('bgcreditos', 'img/creditos.png');
		//botoes
		this.game.load.spritesheet('jogar', 'img/b_jogar.png', 175, 58);
		this.game.load.spritesheet('ajuda', 'img/b_ajuda.png', 175, 58);
		this.game.load.spritesheet('creditos', 'img/b_creditos.png', 175, 58);
		this.game.load.spritesheet('menu', 'img/b_menu.png', 175, 58);
		this.game.load.spritesheet('pausa', 'img/b_pausa.png', 175, 58);
		this.game.load.spritesheet('som', 'img/b_som.png', 175, 58);
		//tilemap
		this.game.load.tilemap('maptag_1', 'map/mapa1_C2.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('maptag_2', 'map/mapa2_E2.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tile1', 'map/base32.png');
		//player
		this.game.load.spritesheet('player', 'img/player.png', 50, 50);
		//enemy
		this.game.load.spritesheet('enemy', 'img/enemies.png', 50, 50);
		//enemy-sale
		this.game.load.image('barraca', 'img/barraca.png');
		//porta
		this.game.load.image('porta', 'img/porta.png');
		//elevador
		this.game.load.image('elevador', 'img/elevador.png');
		//floor
		this.game.load.image('floor', 'img/floor.png');
		//trashes
		this.game.load.image('refri_al', 'img/refri_al2.png');
		this.game.load.image('pet_p', 'img/pet_p2.png');
		this.game.load.image('saco', 'img/saco.png');
		
		//gameover
		this.game.load.image('Gover', 'img/gameover.png');
		this.game.load.image('Gwin', 'img/gamewin.png');
		

		//audios
		//this.game.load.audio('bounce', ['audio/phaserUp3.ogg']);
	},

	create: function() {
		this.game.state.start('Splash');
	}
};