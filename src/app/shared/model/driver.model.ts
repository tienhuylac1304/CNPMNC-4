export class Driver {
    id: string
    name: string
    national_id: string
    age: number
    //set default param
    driving_status: string
    status: boolean
    create_dt: string
    //under view
    car_name: string
    bien_so: string
    seat: number
    constructor(
        id: string,
        name: string,
        national_id: string,
        age: number,
        driving_status: string,
        status: boolean,
        create_dt: string,
        car_name: string,
        bien_so: string,
        seat: number
    ) {
        this.id = id
        this.name = name
        this.national_id = national_id
        this.age = age
        this.driving_status = driving_status
        this.status = status
        this.create_dt = create_dt
        this.car_name = car_name
        this.bien_so = bien_so
        this.seat = seat
    }
}
