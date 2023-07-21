import Element from './Element'

class ElementStorage {

    private readonly storageElement: Element[];
    
    constructor() {
        this.storageElement = [];
    }

    public addElement = (element:Element) => {
        this.storageElement.push(element)
    }



}
export default ElementStorage;