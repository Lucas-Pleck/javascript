const ages=[15,25,35,69,87,45,15,21,47,85,65];
const filter_age= ages.filter(function(toto){
    return toto>67
})
console.log(filter_age)




/* -------------------------------------------------------------------------- */
/*                                    exo 2                                   */
/* -------------------------------------------------------------------------- */
const nbrs =[12,4587,454,567,808,1212,32568,8982,3265]

const paires=nbrs.filter((nbr)=> !(nbr%2))

console.log(paires)
