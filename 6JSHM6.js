const firstPoint = 55;
const secondPoint = 99;
let diapasonQuestion = prompt("введіть число для перевірки");
if (diapasonQuestion >= firstPoint && diapasonQuestion <= secondPoint){
    console.log("Число потрапляє в діапазон")
} else{
    console.log("Число не потрапляє в діапазон")
}