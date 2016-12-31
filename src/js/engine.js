/**
 * Handles the main functionalities of canvas and requesting frames for the game loop.
 */
class Engine() {
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
	}

	/**
	 * The main loop of the game.
	 */
	gameLoop() {
		let dt = this.updateTime();
		this.currentControllerChain_.update(dt);
		this.canvas_.clearCanvas();
		this.currentControllerChain.render(canvas);
		window.requestAnimationFrame.call(this, this.gameLoop());
	}

	/**
	 * @returns {Number} The difference between two frames in seconds.
	 */
	updateTime_() {
		let now = Date.now();
		let diffInSec = (now - lastTime)/1000;
		this.lastTime_ = now;
		return diffInSec;
	}

}
