import PictureElement from './elements/PictureElement';
import ContextMenuOption from './ContextMenuOption';
import Coordinates from './Coordinates'
import TextElement from './elements/TextElement';
import ElementStorage from './ElementStorage';



class ContextMenu {
    private readonly TEXT_ADD_IMAGE_BUTTON = 'Добавить картинку';
    private readonly TEXT_DELETE_BUTTON = 'Удалить';
    private readonly TEXT_ADD_TEXT_BUTTON = 'Добавить текст';
    private readonly root: HTMLElement;
    private readonly element: HTMLElement;
    private readonly elementImageAdd: ContextMenuOption;
    private readonly elementTextAdd: ContextMenuOption;
    private readonly elementImageDelete: ContextMenuOption;
    private coords: Coordinates;
    private readonly elementStorage: ElementStorage;

	

    constructor(rootElement: HTMLElement) {
        this.element = document.createElement('div');
        this.element.className = 'context-menu';
        this.root = rootElement;
        this.coords = {x:0,y:0};
        this.elementStorage = new ElementStorage();


        
        this.elementImageAdd = new ContextMenuOption(this.TEXT_ADD_IMAGE_BUTTON);
        this.elementImageAdd.addPostClickEvent(this.onAddedImageClick);
        this.element.append(this.elementImageAdd.getElement());

        this.elementTextAdd = new ContextMenuOption(this.TEXT_ADD_TEXT_BUTTON);
        this.elementTextAdd.addPostClickEvent(this.onAddedTextClick);
        this.element.append(this.elementTextAdd.getElement());


        this.elementImageDelete = new ContextMenuOption(this.TEXT_DELETE_BUTTON);
        this.elementImageDelete.addPostClickEvent(this.onDeleteImageClick);
        this.element.append(this.elementImageDelete.getElement());
        
    }


    public open = (coordsOutput: Coordinates) => {
        this.coords = coordsOutput;
        
        const position = this.findingCoord(coordsOutput);
        this.setPosition(position);

        this.root.append(this.element);

    }

    public close = () => {
        this.element.remove();
    }

    private findingCoord = (coords: Coordinates):Coordinates =>  {
        const menuWidth = this.element.offsetWidth;
        const menuHeight = this.element.offsetHeight;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let {x,y} = coords;

        if (coords.x + menuWidth > windowWidth) {
            x -= menuWidth;
        }

        if (coords.y + menuHeight > windowHeight) {
            y -= menuHeight;
        }
        return {x,y}
    }
    private setPosition = (coords: Coordinates,element: HTMLElement = this.element) =>{
        const positionY = `${coords.y}px`
        const positionX = `${coords.x}px`

        element.style.top = positionY;
        element.style.left = positionX;
    }
    
    private onAddedImageClick = () => {
        this.addPictureElement();
    }
    private addPictureElement = () => {
        const picture = new PictureElement(this.coords);
        this.elementStorage.addElement(picture);
        const image = picture.getElement();
        this.root.append(image);
        this.setPosition(this.coords,image) 
    }

    private onAddedTextClick = () => {
        this.addTextElement();
    }
    private addTextElement = () => {
        const textElement = new TextElement(this.coords);
        this.elementStorage.addElement(textElement);
        const text = textElement.getElement();
        this.root.append(text);
        this.setPosition(this.coords,text) 
    }

    private onDeleteImageClick = () => {
        this.deleteImageElement();
    }

    private deleteImageElement = () => {

    }


}

export default ContextMenu;
