/**
 * The overall game configuration.
 * This is an entity class to hold the configuration used throughout the game.
 */
class Config {
	/**
	 * Initializes every configuration element that is used by the game entities.
	 */
	constructor() {
		this.numOfEnemies = 8;
		this.canvasWidth = 400
		this.canvasHeight = 900
		this.enemyMinWidthRatio = 0.1;
		this.enemyMaxWidthRatio = 0.4;
		this.enemyMinHeightRatio = 0.1;
		this.enemyMaxHeightRatio = 0.3;
		this.minSpeed = 30;
		this.maxSpeed = 100;
	}

	setCanvasWidth(value) {
		this.canvasWidth = value;
	}
	
	setCanvasHeight(value) {
		this.canvasHeight = value;	
	}
}
