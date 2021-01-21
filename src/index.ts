import customerConfiguration from "./customer/customer-configuration"
import Customer from "./customer/customer"
import invoiceConfiguration from "./invoice/invoiceConfiguration"
import Invoice from "./invoice/invoice"
import accountConfiguration from "./account/account-configuration"
import Account from "./account/account"





(<HTMLButtonElement>document.getElementById("submit")).addEventListener("click",function(){
    let customerID = +((<HTMLInputElement>document.getElementById("customerID")).value)
    let name = (<HTMLInputElement>document.getElementById("name")).value
    let discount = +((<HTMLInputElement>document.getElementById("discount")).value)

    let invoiceID = +((<HTMLInputElement>document.getElementById("invoiceID")).value)
    let amount = +((<HTMLInputElement>document.getElementById("amount")).value)

    let accountID = +((<HTMLInputElement>document.getElementById("accountID")).value)
    let balance = +((<HTMLInputElement>document.getElementById("balance")).value)

    console.log(customerID,name,discount,invoiceID,amount,accountID,balance)

    let customerObject:customerConfiguration = {customerID,name,discount}
    let invoiceObject:invoiceConfiguration = {invoiceID,customer:customerObject,amount}
    let accountObject:accountConfiguration = {accountID,customer:customerObject,balance}

    let customer = new Customer(customerObject,invoiceObject,accountObject)
    let invoice = new Invoice(invoiceObject,accountObject)
    let account = new Account(accountObject)

    customer.getID()
    customer.getName()
    customer.getDiscount()
    customer.toString()

    invoice.getID()
    invoice.getCustomer()
    invoice.getCustomerName()
    invoice.getAmount()
    invoice.getAmountAfterDiscount();


    account.getID()
    account.getCustomer()
    account.getBalance()
    account.toString()
    account.getCustomerName()
    account.deposit(250)
    account.withdraw(100)
    account.getBalance()

})


