import { Customer } from "../shared/model/customer.model";

export class CustomerService {

    constructor() { }
    customers: Customer[] = [
        new Customer(
            "2",
            "Thanh",
            "3333333",
            22
        ),
        new Customer(
            "1",
            "Huy",
            "0123456789",
            22
        ),
        new Customer(
            "3",
            "Hieu",
            "2222222222",
            22
        ),
    ]
    getCustomer(id: string) {
        return this.customers.find(c => c.id == id)
    }
}