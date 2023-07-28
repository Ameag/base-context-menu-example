import PictureElement from "../../elements/PictureElement";
import TextElement from "../../elements/TextElement";

export enum TypeElement{
    IMAGE_ELEMENT,
    TEXT_ELEMENT,
}

class Fabric {
    
    public createElement = (typeElement:TypeElement ) => {
        switch(typeElement){
            case TypeElement.IMAGE_ELEMENT:{
                return new PictureElement();
            }
            case TypeElement.TEXT_ELEMENT:{
                return new TextElement();;
            }
        }
    }
}

export default Fabric;