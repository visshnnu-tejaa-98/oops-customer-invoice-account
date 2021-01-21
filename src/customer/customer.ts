import customerConfiguration from "./customer-configuration"
import Invoice from "../invoice/invoice"
import invoiceConfiguration from "../invoice/invoiceConfiguration"
import accountConfiguration from "../account/account-configuration"

export default class Customer extends Invoice{
    customerID:number
    name:string
    discount:number

    constructor(CustomerData:customerConfiguration,Invoice:invoiceConfiguration,accountData:accountConfiguration){
        super(Invoice,accountData)
        this.customerID = CustomerData.customerID
        this.name = CustomerData.name
        this.discount = CustomerData.discount
    }

    getID(){
        console.log(this.customerID)
        return this.customerID
    }

    getName(){
        console.log(this.name)
        return this.name
    }

    getDiscount(){
        console.log(this.discount)
        return this.discount
    }

    setDiscount(discountValue:number){
        this.discount = discountValue
    }

    toString(){
        console.log(`${this.name} (${this.customerID})`)
        return `${this.name} (${this.customerID})`
    }
}