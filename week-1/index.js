//IMPERATIVE PROGRAMMING
const chl = ['arsenal', 'bayern', 'real-madr', 'man-city']
const disqualiied = []

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
