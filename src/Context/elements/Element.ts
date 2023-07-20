import Coordinates from "../Coordinates";

class Element {
    private readonly coords:Coordinates
    protected element: HTMLElement

    constructor(coordsOutput: Coordinates) {
        this.coords = coordsOutput
        this.element = document.createElement('div')
    }
    public getElement(): HTMLElement {
        return this.element;
    }

    public deleteElement(): void {
        this.element.remove();
    }

    public getCoords = ():Coordinates =>  {
        return this.coords;
    }

}
export default Element;