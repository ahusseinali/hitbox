/**
 * Manages the canvas drawing and cleaning functionality.
 */
class Canvas {
	constructor(elementName, width, height) {
		let canvas = document.createElement('canvas');
		canvas.id = elementName;
		this.context_ = canvas.getContext('2d');
		this.width_ = width;
		this.height_ = height;
		canvas.width = width;
		canvas.height = height;
		document.body.appendChild(canvas);
	}

	drawRect(position, dimensions, color) {
		this.context_.beginPath();
		this.context_.fillStyle = color;
		this.context_.rect(position.x, position.y, dimensions.x, dimensions.y);
		this.context_.fill();
	}

	clearCanvas() {
		this.context_.clearRect(0, 0, this.width_, this.height_);
		this.context_.beginPath();
		this.context_.strokeStyle = 'rgba(0,0,0,1)';
		this.context_.strokeWidth = 2;
		this.context_.rect(0, 0, this.width_-1, this.height_-1);
		this.context_.stroke();
	}
}
