Campus.HelpMenu = function(game) {
	ajuda = null;
	b_jogar = null;
	b_menu = null;
};
Campus.HelpMenu.prototype = {
	create: function() {
		
		this.game.world.setBounds(0, 0, 800, 600);
		//background
		this.game.stage.backgroundColor = '#00020d';

		//titulo
		ajuda = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 125, 'bgajuda');
		ajuda.anchor.setTo(0.5,0.5);

		//botoes
		//jogar
		b_jogar = this.add.button(this.game.world.centerX, this.game.world.centerY, 'jogar', this.startGame, this, 1, 1, 1);
		b_jogar.anchor.setTo(0.5,0.5);
		//menu
		b_menu = this.add.button(this.game.world.centerX, this.game.world.centerY + 70, 'menu', this.menuGame, this, 1, 1, 1);
		b_menu.anchor.setTo(0.5,0.5);

	},

	startGame: function() {
		this.game.state.start('Game1');
		ajuda.destroy();
		b_jogar.destroy();
		b_ajuda.destroy();
	},

	menuGame: function() {
		this.game.state.start('MainMenu');
		ajuda.destroy();
		b_jogar.destroy();
		b_ajuda.destroy();
	}
};