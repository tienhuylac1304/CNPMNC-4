export class Car {
  public ID: number;
  public IMG: string;
  public CAR_NAME: string;
  public LICENE_PLATE: string;
  public CAR_STATUS: string;
  public CAR_TYPE_ID: number;
  public CAR_TYPE_NAME: string

  constructor(
    id: number,
    name: string,
    img: string,
    bienSo: string,
    status: string,
    typeID: number,
    typeName: string,
  ) {
    this.ID = id;
    this.IMG = img;
    this.CAR_NAME = name;
    this.LICENE_PLATE = bienSo;
    this.CAR_STATUS = status;
    this.CAR_TYPE_ID = typeID;
    this.CAR_TYPE_NAME = typeName
  }
}
