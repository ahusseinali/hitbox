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

	drawStrokeRect(position, dimensions, color, strokeWidth) {
		this.context_.beginPath();
		this.context_.strokeStyle = color;
		this.context_.strokeWidth = strokeWidth || 1;
		this.context_.rect(position.x, position.y, dimensions.x, dimensions.y);
		this.context_.stroke();
	}

	renderText(text, position, dimensions, color) {
		this.context_.font = dimensions.y + 'px Orbitron';
		this.context_.fillStyle = color;
		this.context_.fillText(text, position.x, position.y + dimensions.y);
	}

	clearCanvas() {
		this.context_.clearRect(0, 0, this.width_, this.height_);
		this.drawStrokeRect(
			{x: 0, y: 0},
			{x: this.width_, y: this.height_},
			'rgba(0,0,0,1)');
	}
}
