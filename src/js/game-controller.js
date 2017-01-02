/*
 * The Main GamePlay controller.
 */
class GameController extends BaseController {
	/**
	 * @param {Config} config - The game configuration. 
	 */
	constructor(config, entityGenerator) {
		super();
		this.config_ = config;
		this.entityGenerator_ = entityGenerator;
		this.entities_ = [];
	}

	/**
	 * Initializes all game entities based on the config.
	 */
	init() {
		//TODO: Create player
		//TODO: Create timer
		for (let i=0; i < this.config_.numOfEnemies; i++) {
			this.entities_.push(this.entityGenerator_.generateEnemy());
		}
	}

	/**
	 * Gameplay Update method. It updates all the entities in the game.
	 * It also checks the logic for losing.
	 * @param {number} dt - The difference in seconds between last frame and next frame.
	 * @param {ControllerChain} controllerChain - Updates the controller if necessary.
	 */
	update(dt, controllerChain) {
		let entitiesToRemove = [];
		for (let i=0; i < this.entities_.length; i++) {
			if (!this.entities_[i].update(dt)) {
				entitiesToRemove.push(i);	
			}
		}
		this.regenerateEntities_(entitiesToRemove);
	}

	/**
	 * Removes the entities in the specified indexes and regenerate them.
	 * param {!Array<Entity>} entitiesToRemove the indexes of entities to be removed.
	 */
	regenerateEntities_(entitiesToRemove) {
		for (let i=entitiesToRemove.length -1; i>=0; i--) {
			this.entities_.splice(entitiesToRemove[i],1);
		}

		let numOfEntitiesToGenerate = entitiesToRemove.length;
		for (let i=0; i < numOfEntitiesToGenerate; i++) {
			this.entities_.push(this.entityGenerator_.generateEnemy());
		}
	}

	/**
	 * Gameplay Render method. It renders every entity in the game.
	 * @param {Canvas} canvas - The Game Canvas.
	 */
	render(canvas) {
		this.entities_.forEach(entity => {
			entity.render(canvas);
		});
	}
}
