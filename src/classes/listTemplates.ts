// 1. Register list container in the constructor
// 2. Create a render method to render a new 'li' to the container 
// 3. Accept arguments: invoice or payment, heading, position
// 4. Create html template (li h4 p)
// 5. Add li template to star/end of the list.
import { HasFormatter } from "../interfaces/hasFormatter.js";
export class listContainer {
    constructor(
        private container: HTMLUListElement
    ){}
    //method
    render(item:HasFormatter, heading: string, pos: 'start'|'end') {  
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        h4.innerText = heading
        li.append(h4)

        const p = document.createElement('p')
        p.innerText = item.format()
        li.append(p)

        if(pos === 'start'){
            //append to the beginning
            this.container.prepend(li) 
        } else {
            //append to the end
            this.container.append(li)
        }
    }
}