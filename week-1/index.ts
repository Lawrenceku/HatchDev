class Human {
    hasTwoHands : boolean 
   /*  hasHead : boolean ;
    hasLegs : boolean ;
    hasBrain: boolean ;
    canReason:boolean;
    name: string;
    age: number; */
}

class Art{
    colors : Array<string>
}

//IMPERATIVE PROGRAMMING
const chl: Array<string> = ['arsenal', 'bayern', 'real-madr', 'man-city']
const disqualiied: any = []

for (var i = 0; i< chl.length; i++){
    const club = chl[i]
    if(club == 'arsenal' || club == 'man-city' || club == 'bayern'){
        disqualiied.push(club)
    }
}

//DECCLARATIVE
chl.filter((club)=>{
    if(club == 'arsenal' || club == 'man-city' || club == 'bayern'){
        disqualiied.push(club)
    }
}
)
console.log(disqualiied)
