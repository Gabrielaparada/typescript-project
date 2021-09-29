import { HasFormatter } from "../interfaces/hasFormatter.js"
//classes 
export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        // console.log(this.details, 'inside')
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}
