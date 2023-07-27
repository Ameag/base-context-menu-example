import Coordinates from "../interface/Coordinates";

class Element {
    protected element: HTMLElement
    constructor() {
        this.element = document.createElement('div')
    }
    public getElement(): HTMLElement {
        return this.element;
    }

    public deleteElement(): void {
        this.element.remove();
    }

    public getRect(): DOMRect {
        return this.element.getBoundingClientRect();
    }

    public setPosition = (coords: Coordinates,element: HTMLElement ) =>{
        element.style.top = `${coords.y}px`;
        element.style.left =`${coords.x}px`;
    }

}
export default Element;