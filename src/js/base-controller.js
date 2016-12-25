/**
 * Base class for all controllers. It represents the 'State' in State Design Pattern.
 */
class BaseController {
	/**
	 * Performs the update logic of the controller.
	 * The logic can lead to eventually updating the state.
	 */
	update(dt, controllerChain) {}

	/**
	 * Performs the canvas rendering logic of the controller.
	 */
	render(canvas) {}

}
