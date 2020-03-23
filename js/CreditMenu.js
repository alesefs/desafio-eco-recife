Campus.CreditMenu = function(game) {
	credito = null;
	b_jogar = null;
	b_menu = null;
};
Campus.CreditMenu.prototype = {
	create: function() {
		
		this.game.world.setBounds(0, 0, 800, 600);
		//background
		this.game.stage.backgroundColor = '#02020d';

		//titulo
		credito = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 125, 'bgcreditos');
		credito.anchor.setTo(0.5,0.5);

		//botoes
		//menu
		b_menu = this.add.button(this.game.world.centerX, this.game.world.centerY + 70, 'menu', this.menuGame, this, 1, 1, 1);
		b_menu.anchor.setTo(0.5,0.5);

	},

	menuGame: function() {
		this.game.state.start('MainMenu');
		credito.destroy();
		b_ajuda.destroy();
	}
};