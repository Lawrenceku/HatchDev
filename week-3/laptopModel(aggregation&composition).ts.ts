// class Laptop{
//     keyboard:KeyBoard[] = []
//     nic: NetworkInterfaceCard
//     screen: Display
//     hardDisk: HardDisk
//     powerState:boolean = false
//     bitKing: BitKind
//     os: OS
// //update behavor

//     constructor(
//         bitKind: BitKind
//         display: Display
//         os: OsKind
//         ){

//     }
//     shutDown(){
//         this.powerState = false
//     }
//     turnOn(){
//         this.powerState=true
//     }
// }
// type BitKind= 'x32' | 'x64' | 'x86'
// type OsKind = 'linux' | 'Mac' | 'Windows'
// class OS{
//     osKind: OsKind
//     version: number 
// }

// class HardDisk{
//     size: string
//     type: 'ssd' | 'hdd'

// }

// class OperatingSystem{
    
// }

// class Display{
//     size:Array<number> 
// }

// class NetworkInterfaceCard{
//     name: string
// }

// class KeyBoard{
//     kind: KeyBoardKind
//     layout:KeyBoardLayout
// }

// type KeyBoardKind = 'in-built' | 'external'
// type KeyBoardLayout = 'Qwerty' | 'Qwertz' | 'Azerty'

// const myPc = new Laptop('x64',)


class Laptop {
    keyboard: KeyBoard[] = [];
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState: boolean = false;
    bitKind: BitKind;
    os: OS;

    constructor(
        bitKind: BitKind,
        display: Display,
        os: OsKind,
        hardDisk: HardDisk,
        nic: NetworkInterfaceCard,
        keyboard: KeyBoard
    ) {
        this.bitKind = bitKind;
        this.screen = display;
        this.os = new OS(os, 10); // Assuming a default version of 10 for the OS
        this.hardDisk = hardDisk;
        this.nic = nic;
        this.keyboard.push(keyboard);
    }

    shutDown() {
        this.powerState = false;
    }

    turnOn() {
        this.powerState = true;
    }
}

type BitKind = 'x32' | 'x64' | 'x86';
type OsKind = 'linux' | 'Mac' | 'Windows';

class OS {
    osKind: OsKind;
    version: number;

    constructor(osKind: OsKind, version: number) {
        this.osKind = osKind;
        this.version = version;
    }
}

class HardDisk {
    size: string;
    type: 'ssd' | 'hdd';

    constructor(size: string, type: 'ssd' | 'hdd') {
        this.size = size;
        this.type = type;
    }
}

class Display {
    size: number[];

    constructor(size: number[]) {
        this.size = size;
    }
}

class NetworkInterfaceCard {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class KeyBoard {
    kind: KeyBoardKind;
    layout: KeyBoardLayout;

    constructor(kind: KeyBoardKind, layout: KeyBoardLayout) {
        this.kind = kind;
        this.layout = layout;
    }
}

type KeyBoardKind = 'in-built' | 'external';
type KeyBoardLayout = 'Qwerty' | 'Qwertz' | 'Azerty';

const myPc = new Laptop(
    'x64', // BitKind
    new Display([1920, 1080]), // Display size
    'Windows', // OsKind
    new HardDisk('1TB', 'ssd'), // HardDisk size and type
    new NetworkInterfaceCard('Ethernet'), // NIC name
    new KeyBoard('in-built', 'Qwerty') // Keyboard kind and layout
);
