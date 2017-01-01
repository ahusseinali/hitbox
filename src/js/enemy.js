/**
 * Represents the enemy box entity
 */
class Enemy extends Entity {
	constructor(position, dimensions, color, config, speed) {
		super(position, dimensions, color, config);
		this.entityMover_ = new EntityMover(this, speed, true);
	}

	/**
	 * Calls the entity mover to update the entity position.
	 * @returns {boolean} True if new position is in boundaries, false otherwise.
	 */
	update(dt) {
		return this.entityMover_.update(dt);
	}

	/**
	 * Renders a rectangle for the enemy box using Canvas instance.
	 * @param {Canvas} canvas - The canvas used to render the entity.
	 */
	render(canvas) {
		canvas.drawRect(this.position_, this.dimensions_, this.color_);
	}
}
