import CreateElement from './CreateElement';
import DeleteElement from './DeleteElement';
import ContextMenuOption from './ContextMenuOption';

interface Coordinates {
    x: number;
    y: number;
}

class ContextMenu {
    private readonly TEXT_ADD_BUTTON = 'Добавить картинку';
    private readonly TEXT_DELETE_BUTTON = 'Удалить';
    private readonly root: HTMLElement;
    private readonly element: HTMLElement;
    private readonly elementOptionAdd: ContextMenuOption;
    private readonly elementOptionDelete: ContextMenuOption;
	

    constructor(rootElement: HTMLElement) {
        this.element = document.createElement('div');
        this.element.className = 'context-menu';
        this.root = rootElement;

        
        this.elementOptionAdd = new ContextMenuOption(this.TEXT_ADD_BUTTON, this.onAddImage);
        this.element.append(this.elementOptionAdd.getElement());

        this.elementOptionDelete = new ContextMenuOption(this.TEXT_DELETE_BUTTON, this.onDeleteImage);
        this.element.append(this.elementOptionDelete.getElement());
        
    }

    public open = (coords: Coordinates, target: EventTarget | null) => {
        
        if (target instanceof HTMLImageElement) {
            this.elementOptionDelete.style.display = 'block';//не нужно
        } else {
            this.elementOptionDelete.style.display = 'none';
        }
        
        this.root.append(this.element);

        this.findingCoord(coords);
    }

    public close = () => {
        this.element.remove();
        this.element.classList.remove('visible');
    }

    private findingCoord = (coords: Coordinates) => {
        const menuWidth = this.element.offsetWidth;
        const menuHeight = this.element.offsetHeight;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let left = coords.x;
        let top = coords.y;

        if (coords.x + menuWidth > windowWidth) {
            left -= menuWidth;
        }

        if (coords.y + menuHeight > windowHeight) {
            top -= menuHeight;
        }
        this.spavnContexMenu( { x: left, y: top });
    }
    private spavnContexMenu = (coords: Coordinates) =>{
        const positionY = `${coords.y}px`
        const positionX = `${coords.x}px`

        this.element.style.top = positionY;
        this.element.style.left = positionX;
    }
    //допилить
    
    private onAddedWindowClick = () => {
        this.addElement();
    }
    private addElement = () => {

    }

}

export default ContextMenu;
