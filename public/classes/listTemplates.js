export class listContainer {
    constructor(container) {
        this.container = container;
    }
    //method
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            //append to the beginning
            this.container.prepend(li);
        }
        else {
            //append to the end
            this.container.append(li);
        }
    }
}
