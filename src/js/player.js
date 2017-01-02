class Player extends Entity {
	constructor(position, dimensions, color, speed) {
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
		this.entityMover_ = new EntityMover(this, this.getActualSpeed_(), false);
	}

	/**
	 * Updates the player position.
	 * @param {number} dt The difference between last frame and current frame.
	 * @returns {boolean} Always true as player is guaranteed to always be in bound.
	 */
	update(dt) {
		this.entityMover_.update();
		return true;
	}

	render(canvas) {
		this.drawStrokeRect(this.position_, this.dimensions_, this.color_, 2);
	}

	/**
	 * Sets the direction based on the pressed key and updates the actual speed accordingly.
	 */
	handleKeyDown(key) {
		switch (key) {
			case 'up':
				this.direction = 1;
				break;
			case 'right':
				this.direction = 2;
				break;
			case 'down':
				this.direction = 3;
				break;
			case 'left':
				this.direction = 4;
				break;
			default:
				this.direction = 0;
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
				this.direction = 0;
				break;
			default:
				return;
		}
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
