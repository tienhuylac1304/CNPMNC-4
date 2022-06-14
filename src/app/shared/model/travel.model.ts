export class Travel {
    id: string
    customer: string
    from: string
    to: string
    distance: number
    price: number
    create_time: string
    create_date: string
    travel_status: string
    status: boolean
    constructor(id: string, customer: string, from: string, to: string, create_date: string, create_time: string, distance: number, price: number, travel_status: string, status: boolean) {
        this.id = id
        this.customer = customer
        this.from = from
        this.to = to
        this.distance = distance
        this.create_date = create_date
        this.create_time = create_time
        this.travel_status = travel_status
        this.status = status
        this.price = price
    }
}