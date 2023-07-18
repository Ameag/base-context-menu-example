import './style.css'
import ContextMenu from './Context/ContextMenu.ts';

const contextMenu = new ContextMenu(document.body);

const onRightClick = (ev: MouseEvent) => {
	ev.preventDefault();
	contextMenu.open(ev.clientX, ev.clientY,ev.target);
};

const onLeftClick = (ev: MouseEvent) => {
	ev.preventDefault();
	contextMenu.close();
};

document.body.addEventListener('contextmenu', onRightClick);
document.body.addEventListener('click',onLeftClick)

