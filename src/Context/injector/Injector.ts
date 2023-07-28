import ElementStorage from "../elements/ElementStorage";
import Coordinates from "../interface/Coordinates";
import Fabric, { TypeElement } from "./fabric/Fabric";

/**
 * класс предназначеный для настройки создаваемых элементов, сами элементы создаются в @class Fabric
 */
class Injector {
    private readonly storageElement: ElementStorage;
    protected readonly fabric = new Fabric();

    constructor (elementStorage: ElementStorage) {
        this.storageElement = elementStorage;
    }

   
    /**
     * cоздание элемента picture в @class Fabric, его настройка и добавление в storageElement 
     * @param coords кординаты мыши на экране
     * @returns возврат в класс ContextMenu
     */
    public injectImage = (coords: Coordinates): HTMLElement => {
        const picture = this.fabric.createElement(TypeElement.IMAGE_ELEMENT);
        this.storageElement.addElement(picture);
        const image = picture.getElement();
        picture.setPosition(coords);
        return image;
    }
    /**
     * cоздание элемента text в @class Fabric, его настройка и добавление в storageElement 
     * @param coords кординаты мыши на экране
     * @returns возврат в класс ContextMenu
     */
    public injectText = (coords: Coordinates):HTMLElement  => {
        const textElement = this.fabric.createElement(TypeElement.TEXT_ELEMENT);
        this.storageElement.addElement(textElement);
        const text = textElement.getElement();
        textElement.setPosition(coords);
        return text;
    }

}

export default Injector;