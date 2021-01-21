import customerConfiguration from "../customer/customer-configuration"
import accountConfiguration from "./account-configuration"

export default class Account{
    accountID:number
    customer:customerConfiguration
    balance:number

    constructor(accountData:accountConfiguration){
        this.accountID = accountData.accountID
        this.customer = accountData.customer
        this.balance = accountData.balance
    }

    getID(){
        console.log(this.accountID)
        return this.accountID
    }

    getCustomer(){
        console.log(this.customer)
        return this.customer
    }

    getBalance(){
        console.log(this.balance)
        return this.balance
    }

    setBalance(balanceValue:number){
        this.balance = balanceValue
    }

    toString(){
        console.log(`${this.customer.name}(${this.accountID})  balacne:$${this.balance}`)
        return `${this.customer.name}(${this.accountID})  balacne:$${this.balance}`
    }

    getCustomerName(){
        console.log(this.customer.name)
        return this.customer.name
    }

    deposit(amount:number){
        this.balance = this.balance + amount; 
    }

    withdraw(amount:number){
        if(this.balance > amount){
            this.balance = this.balance - amount
        }else{
            console.log("amount withdrawn exceeds the current balance")
        }
    }
}