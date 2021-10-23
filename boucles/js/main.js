/*
function findNbr() {
    var again="yes";
    while(again=="yes"){
        const nbr_min = Math.floor((Math.random() * 10) + 1);
        const nbr_max = Math.floor((Math.random() * 100) + 1);
        console.log(nbr_min,nbr_max)
        let nbr = parseInt(prompt('Find the number in the range: '));  
        while(nbr<nbr_min || nbr>nbr_max ){
            if (nbr<nbr_min){
                nbr = parseInt(prompt('Too low! Try Again! Find the number in the range: '));
            }
            else{
                nbr = parseInt(prompt('Too high! Try Again! Find the number in the range: '));
            }
        }
        alert('Correct answer');
        var again=prompt('Do you want to play again: yes/no'); 
    }
}
findNbr();
*/




/*
for (var counter=0; counter<100; counter++){
    if (counter%4===0&&counter%7===0){
        console.log(counter + "est multiple de 4 et de 7")
    }
    else if (counter%7===0){
        console.log(counter + "est multiple de 7")
    }
    else if (counter%4===0){
        console.log(counter + "est multiple de 4")
    }
    else{
        console.log(counter)
    }
}
*/
var pros=["voo","technocite","aramis"]
var amis=["pas maxim","pas manu","pas jerome"]
var temp=[]

function print_array(){
    for(i=0;i<pros.length;i++){
        temp.push(pros[i]);
    }
    for(i=0;i<amis.length;i++){
        temp.push(amis[i]);
    }
    alert(temp)
}
print_array()

