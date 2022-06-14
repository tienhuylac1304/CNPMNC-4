export class Contract {
    id: string
    travel: string
    driver: string
    create_date: string
    create_time: string
    running_status: string
    status: boolean
    constructor(
        id: string,
        travel: string,
        driver: string,
        create_date: string,
        create_time: string,
        running_status: string,
        status: boolean
    ) {
        this.id = id
        this.travel = travel
        this.driver = driver
        this.create_date = create_date
        this.create_time = create_time
        this.running_status = running_status
        this.status = status
    }
}