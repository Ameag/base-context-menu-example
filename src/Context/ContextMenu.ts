import ContextMenuOption from './ContextMenuOption';
import Coordinates from './interface/Coordinates'
import ElementStorage from './elements/ElementStorage';
import Injector from './injector/Injector';


/**
 * Главный класс контексного меню отвечающий за следующие: 
 * 1. Появление в нужных координатах
 * 2. Закрытие контексного меню нажатием на ЛКМ
 * 3. Создание кнопок и их функционал
 */
class ContextMenu {
    private readonly TEXT_ADD_IMAGE_BUTTON = 'Добавить картинку';
    private readonly TEXT_DELETE_BUTTON = 'Удалить';
    private readonly TEXT_ADD_TEXT_BUTTON = 'Добавить текст';
    private readonly root: HTMLElement;
    private readonly element: HTMLElement;
    private readonly elementImageAdd: ContextMenuOption;
    private readonly elementTextAdd: ContextMenuOption;
    private readonly elementDelete: ContextMenuOption;
    private coords: Coordinates;
    private readonly elementStorage: ElementStorage;
    private readonly injector: Injector;

	

    constructor(rootElement: HTMLElement, elementStorage: ElementStorage, injector: Injector) {
        this.element = document.createElement('div');
        this.element.className = 'context-menu';
        this.root = rootElement;
        this.coords = {x:0,y:0};
        this.elementStorage = elementStorage;
        this.injector = injector;


        // Добавление кнопок в контексное меню
        this.elementImageAdd = new ContextMenuOption(this.TEXT_ADD_IMAGE_BUTTON);
        this.elementImageAdd.addPostClickEvent(this.onAddedImageClick);
        this.element.append(this.elementImageAdd.getElement());

        this.elementTextAdd = new ContextMenuOption(this.TEXT_ADD_TEXT_BUTTON);
        this.elementTextAdd.addPostClickEvent(this.onAddedTextClick);
        this.element.append(this.elementTextAdd.getElement());


        this.elementDelete = new ContextMenuOption(this.TEXT_DELETE_BUTTON);
        this.elementDelete.addPostClickEvent(this.onDeleteElementClick);
        this.element.append(this.elementDelete.getElement());
        
    }

    //метод отвечающий за появление контекстного меню
    public open = (coordsOutput: Coordinates,targetElement: HTMLElement) => {
        this.coords = coordsOutput;
        /**
         * Проверка для кнопки удаления, если вызов контекстного меню произошел не на созданном элементе,
         * то кнопка удалить скрывается
         * @function show и @function hide находятся в @class ContextMenuOption  
         */
        if (targetElement.tagName === 'IMG' || targetElement.classList.contains('text')) {
            this.elementDelete.show();
        } else {
            this.elementDelete.hide();
        }

        this.root.append(this.element);

        const position = this.findingCoords(coordsOutput);

        this.setPositionMenu(position);


    }

    public close = () => {
        this.element.remove();
    }

    private findingCoords = (coords: Coordinates):Coordinates =>  {
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
    private setPositionMenu = (coords: Coordinates,element: HTMLElement = this.element) =>{
        element.style.top = `${coords.y}px`;
        element.style.left =`${coords.x}px`;
    }
    

    /**
     * группа методов отвечающая за функционал кнопок: добавление элементов и их удаление
     */
    private onAddedImageClick = () => {
        this.addPictureElement();
    }

    private onAddedTextClick = () => {
        this.addTextElement();
    }

    private onDeleteElementClick = () => {
        this.onDeleteClick();
    }


    private addPictureElement = () => {
        const image = this.injector.injectImage(this.coords);
        this.root.append(image);
    }

    private addTextElement = () => {
        const text = this.injector.injectText(this.coords);
        this.root.append(text);
    }

    private onDeleteClick = () => {
        this.elementStorage.deleteElementAt(this.coords);
    }


}

export default ContextMenu;
