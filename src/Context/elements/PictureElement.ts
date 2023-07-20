import Coordinates from "../Coordinates";
import Element from "./Element";

class PictureElement extends Element{
    constructor(coordsOutput: Coordinates) {
        super(coordsOutput);
        this.element = document.createElement('img');
        (this.element as HTMLImageElement).src = 'https://sun9-44.userapi.com/impg/Kw435DsqNXqjyup3pk-hBIp2-rFPDTjJ7Jg36w/HUlJ--lEmzs.jpg?size=144x96&quality=96&sign=e04d4e16ea2aa08801c43953773a337c&type=album';
        this.element.style.position = 'absolute';

    }  
    
}
export default PictureElement;