/**
 * Handles the main functionalities of canvas and requesting frames for the game loop.
 */
class Engine() {
	constructor(canvas, gameControllerFactory) {
		this.canvas_ = canvas;
		this.lastTime_ = 0;
		this.gameControllerFactory_ = gameControllerFactory;
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
		let controller = this.gameControllerFactory_.getCurrentController();
		controller.update(dt);
		this.controller.render(canvas);
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
