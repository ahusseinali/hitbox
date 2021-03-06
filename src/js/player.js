class Player extends Entity {
	constructor(position, dimensions, color, speed, config) {
		super(position, dimensions, color);
		this.DIRECTIONS = [
			{x: 0, y: 0},	// STAND
			{x: 0, y: -1},	// UP
			{x: 1, y: 0},	// RIGHT
			{x: 0, y: 1},	// DOWN
			{x: -1, y: 0}	// LEFT
		];
		this.speed_ = speed;
		this.direction_ = 0;
		this.entityMover_ = new EntityMover(this, this.getActualSpeed_(), config, false);
	}

	/**
	 * Updates the player position.
	 * @param {number} dt The difference between last frame and current frame.
	 * @returns {boolean} Always true as player is guaranteed to always be in bound.
	 */
	update(dt) {
		this.entityMover_.update(dt);
		return true;
	}

	render(canvas) {
		canvas.drawStrokeRect(this.position_, this.dimensions_, this.color_, 5);
	}

	/**
	 * Sets the direction based on the pressed key and updates the actual speed accordingly.
	 */
	handleKeyDown(key) {
		switch (key) {
			case 'up':
				this.direction_ = 1;
				break;
			case 'right':
				this.direction_ = 2;
				break;
			case 'down':
				this.direction_ = 3;
				break;
			case 'left':
				this.direction_ = 4;
				break;
			default:
				this.direction_ = 0;
		}
		this.entityMover_.setSpeed(this.getActualSpeed_());
	}

	/**
	 * Stops the movement as the key is released.
	 */
	handleKeyUp(key) {
		switch (key) {
			case 'up':
			case 'right':
			case 'down':
			case 'left':
				this.direction_ = 0;
				break;
			default:
				return;
		}
		this.entityMover_.setSpeed(this.getActualSpeed_());
	}

	/**
	 * Calculates the speed based on the direction.
	 * @returns {{x: number, y: number}} The actual speed of the player.
	 */	
	getActualSpeed_() {
		return {
			x: this.speed_.x * this.DIRECTIONS[this.direction_].x,
			y: this.speed_.y * this.DIRECTIONS[this.direction_].y
		}
	}
}
