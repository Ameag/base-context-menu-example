import Coordinates from '../interface/Coordinates';
import Element from './Element'
/**
 * Класс сохранающий в себе все созданные элементы на экране.
 */
class ElementStorage {

    private readonly elementStorage: Element[];
    
    constructor() {
        this.elementStorage = [];
    }

    public addElement = (element:Element) => {
        this.elementStorage.push(element)
    }
    /**
     * Удаляет из массива элемент по которому произошло нажатие мыши. 
     * @param coords Координаты мыши
     */
    public deleteElementAt = (coords: Coordinates) => {
        for (let i = 0; i < this.elementStorage.length; i++) {
            const element = this.elementStorage[i];
            const rect = element.getRect();
            if (coords.x >= rect.left && coords.x <= rect.right && coords.y >= rect.top && coords.y <= rect.bottom) {
                this.elementStorage.splice(i, 1);
                element.deleteElement();
                break;
            }
        }
    }
    /**
     * По координатам мыши находит элемент на который произошло нажатие и возвращает его 
     * @param coords Координаты мыши
     */
    public findElement = (coords: Coordinates):Element | undefined => this.elementStorage.find(elem =>{
        const rect = elem.getRect();
        if (coords.x >= rect.left && coords.x <= rect.right && coords.y >= rect.top && coords.y <= rect.bottom) {
            return true;
        }
    }) 
    
}
export default ElementStorage;