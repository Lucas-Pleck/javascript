const users =[
    {
        id:1,
        name:"Jean"       
    },
    {
        id:2,
        name:"Luc"       
    },
    {
        id:3,
        name:"Max"       
    },
    {
        id:4,
        name:"Louis"       
    },
    {
        id:5,
        name:"Pepito"       
    },
]

let user = users.find(function(toto){
    return toto.name =="Pepito"
})

console.log(user)

let user_index = users.findIndex(function(toto){
    return toto.name =="Pepito"
})

console.log(user_index)




/* -------------------------------------------------------------------------- */
/*                           exo 2 : .somme & .every                          */
/* -------------------------------------------------------------------------- */


const ages=[35,12,19,26,11]

let adult_present=ages.some(function(toto){
    return toto >=18
})

console.log(adult_present)


/* -------------------------------------------------------------------------- */
/*                                     exo 3                                  */
/* -------------------------------------------------------------------------- */


let old_enough = ages.every(function(age){
    return age >=18
})


console.log(old_enough)