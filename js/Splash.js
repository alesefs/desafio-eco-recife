Campus.Splash = function(game) {
	timer = 250;
	alpha_n = 2.5;
	echo = null;
};

Campus.Splash.prototype = {
	create: function() {
		
		this.game.world.setBounds(0, 0, 800, 600);
		//background
		this.game.stage.backgroundColor = '#15002d';

		//echo
		echo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'echo');
		echo.anchor.setTo(0.5,0.5);
		echo.alpha = alpha_n;
   	},

	update: function(){
		timer -= 1;
		alpha_n -= 0.01;
		echo.alpha = alpha_n;

		if(timer <= 1 && alpha_n <= 0.01){
			timer = 0;
			alpha_n = 0;
			this.callMainMenu();
		}
	},

	callMainMenu: function(){
		this.game.state.start('MainMenu');
		echo.destroy();
		timer = 150;
		alpha_n = 1.5;
	}

};