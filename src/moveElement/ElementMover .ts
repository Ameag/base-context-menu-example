import Element from '../context/elements/Element'
import Coordinates from "../context/interface/Coordinates";

class ElementMover {
    private element: Element | null;
    private cords: Coordinates | null;

    constructor () {
        this.element = null;
        this.cords = null;
    }
     
    public moveElement = (coordsOutput:Coordinates,elementOutput:Element) => {
        this.cords = coordsOutput;
        this.element = elementOutput;
        this.element.setPosition(this.cords,this.element.getElement())
    }
}

export default ElementMover;