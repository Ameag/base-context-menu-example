import Element from './Element'

class ElementStorage {

    private readonly storageElement: Element[];
    
    constructor() {
        this.storageElement = [];
    }

    public addElement = (element:Element) => {
        this.storageElement.push(element)
    }

    public deleteElement = (element: Element) => {
        const index = this.storageElement.indexOf(element);
        if (index !== -1) {
            this.storageElement.splice(index, 1);
            element.deleteElement();
        }
    }

}
export default ElementStorage;