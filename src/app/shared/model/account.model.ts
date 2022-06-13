export class Account {
    public accId: string;
    public image: string;
    public name: string;
    public username: string;
    public password: string;

    constructor(
        accId: string,
        image: string,
        name: string,
        username: string,
        password: string
    ) {
        this.accId = accId;
        this.image = image;
        this.name = name;
        this.username = username;
        this.password = password;
    }
}
