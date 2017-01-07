/**
 * Represents the gameplay timer. The time will be displayed in seconds.
 */
class Timer extends Entity {
	constructor(position, dimensions, color) {
		super(position, dimensions, color);
		this.time_ = 0;
	}

	/**
	 * Updates the game time
	 */
	update(dt) {
		this.time_ += dt;
		return true;
	}

	/**
	 * Renders the time text in canvas. The time is rendered in seconds.
	 */
	render(canvas) {
		canvas.renderText(Math.floor(this.time_), this.position_, this.dimensions_, this.color_);
	}
}
