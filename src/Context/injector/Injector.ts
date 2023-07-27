import ElementStorage from "../elements/ElementStorage";
import Coordinates from "../interface/Coordinates";
import Fabric from "./fabric/Fabric";

class Injector {
    private readonly elementStorage: ElementStorage;
    protected readonly fabric = new Fabric();

    constructor (elementStorage: ElementStorage) {
        this.elementStorage = elementStorage;
    }

   

    public injectImage = (coords: Coordinates): HTMLElement => {
        const picture = this.fabric.imageFabric(coords);
        this.elementStorage.addElement(picture);
        const image = picture.getElement();
        picture.setPosition(coords,image);
        return image;
    }

    public injectText = (coords: Coordinates):HTMLElement  => {
        const textElement = this.fabric.textFabric(coords);
        this.elementStorage.addElement(textElement);
        const text = textElement.getElement();
        textElement.setPosition(coords,text);
        return text;
    }

}

export default Injector;