/**
 * Represents the enemy box entity
 */
class Enemy extends Entity {
	constructor(position, dimensions, color, config, speed) {
		super(position, dimensions, color, config);
		this.MAX_OUT = 100;
		this.entityMover_ = new EntityMover(this, speed, true);
		this.out_ = 0;
	}

	/**
	 * Calls the entity mover to update the entity position.
	 * @returns {boolean} True if the entity moved in bounds, false otherwise.
	 */
	update(dt) {
		let isOut = this.entityMover_.update(dt);
		if(isOut) {
			this.isOut_ = true;
			this.out_++;
		} else {
			this.wasIn_ = true;
			this.isOut_ = false;
			this.out_ = 0;
		}
		return this.MAX_OUT > this.out_;
	}

	/**
	 * Renders a rectangle for the enemy box using Canvas instance.
	 * @param {Canvas} canvas - The canvas used to render the entity.
	 */
	render(canvas) {
		canvas.drawRect(this.position_, this.dimensions_, this.color_);
	}
}
