import Element from '../context/elements/Element'
import Coordinates from '../context/interface/Coordinates';
import ElementMover from './ElementMover ';
class ElementData {
        private  element: Element | null;
        private coord : Coordinates | null;
        private readonly elementMover: ElementMover;
        private offset: Coordinates;

        constructor () {
            this.element = null;
            this.coord = null;
            this.elementMover = new ElementMover();
            this.offset = { x: 0, y: 0 };
        }

    public setElement = (elements: Element,coords: Coordinates) => {
        this.element = elements
        const rect = this.element.getRect();
        this.offset.x = coords.x - rect.x;
        this.offset.y = coords.y - rect.y;
    }

    public setCoordinates = (coordsOutput: Coordinates) => {
        this.coord = {
            x: coordsOutput.x - this.offset.x,
            y: coordsOutput.y - this.offset.y,
        };
    }
    public End = () => { 
        this.element = null;
    }

    public callMoveElement = () => {
        if (this.coord&&this.element) {
            this.elementMover.moveElement(this.coord,this.element);
        }
    }
}
export default ElementData;