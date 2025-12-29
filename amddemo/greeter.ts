export class Greeter {
    element:HTMLElement;
    span:HTMLElement;
    timeToken:number;

    constructor (element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is:";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerHTML = new Date().toUTCString();
    }

    start() {
        this.timeToken = setInterval(()=>this.span.innerHTML = new Date().toUTCString(),500);
    }

    stop() {
        clearInterval(this.timeToken);
    }
}
