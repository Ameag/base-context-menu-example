/**
 * Класс помощник для @class ContextMenu, он создает кнопки которые мы укажем в @class ContextMenu и вешает на них @event addEventListener.
 *  Далее из @class ContextMenu в него приходят методы на эти кнопки и он их выполняет. 
 */
class ContextMenuOption {
    private readonly element: HTMLElement
    private readonly postClickEvents: (() => void)[];
    constructor (buttonText: string){
        this.element = document.createElement('div');
        this.postClickEvents=[];
        this.element.textContent = buttonText;
        this.element.addEventListener('click', this.onElementClick );
    }
    public getElement = ()  => this.element;
     
    public addPostClickEvent = (event: () => void) => {
        this.postClickEvents.push(event);
    }

    private onElementClick = () => {
        this.postClickEvents.forEach(element => {
            element();
        });
    }

    /**
     * @function show и @function hide нужны для того что бы скрыть кнопку удаления
     */
    public show() {
        this.element.style.display = 'block';
    }

    public hide() {
        this.element.style.display = 'none';
    }
}
export default ContextMenuOption