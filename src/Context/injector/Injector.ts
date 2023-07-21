import ElementStorage from "../elements/ElementStorage";
import Coordinates from "../interface/Coordinates";
import Fabric from "./fabric/Fabric";

class Injector {
    protected readonly elementStorage = new ElementStorage();
    protected readonly fabric = new Fabric();

    public injectImage = (coords: Coordinates): HTMLElement => {
        const picture = this.fabric.imageFabric(coords);
        this.elementStorage.addElement(picture);
        const image = picture.getElement();
        this.setPosition(coords,image) 
        return image;
    }

    public injectText = (coords: Coordinates):HTMLElement  => {
        const textElement = this.fabric.textFabric(coords);
        this.elementStorage.addElement(textElement);
        const text = textElement.getElement();
        this.setPosition(coords,text) 
        return text;
    }

    private setPosition = (coords: Coordinates,element: HTMLElement ) =>{
        element.style.top = `${coords.y}px`;
        element.style.left =`${coords.x}px`;
    }
}

export default Injector;