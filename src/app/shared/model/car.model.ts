export class Car {
    car_id: string
    car_name: string
    bien_so: string
    seat: number
    constructor(
        car_id: string,
        name: string,
        bien_so: string,
        seat: number) {
        this.car_id = car_id
        this.car_name = name
        this.bien_so = bien_so
        this.seat = seat
    }
}