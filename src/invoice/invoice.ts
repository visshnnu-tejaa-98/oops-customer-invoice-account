import accountConfiguration from "../account/account-configuration"
import customerConfiguration from "../customer/customer-configuration"
import invoiceConfiguration from "./invoiceConfiguration"
import Account from "../account/account"

export default class Invoice extends Account{
    invoiceID:number
    customer:customerConfiguration
    amount:number
    
    constructor(invoiceData:invoiceConfiguration,accountData:accountConfiguration){
        super(accountData)
        this.invoiceID = invoiceData.invoiceID
        this.customer = invoiceData.customer
        this.amount = invoiceData.amount
    }

    getID(){
        console.log(this.invoiceID)
        return this.invoiceID
    }

    getCustomer(){
        console.log(this.customer)
        return this.customer
    }

    setCustomer(customerValue:customerConfiguration){
        this.customer = customerValue
    }

    getAmount(){
        console.log(this.amount)
        return this.amount
    }

    setAmount(amountValue:number){
        this.amount = amountValue
    }

    getCustomerName(){
        console.log(this.customer.name)
        return this.customer.name
    }

    getAmountAfterDiscount(){
        console.log(this.amount - (this.amount * this.customer.discount) / 100)
        return (this.amount * this.customer.discount) / 100
    }
}