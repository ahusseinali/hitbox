/**
 * Manages generating random entities.
 */
class EntityGenerator {
	constructor(config) {
		// There are 8 possible locations outside the canvas.
		// Each of which divides the canvas height/width by half.
		// Each location will have one dimension as 0 and the other moves around.
		this.LOCATIONS = [
			{x: 0.1, y: -0.4},
			{x: 0.5, y: -0.4},
			{x: 1, y: 0.1},
			{x: 1, y: 0.5},
			{x: 0.5, y: 1},
			{x: 0.1, y: 1},
			{x: -0.4, y: 0.5},
			{x: -0.4, y: 0.1}
		];
		this.DIRECTIONS = [
			{x:1 , y: 1},
			{x: -1, y: 1},
			{x: -1, y: 1},
			{x: -1, y: -1},
			{x: -1, y: -1},
			{x: 1, y: -1},
			{x: 1, y: -1},
			{x: 1, y: 1}
		];
		this.config_ = config;
	}

	/**
	 * Generates an enemy entity with random dimensions, position, speed and color.
	 */
	generateEnemy() {
		let minWidth = this.config_.canvasWidth * this.config_.enemyMinWidthRatio;
		let maxWidth = this.config_.canvasWidth * this.config_.enemyMaxWidthRatio;
		let minHeight = this.config_.canvasHeight * this.config_.enemyMinHeightRatio;
		let maxHeight = this.config_.canvasHeight * this.config_.enemyMaxHeightRatio;
		let dimensions = {
			x: Math.floor(Math.random() * maxWidth) + minWidth,
			y: Math.floor(Math.random() * maxHeight) + minHeight,
		};
		let index = Math.floor(Math.random() * this.LOCATIONS.length);
		let position = this.generateRandomPosition_(dimensions, index);
		let speed = this.generateRandomSpeed_(index);
		let color = thi.generateRandomColor_();
		return new Enemy(
	}

	/**
	 * Sets the center point of enemy at a random location.
	 * Then Adjust the position to remove the entire shape off canvas space.
	 * @returns {{x: number, y: number}} The new random position.
	 */
	generateRandomPosition_(dimensions, locationIndex) {
		let locationRatio = this.LOCATIONS[locationIndex];
		let xPosition = Math.floor(Math.random() * 0.4 + locationRatio.x) * this.config_.canvasWidth;
		let yPosition = Math.floor(Math.random() * 0.4 + locationRatio.y) * this.config_.canvasHeight;
		if (locationRatio.x < 0) {
			xPosition -= (dimensions.x/2);
		} else if (locationRatio.x == 1) {
			xPosition += (dimensions.x/2);
		}
		if (locationRatio.y < 0) {
			yPosition -= (dimensions.y/2);
		} else if (locationRatio.y == 1) {
			yPosition += (dimensions.y/2);
		}
		return {x: xPosition - (dimensions.x/2), y: yPosition - (dimensions.y/2)};
	}

	/**
	 * Generates a random speed in the range of min and max speed
	 * configuration in both dimensions.
	 */
	generateRandomSpeed_(locationIndex) {
		let directionRatio = this.DIRECTIONS[locationIndex];
		let xSpeed = Math.floor(Math.random() * (this.config_.maxSpeed - this.config_.minSpeed) + this.config_.minSpeed);
		let ySpeed = Math.floor(Math.random() * (this.config_.maxSpeed - this.config_.minSpeed) + this.config_.minSpeed);
		return {x: xSpeed * directionRatio.x, y: ySpeed * directionRatio.y};
	}

	/**
	 * Generates a random color. We need to make sure avoid generating super white colors.
	 */
	generateRandomColor_() {
		let r = Math.floor(Math.random() * 230);
		let g = Math.floor(Math.random() * 230);
		let b = Math.floor(Math.random() * 230);

		return 'rgba(' + r + ',' + g + ',' + b + ',0)';
	}
}
