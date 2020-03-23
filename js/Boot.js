var Campus = {};
Campus.Boot = function(game) {};
Campus.Boot.prototype = {
	preload: function() {
		this.load.image('preloaderBg', 'img/loading0.png');
		this.load.image('preloaderBar', 'img/loading100.png');
	},

	create: function() {
		this.game.input.maxPointers = 1;
		this.game.state.start('Preloader');
	}
};