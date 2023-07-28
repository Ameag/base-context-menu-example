import Element from "./Element";

class TextElement extends Element {
    constructor() {
        super();
        this.element.textContent = 'Ваш текст здесь';
        this.element.className = 'text';
        this.element.style.position = 'absolute';
    }
}

export default TextElement;