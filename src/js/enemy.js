/**
 * Represents the enemy box entity
 */
class Enemy extends Entity {
	constructor(position, dimensions, color, config, speed) {
		super(position, dimensions, color, config);
		this.entityMover_ = new EntityMover(this, speed, true);
		this.isOut = false;
		this.wasIn = false;
	}

	/**
	 * Calls the entity mover to update the entity position.
	 * @returns {boolean} True if the entity moved in bounds, false otherwise.
	 */
	update(dt) {
		let isOut = this.entityMover_.update(dt);
		if(isOut) {
			this.isOut = true;
		} else {
			this.wasIn = true;
			this.isOut= false;
		}

		return !(this.isOut && this.wasIn);
	}

	/**
	 * Renders a rectangle for the enemy box using Canvas instance.
	 * @param {Canvas} canvas - The canvas used to render the entity.
	 */
	render(canvas) {
		canvas.drawRect(this.position_, this.dimensions_, this.color_);
	}
}
