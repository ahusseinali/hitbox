/**
 * The main class for the game. It initializes the game engine, canvas and controllers.
 */
class App {
	constructor() {
		let width = document.body.clientWidth;
		let height = document.body.clientHeight;
		let config = new Config();
		config.setCanvasWidth = width;
		config.setCanvasHeight = height;
		let canvas = new Canvas('game', width, height);
		let entityGenerator = new EntityGenerator(config);
		let mainController = new GameController(config, entityGenerator);
		let controllerChain = new GameControllerChain(mainController);
		let engine = new Engine(canvas, controllerChain);
		engine.init();
	}
}

window.addEventListener('load', () => new App());
