/**
 * Handles the main functionalities of canvas and requesting frames for the game loop.
 */
class Engine {
	constructor(canvas, gameControllerChain) {
		this.canvas_ = canvas;
		this.lastTime_ = 0;
		this.gameControllerChain_ = gameControllerChain;
	}

	/**
	 * Initializes time, entity generators and game logic.
	 */
	init() {
		this.lastTime_ = Date.now();
		this.gameControllerChain_.init();
		this.addEventListeners_();
		this.gameLoop();
	}

	/**
	 * The main loop of the game.
	 */
	gameLoop() {
		let dt = this.updateTime_();
		this.gameControllerChain_.update(dt);
		this.canvas_.clearCanvas();
		this.gameControllerChain_.render(this.canvas_);
		window.requestAnimationFrame(this.gameLoop.bind(this));
	}

	/**
	 * @returns {Number} The difference between two frames in seconds.
	 */
	updateTime_() {
		let now = Date.now();
		let diffInSec = (now - this.lastTime_)/1000;
		this.lastTime_ = now;
		return diffInSec;
	}

	/**
	 * Main handler for all the key events for the game.
	 */
	addEventListeners_() {
		var allowedKeys = {
			13: 'enter',
        		37: 'left',
        		38: 'up',
        		39: 'right',
        		40: 'down',
        		81: 'quit',
        		82: 'restart'
    		};

		document.addEventListener('keydown', e => {
    			this.gameControllerChain_.handleKeyDown(allowedKeys[e.keyCode]);
		});
		document.addEventListener('keyup', e => {
    			this.gameControllerChain_.handleKeyUp(allowedKeys[e.keyCode]);
		});
	}

}
