import './style.css'
import ContextMenu from './context/ContextMenu.ts';
import ElementStorage from './context/elements/ElementStorage.ts';
import Injector from './context/injector/Injector.ts';
import ElementData from './moveElement/elementData.ts';
const elementStorage = new ElementStorage();
const injector = new Injector(elementStorage);
const contextMenu = new ContextMenu(document.body,elementStorage,injector);
const elementData = new ElementData();

const onRightClick = (ev: MouseEvent) => {
	ev.preventDefault();
	contextMenu.open({ x: ev.clientX, y: ev.clientY },ev.target as HTMLElement);
};

const onLeftClick = (ev: MouseEvent) => {
	ev.preventDefault();
	contextMenu.close();
};


const onMouseDown = (ev: MouseEvent) => {
	const coords = { x: ev.clientX, y: ev.clientY }
	const element = elementStorage.Find(coords);
	if (element !== undefined) {
		elementData.setElement(element,coords);
	}
};


const onMouseUp = (ev: MouseEvent) => {
	ev.preventDefault();
	elementData.End();
};


const onMouseMove = (ev: MouseEvent) => {
	ev.preventDefault();
	const coords = { x: ev.clientX, y: ev.clientY }
	elementData.setCoordinates(coords);
	elementData.callMoveElement();
};




document.body.addEventListener('contextmenu', onRightClick);
document.body.addEventListener('click',onLeftClick);
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove',onMouseMove);
document.addEventListener('mouseup', onMouseUp );

