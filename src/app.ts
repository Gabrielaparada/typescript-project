
import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payments.js'
import { HasFormatter } from './interfaces/hasFormatter.js'
import { listContainer } from './classes/listTemplates.js'


//list template instance

//grabbing ul form html
const ul = document.querySelector('ul')!
//creating a new listcontainer instance
const list = new listContainer(ul)


const form = document.querySelector('.new-item-form') as HTMLFormElement

//inputs 
const types = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event)=> {
    e.preventDefault()
    let doc: HasFormatter

    //defining tuple
    let values: [string, string, number]
    //passing values 
    values = [toFrom.value, details.value, amount.valueAsNumber]

    //checking the type value to render either invoice or payment
    if (types.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        // we can spread the tuple directly and avoid robust repetitive code
        doc = new Payment(...values)
        // doc = new Payment (toFrom.value, details.value, amount.valueAsNumber)
    }
    //using instance to access render method and  display content on the page
    list.render(doc, types.value, 'end')

})
