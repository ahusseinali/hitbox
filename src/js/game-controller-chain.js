/**
 * Creates controller and manages the current controller state based on the game stage.
 */
class GameControllerChain {
	constructor(startController) {
		this.currentController_ = startController;
	}

	/**
	 * Performs the current controller initialization.
	 */
	init() {
		this.currentController_.init();
	}

	/**
	 * Sets the current controller to a new value.
	 * @param {Controller} controller - The new controller value.
	 */
	setController(controller) {
		this.currentController_ = controller;
	}

	/**
	 * Updates the current controller.
	 * @param {number} dt - The time difference between two consecutive frames in seconds.
	 */
	update(dt) {
		this.currentController_.update(dt, this);
	}

	/**
	 * Renders the current frame.
	 */
	render(canvas) {
		this.currentController_.render(canvas);
	}
}
