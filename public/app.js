import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payments.js';
import { listContainer } from './classes/listTemplates.js';
//list template instance
//grabbing ul form html
const ul = document.querySelector('ul');
//creating a new listcontainer instance
const list = new listContainer(ul);
const form = document.querySelector('.new-item-form');
//inputs 
const types = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    //checking the type value to render either invoice or payment
    if (types.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    //using instance to access render method and  display content on the page
    list.render(doc, types.value, 'end');
});
