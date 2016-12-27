/*
 * The Main GamePlay controller.
 */
class GameController extends BaseController {
	/**
	 * @param {Config} config - The game configuration. 
	 */
	constructor(config, entityGenerator) {
		this.config_ = config;
		this.entityGenerator = entityGenerator;
		this.entities = [];
	}

	/**
	 * Initializes all game entities based on the config.
	 */
	init() {
		//TODO: Create player
		//TODO: Create timer
		for(let i=0; i < this.config_.numOfEnemies; i++) {
			this.entities.push(this.entityGenerator.generateEnemy());
		}
	}

	/**
	 * Gameplay Update method. It updates all the entities in the game.
	 * It also checks the logic for losing.
	 * @param {number} dt - The difference in seconds between last frame and next frame.
	 * @param {ControllerChain} controllerChain - Updates the controller if necessary.
	 */
	update(dt, controllerChain) {
		this.entities.forEach(entity => {
			entity.update(dt);
		});
	}

	/**
	 * Gameplay Render method. It renders every entity in the game.
	 * @param {Canvas} canvas - The Game Canvas.
	 */
	render(canvas) {
		this.entities.forEach(entity => {
			entity.render(canvas);
		});
	}
}
