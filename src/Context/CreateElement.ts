class CreateElement {
    private readonly root: HTMLElement;
    private readonly image: HTMLImageElement;
    constructor(rootElement: HTMLElement) {
        this.root = rootElement;
        this.image = document.createElement('img');
        this.image.src = 'https://sun9-44.userapi.com/impg/Kw435DsqNXqjyup3pk-hBIp2-rFPDTjJ7Jg36w/HUlJ--lEmzs.jpg?size=144x96&quality=96&sign=e04d4e16ea2aa08801c43953773a337c&type=album';
        this.root.append(this.image);
    }
    
}
export default CreateElement;