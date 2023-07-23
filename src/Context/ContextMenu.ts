import PictureElement from './elements/PictureElement';
import ContextMenuOption from './ContextMenuOption';
import Coordinates from './interface/Coordinates'
import TextElement from './elements/TextElement';
import ElementStorage from './elements/ElementStorage';
import Injector from './injector/Injector';



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
    private readonly injector: Injector;

	

    constructor(rootElement: HTMLElement) {
        this.element = document.createElement('div');
        this.element.className = 'context-menu';
        this.root = rootElement;
        this.coords = {x:0,y:0};
        this.elementStorage = new ElementStorage();
        this.injector = new Injector();


        
        this.elementImageAdd = new ContextMenuOption(this.TEXT_ADD_IMAGE_BUTTON);
        this.elementImageAdd.addPostClickEvent(this.onAddedImageClick);
        this.element.append(this.elementImageAdd.getElement());

        this.elementTextAdd = new ContextMenuOption(this.TEXT_ADD_TEXT_BUTTON);
        this.elementTextAdd.addPostClickEvent(this.onAddedTextClick);
        this.element.append(this.elementTextAdd.getElement());


        this.elementImageDelete = new ContextMenuOption(this.TEXT_DELETE_BUTTON);
        this.elementImageDelete.addPostClickEvent(this.onDeleteElementClick);
        this.element.append(this.elementImageDelete.getElement());
        
    }


    public open = (coordsOutput: Coordinates,targetElement: HTMLElement) => {
        this.coords = coordsOutput;
        
        if (targetElement.tagName === 'IMG' || targetElement.classList.contains('text')) {
            this.elementImageDelete.show();
        } else {
            this.elementImageDelete.hide();
        }

        this.root.append(this.element);

        const position = this.findingCoord(coordsOutput);
        this.setPosition(position);


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
        element.style.top = `${coords.y}px`;
        element.style.left =`${coords.x}px`;
    }
    
    private onAddedImageClick = () => {
        this.addPictureElement();
    }
    private addPictureElement = () => {
        const image = this.injector.injectImage(this.coords);
        this.root.append(image);
    }

    private onAddedTextClick = () => {
        this.addTextElement();
    }
    private addTextElement = () => {
        const text = this.injector.injectText(this.coords);
        this.root.append(text);
    }

    private onDeleteElementClick = () => {
        this.onDeleteImageClick();
    }

    private onDeleteImageClick = () => {
    this.elementStorage.deleteElementAt(this.coords);
}


}

export default ContextMenu;
