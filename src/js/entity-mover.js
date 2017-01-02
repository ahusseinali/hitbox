/**
 * Makes an entity dynamic, by adding speed to it.
 */
class EntityMover {
	/**
	 * @param {Entity} entity - The entity to move.
	 * @param {x:number, y:number} speed - The speed of movement.
	 * @param {boolean} canGoOutOfBounds - True if entity can move out of canvas boundaries.
	 */
	constructor(entity, speed, canGoOutOfBounds) {
		this.entity_ = entity;
		this.speed_ = speed;
		this.canGoOutOfBounds_ = canGoOutOfBounds;
	}

	/**
	 * Updates the entity position and checks if the new position is out of bounds.
	 * @param {number} dt - the difference in time between current frame and next frame.
	 * @returns {boolean} True if new position is in bounds, false otherwise.
	 */
	update(dt) {
		let distance = {x: dt * this.speed_.x, y: dt * this.speed_.y};
		let newPosition = {
			x: this.entity_.position.x + distance.x,
			y: this.entity_.position.y + distance.y
		};
		let isOutOfBounds = EntityMover.isOutOfBoundaries_(
			newPosition, this.entity_.dimensions, {x: this.entity_.config.canvasWidth, y: this.entity_.config.canvasHeight});
		this.entity_.position = (!isOutOfBounds || this.canGoOutOfBounds_) ?
			newPosition : this.entity_.position;
		return isOutOfBounds;
	}

	/**
	 * @return {boolean} True if entity is out of bounds, false otherwise;
	 */
	static isOutOfBoundaries_(position, dimensions, boundaries) {
		let startPoint = position;
		let endPoint = {x: position.x + dimensions.x, y: position.y + dimensions.y};
		return endPoint.x < 0 ||
			endPoint.y < 0 ||
			boundaries.x < startPoint.x ||
			boundaries.y < startPoint.y;

	}


}
