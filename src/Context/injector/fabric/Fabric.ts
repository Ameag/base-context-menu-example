import PictureElement from "../../elements/PictureElement";
import TextElement from "../../elements/TextElement";
import Coordinates from "../../interface/Coordinates";

class Fabric {
    
    public imageFabric = (coords: Coordinates):PictureElement => {
        const picture = new PictureElement(coords);
        return picture;
    }

    public textFabric = (coords: Coordinates): TextElement => {
        const text = new TextElement(coords);
        return text;
    }
}

export default Fabric;