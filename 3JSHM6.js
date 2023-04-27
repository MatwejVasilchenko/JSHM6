const x1 = 10; 
const x2 = 30;
const number = 45; 
let answer;

if ( number <= x1){
    let answer = "число входить в проміжок до x1";
    console.log(answer);
} else if (number >= x1){
    let answer = "число входить в проміжок після x1";
    console.log(answer);
} else if (number >= x1 && number <= x2){
    let answer = "число входить в проміжок від x1 до х2";
    console.log(answer);
} else if (number <= x1 || number >= x2){
    let answer = "число входить в проміжок до х1 або після х2";
    console.log(answer);
}





