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
		this.entities_.push(this.entityGenerator_.generatePlayer());
		for (let i=0; i < this.config_.numOfEnemies; i++) {
			this.entities_.push(this.entityGenerator_.generateEnemy());
		}
		this.entities_.push(this.entityGenerator_.generateTimer());
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
	 * Make sure Timer is always at the end of the list to render always on top.
	 * param {!Array<Entity>} entitiesToRemove the indexes of entities to be removed.
	 */
	regenerateEntities_(entitiesToRemove) {
		for (let i=entitiesToRemove.length -1; i>=0; i--) {
			this.entities_.splice(entitiesToRemove[i],1);
		}

		let numOfEntitiesToGenerate = entitiesToRemove.length;
		let timer = this.entities_.pop();
		for (let i=0; i < numOfEntitiesToGenerate; i++) {
			this.entities_.push(this.entityGenerator_.generateEnemy());
		}
		this.entities_.push(timer);
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

	/**
	 * Passes the key down handler to the player object.
	 */
	handleKeyDown(key) {
		this.entities_[0].handleKeyDown(key);
	}

	/**
	 * Passes the key up handler to the player object
	 */
	handleKeyUp(key) {
		this.entities_[0].handleKeyUp(key);
	}
}
