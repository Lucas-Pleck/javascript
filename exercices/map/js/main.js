const numbers =[1,2,3,4,5];
const double_numbers=[];

for (i in numbers){
    double_numbers.push(numbers[i]*2)
}
console.log(double_numbers)

const names=["Jerome","Lucas","Manu","Theo"];
const full_name=[];

for (i in names){
    full_name.push(names[i] + " Dupond");
}

console.log(full_name)



const full_names=names.map(function(toto){
    return toto + " Dupond";
})

console.log(full_names);

const images =[
    {height:'34px',width:'67px',color:'red'},
    {height:'54px',width:'45px',color:'blue'},
    {height:'74px',width:'56px',color:'yellow'},
    {height:'24px',width:'20px',color:'green'},
    {height:'14px',width:'12px',color:'orange'},
    {height:'94px',width:'6px',color:'black'},
]


const images_height=images.map(function(toto){
    return toto.height;
})

console.log(images_height)









function capitalize(string){
    const cleaned_string = string.replace(/\s{2,}/, " ")
    const splitted_string = cleaned_string.split(" ")
    // splitted_string ["hello", "i'm" etc]
    const characters_upper = splitted_string.map(function(word,index){
        if(index%2){
            word.charAt(0).toUpperCase();
            return word;
        }
        else return word.toLowerCase();
    })
    const new_string = characters_upper.join(' ');
    return new_string;
}

console.log(capitalize("Hello I'm you worst nightmare for today"))



function swapWord(string){
    return string.split(" ").map((word,index) => index%2 ? word.toUpperCase() : word.toLowerCase()).join(" ");
}
console.log(swapWord("Hello I'm you worst nightmare for today"))