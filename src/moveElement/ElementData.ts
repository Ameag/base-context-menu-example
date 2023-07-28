import Element from '../context/elements/Element'
import Coordinates from '../context/interface/Coordinates';

/**
 * Класс отвечающий за перетаскивания элемента по экрану,
 * сохраняет в себе элемент который будет перемещатся и координаты по которым он будет это делать.
 */
class ElementData {
    private element: Element | null;
    private coords : Coordinates | null;
    private offset: Coordinates;

    constructor () {
        this.element = null;
        this.coords = null;
        this.offset = { x: 0, y: 0 };
    }

    public setElement = (elements: Element,coords: Coordinates) => {
        this.element = elements
        const rect = this.element.getRect();
        this.offset.x = coords.x - rect.x;
        this.offset.y = coords.y - rect.y;
    }

    public setCoordinates = (coordsOutput: Coordinates) => {
        this.coords = {
            x: coordsOutput.x - this.offset.x,
            y: coordsOutput.y - this.offset.y,
        };
    }
    /*метод вызываемый при окончани перемещения элемента, очищает this.element,
     что бы элемент оставался на своем месте и не следовал за курсором
     */
    public stop = () => { 
        this.element = null;
    }

    public moveElement = () => {
        if (this.coords&&this.element) {
            this.element.setPosition(this.coords)
        }
    }
}
export default ElementData;