/**
 * Manages the canvas drawing and cleaning functionality.
 */
class Canvas {
	constructor(elementName) {
		this.element_ = document.getElementById(elementName);
		this.context_ = this.element_.getContext('2d');
	}

	drawRect(position, dimensions, color) {
		this.context_.beginPath();
		this.context_.fillStyle = color;
		this.context_.rect(position.x, position.y, dimensions.x, dimensions.y);
		this.context_.fill();
	}
}
