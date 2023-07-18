import CreateElement from './CreateElement'
import DeleteElement from './DeleteElement';

class ContextMenu {
    private readonly root: HTMLElement;
    private readonly element: HTMLElement;
    private readonly addWindowOption: HTMLElement;
    private readonly deleteOption: HTMLElement;
	

    constructor(rootElement: HTMLElement) {
        this.element = document.createElement('div');
        this.element.className = 'context-menu';
        this.root = rootElement;

        this.addWindowOption = document.createElement('div');
        this.addWindowOption.textContent = 'Добавить картинку';
        this.addWindowOption.addEventListener('click', () => {
            const imageDisplayer = new CreateElement(this.root);
        });
        this.element.append(this.addWindowOption);


        this.deleteOption = document.createElement('div');
        this.deleteOption.textContent = 'Удалить';
        this.deleteOption.addEventListener('click', () => {
			const deleteImage = new DeleteElement(this.root)
		});
        this.element.append(this.deleteOption);
    }

    public open = (clientX: number, clientY: number, target: EventTarget | null) => {
        if (target instanceof HTMLImageElement) {
            this.deleteOption.style.display = 'block';
        } else {
            this.deleteOption.style.display = 'none';
        }
        this.root.append(this.element);
        const menuWidth = this.element.offsetWidth;
        const menuHeight = this.element.offsetHeight;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let top = clientY;
        let left = clientX;

        if (clientX + menuWidth > windowWidth) {
            left -= menuWidth;
        }

        if (clientY + menuHeight > windowHeight) {
            top -= menuHeight;
        }

        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;
        this.element.classList.add('visible');
    
    }

    public close = () => {
        this.element.remove();
        this.element.classList.remove('visible');

    setTimeout(() => {
        this.element.remove();
    }, 200);
    }
}

export default ContextMenu;
