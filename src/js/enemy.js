/**
 * Represents the enemy box entity
 */
class Enemy extends Entity {
	constructor(position, dimensions, color, config, speed) {
		super.constructor(position, dimensions, color, config);
		this.entityMover_ = new EntityMover(this, speed, true);
	}

	/**
	 * Calls the entity mover to update the entity position.
	 * @returns {boolean} True if new position is in boundaries, false otherwise.
	 */
	update(dt) {
		return this.entityMover_.update(dt);
	}

	render(canvas) {
		// TODO: Render square shape at position with dimensions and color.
	}
}
