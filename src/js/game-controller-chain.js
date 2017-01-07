/**
 * Creates controller and manages the current controller state based on the game stage.
 */
class GameControllerChain {
	constructor(startController) {
		this.downKeys_ = [];
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

	/**
	 * Propagates event handler for the keydown event to the current controller.
	 */
	handleKeyDown(key) {
		this.downKeys_.push(key);
		this.currentController_.handleKeyDown(key);
	}

	/**
	 * Propagates event handler for the keyup event to the current controller.
	 * The method checks for number of pressed keys to smooth the immediate switch between keys.
	 */
	handleKeyUp(key) {
		this.downKeys_ = this.downKeys_.filter(dkey => dkey != key);
		if(this.downKeys_.length == 0) {
			this.currentController_.handleKeyUp(key);
		}
	}
}
