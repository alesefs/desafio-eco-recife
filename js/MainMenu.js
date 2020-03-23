Campus.MainMenu = function(game) {
	titulo = null;
	b_jogar = null;
	b_ajuda = null;
	b_creditos = null;
};
Campus.MainMenu.prototype = {
	create: function() {
		
		this.game.world.setBounds(0, 0, 800, 600);
		//background
		this.game.stage.backgroundColor = '#00162d';

		//titulo
		titulo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 125, 'titulo');
		titulo.anchor.setTo(0.5,0.5);

		//botoes
		//jogar
		b_jogar = this.add.button(this.game.world.centerX, this.game.world.centerY, 'jogar', this.startGame, this, 1, 1, 1);
		b_jogar.anchor.setTo(0.5,0.5);
		//ajuda
		b_ajuda = this.add.button(this.game.world.centerX, this.game.world.centerY + 70, 'ajuda', this.infoGame, this, 1, 1, 1);
		b_ajuda.anchor.setTo(0.5,0.5);
		//creditos
		b_creditos = this.add.button(this.game.world.centerX, this.game.world.centerY + 140, 'creditos', this.creditGame, this, 1, 1, 1);
		b_creditos.anchor.setTo(0.5,0.5);

	},

	startGame: function() {
		this.game.state.start('Game1');
		titulo.destroy();
		b_jogar.destroy();
		b_ajuda.destroy();
		b_creditos.destroy();
	},

	infoGame: function() {
		this.game.state.start('HelpMenu');
		titulo.destroy();
		b_jogar.destroy();
		b_ajuda.destroy();
		b_creditos.destroy();
	},

	creditGame: function() {
		this.game.state.start('CreditMenu');
		titulo.destroy();
		b_jogar.destroy();
		b_ajuda.destroy();
		b_creditos.destroy();
	}
};