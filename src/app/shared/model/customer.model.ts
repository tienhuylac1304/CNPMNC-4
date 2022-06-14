export class Customer {
  id: string
  name: string
  national_id: string
  age: number
  constructor(
    id: string,
    name: string,
    national_id: string,
    age: number,
  ) {
    this.id = id
    this.name = name
    this.national_id = national_id
    this.age = age
  }

}
