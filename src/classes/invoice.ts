import { HasFormatter } from '../interfaces/hasFormatter.js'
//classes 
export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        // console.log(this.details, 'inside')
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
