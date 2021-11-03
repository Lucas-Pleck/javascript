const grade_0=59 // plutot faible 
const grade_1=69 // tu dois faire des efforts 
const grade_2=79 // pas maaaaaal
const grade_3=89 // greaaaaat !!
var grade=[]
var sum = 0;



function moyenne() {
    var again="yes";
    while(again=="yes"){
        var grade_temp = parseInt(prompt("Enter your note from 0 to 100:"));
        grade.push(grade_temp);
        var again=prompt('Do you want to enter more notes: yes/no');
    }
    for (var i = 0; i < grade.length; i++) {
        sum += grade[i];
    }
    var moyenne =sum/grade.length
    if(moyenne<60){
        alert("weak = "+moyenne)
    }
    else if(moyenne<70){
        alert("Must do better = "+moyenne)
    }
    else if(moyenne<80){
        alert("Not bad = "+moyenne)
    }
    else if(moyenne<90){
        alert("Greeaaaaat = "+moyenne)
    }
    else{
        alert("Incredible = "+moyenne)
    }
}
moyenne()