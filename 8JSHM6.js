let userFirstName = prompt("What your first name?");
let userLastName = prompt("what your last name?")
let lenghtUserFirstName = userFirstName.length;
let lenghtUserLastName = userLastName.length;
if (lenghtUserFirstName > 4 && lenghtUserLastName > 5){
    console.log(lenghtUserFirstName + lenghtUserLastName);
} else{
    console.log("ОЙ, неможливо виконати умову");
}