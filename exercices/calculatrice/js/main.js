function calculator() {
    var again="yes";
    while(again=="yes"){
        var nbr1 = prompt("Select the first number:");
        var operator = prompt("Select your operator: + - / or *");
        var nbr2 = prompt("Select the second number:");
        if(operator === "+") {
            alert(parseInt(nbr1)+parseInt(nbr2))
           } else if(operator === "-") {
            alert(nbr1 - nbr2)
           } else if(operator === "/") {
               if(nbr1==0){
                alert("result = 0 dummy")
               }
               else if(nbr2==0){
                alert("result impossible...bug...")
               }
               else{
                alert(nbr1 / nbr2)
               }
           } else if(operator === "*") {
               if(nbr1 == 0 || nbr2 == 0) {
                   alert("result = 0 dummy")
               }
               else{
                alert(nbr1 * nbr2)
               }
            
           } else {
            alert("Type a correct operator and/or numbers")
           }
        var again=prompt('Do you want to choose an other object: yes/no');
      
    }
}
calculator();