/**
 * The overall game configuration.
 * This is an entity class to hold the configuration used throughout the game.
 */
class Config {
	/**
	 * Initializes every configuration element that is used by the game entities.
	 */
	constructor(canvasWidth, canvasHeight) {
		let maxDim = Math.max(canvasWidth, canvasHeight);
		this.numOfEnemies = 8;
		this.canvasWidth = canvasWidth || 400;
		this.canvasHeight = canvasHeight || 900;
		this.enemyMinWidthRatio = 0.05;
		this.enemyMaxWidthRatio = 0.3;
		this.enemyMinHeightRatio = 0.05;
		this.enemyMaxHeightRatio = 0.2;
		this.minSpeed = 40;
		this.maxSpeed = 200;
		this.playerWidth = Math.min(30, maxDim * 0.02);
		this.playerHeight = Math.min(30, maxDim * 0.02);
		this.playerSpeed = 250;
		this.playerColor = 'rgba(120, 0, 0, 1)';
		this.timerPosition = {x: 10, y: 10};
		this.timerDimensions = {x: 80, y: 40}
		this.timerColor = 'rgba(0, 0, 0, 1)';
	}
}
