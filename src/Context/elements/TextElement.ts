import Coordinates from "../interface/Coordinates";
import Element from "./Element";

class TextElement extends Element {
    constructor(coordsOutput: Coordinates) {
        super(coordsOutput);
        this.element.textContent = 'Ваш текст здесь';
        this.element.className = 'text';
        this.element.style.position = 'absolute';
    }
}

export default TextElement;