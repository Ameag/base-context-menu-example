import Coordinates from '../interface/Coordinates';
import Element from './Element'

class ElementStorage {

    private readonly storageElement: Element[];
    
    constructor() {
        this.storageElement = [];
    }

    public addElement = (element:Element) => {
        this.storageElement.push(element)
    }

    public deleteElementAt = (coords: Coordinates) => {
        for (let i = 0; i < this.storageElement.length; i++) {
            const element = this.storageElement[i];
            const rect = element.getRect();
            if (coords.x >= rect.left && coords.x <= rect.right && coords.y >= rect.top && coords.y <= rect.bottom) {
                this.storageElement.splice(i, 1);
                element.deleteElement();
                break;
            }
        }
    }

    public findElement = (coords: Coordinates):Element | undefined => {
        for (let i = 0; i < this.storageElement.length; i++) {
            const element = this.storageElement[i];
            const rect = element.getRect();
            if (coords.x >= rect.left && coords.x <= rect.right && coords.y >= rect.top && coords.y <= rect.bottom) {
                return element
            }
            
        }
        return undefined;
    }

}


export default ElementStorage;