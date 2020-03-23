Campus.GameWin = function(game) {
	gWin = null;
	b_jogar = null;
	b_menu = null;
};
Campus.GameWin.prototype = {
	create: function() {
		
		this.game.world.setBounds(0, 0, 800, 600);
		//background
		this.game.stage.backgroundColor = '#00020d';

		//titulo
		gWin = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 125, 'Gwin');
		gWin.anchor.setTo(0.5,0.5);

		//botoes
		//menu
		b_menu = this.add.button(this.game.world.centerX, this.game.world.centerY + 70, 'menu', this.menuGame, this, 0, 0, 0);
		b_menu.anchor.setTo(0.5,0.5);

	},

	menuGame: function() {
		this.game.state.start('MainMenu');
		gWin.destroy();
		b_menu.destroy();
	}
};