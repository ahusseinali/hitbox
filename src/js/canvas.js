/**
 * Manages the canvas drawing and cleaning functionality.
 */
class Canvas {
	constructor(elementName, width, height) {
		this.element_ = document.getElementById(elementName);
		this.context_ = this.element_.getContext('2d');
		this.width_ = width;
		this.height_ = height;
		this.element_.width = width;
		this.element_.height = height;
	}

	drawRect(position, dimensions, color) {
		this.context_.beginPath();
		this.context_.fillStyle = color;
		this.context_.rect(position.x, position.y, dimensions.x, dimensions.y);
		this.context_.fill();
	}

	clearCanvas() {
		this.context.clearRect(0, 0, this.width_, this.height_);
	}
}
