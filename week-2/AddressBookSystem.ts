/* const contacts = [
    {
        name: 'Lawrence',
        phoneNumber: '08117678133',
        address : 'Akoka Yaba, Lagos'
    },
    {
        name: 'Yetunde',
        phoneNumber: '08023266896',
        address : 'Imowonla Ikorodu, Lagos'
    },
    {
        name: 'Ezekiel',
        phoneNumber: '09065382788',
        address : 'St Finbarrs Akoka, Lagos'
    }
]
 */
/* 
class addressBook{
     private name: string 
     private phoneNumber: string 
     private address: string 
     constructor(name: string, phoneNumber:string, address:string){
        name = this.name
        phoneNumber = this.phoneNumber
        address = this.address
     }
}

class Lawrence extends addressBook{
    constructor(name: string, phoneNumber:string, address:string){
     
    }
}

class Yetunde extends addressBook{
    constructor(name: string, phoneNumber:string, address:string){
       name = this.name
       phoneNumber = this.phoneNumber
       address = this.address
    }
}

const Lawrence = new addressBook('Lawrence','08117678133','Akoka Yaba, Lagos')
const Yetunde = new addressBook( 'Yetunde', '08023266896','Imowonla Ikorodu, Lagos')
const Ezekiel = new addressBook( 'Ezekiel','09065382788','St Finbarrs Akoka, Lagos')
 */




class Contact {
    private name: string;
    private phoneNumber: string;
    private address: string;

    constructor(name: string, phoneNumber: string, address: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    getName(): string {
        return this.name;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    getAddress(): string {
        return this.address;
    }
}

class Lawrence extends Contact {

    constructor(name: string, phoneNumber: string, address: string) {
        super(name, phoneNumber, address);
    }

}

class Eniola extends Contact {

    constructor(name: string, phoneNumber: string, address: string) {
        super(name, phoneNumber, address);
    }

}

const Eniolas = new Eniola('Eniola', '1234567890', '123 Oluwole Street');

const Lawrences = new Lawrence('Lawrence', '08117678133', '456 Ikorod Road');

