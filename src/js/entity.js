/**
 * Represents Base class for all game entities.
 */
class Entity {
	/**
	 * @param {{x:number, y:number}} position - The position of the entity in the canvas.
	 * @param {{x:number, y:number}} dimensions - The dimensions of the entity in pixels.
	 * @param {string} color - The color value used to draw the entity on canvas. 
	 * @param {Config} config = The game configuration object.
	 */
	constructor(position, dimensions, color) {
		this.position_ = position;
		this.dimensions_ = dimensions;
		this.color_ = color;
	}

	get position() {
		return this.position_;
	}

	get dimensions() {
		return this.dimensions_;
	}

	set position(position) {
		this.position_ = position;
	}

	set dimensions(dimensions) {
		this.dimensions_ = dimensions;
	}

	/**
	 * Updates the entity state. This method is to be overridden by subclasses.
	 * @returns {boolean} true if the update is successful, false otherwise. 
	 */
	update(dt) {
		return true;
	}

	/**
	 * Renders the entity on canvas.
	 * @param {Canvas} canvas - The canvas used to draw the entity on.
	 */
	render(canvas) {}
}
