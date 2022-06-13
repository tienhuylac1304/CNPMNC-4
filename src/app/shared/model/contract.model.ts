export class contract {
    id: string
    customer: string
    driver: string
    from: string
    to: string
    create_dt: string
    distance: number
    price: number
    running_status: string
    status: boolean
    constructor(
        id: string,
        customer: string,
        driver: string,
        from: string,
        to: string,
        create_dt: string,
        distance: number,
        price: number,
        running_status: string,
        status: boolean
    ) {
        this.id = id
        this.customer = customer
        this.driver = driver
        this.from = from
        this.to = to
        this.create_dt = create_dt
        this.distance = distance
        this.price = price
        this.running_status = running_status
        this.status = status
    }
}