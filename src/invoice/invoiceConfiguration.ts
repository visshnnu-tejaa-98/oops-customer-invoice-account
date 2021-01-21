import customerConfiguration from "../customer/customer-configuration";

export default interface invoiceConfiguration{
    invoiceID:number
    customer:customerConfiguration
    amount:number
}