const numbers =[10,20,30];
// let somme=0;

// for(number in numbers){
// somme+=numbers[number]
// }

// console.log(somme)

const somme=numbers.reduce(function(total,nbr){
    return total+nbr;
}, 0);







console.log(somme);





