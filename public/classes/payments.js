//classes 
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // console.log(this.details, 'inside')
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
