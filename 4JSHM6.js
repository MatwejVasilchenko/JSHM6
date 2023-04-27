const isOnline = false;
const isFriend = true; 
const isDnd = false;
const youCan = "Ви можетет відкрити чат з користувачем"
const youCant = "Ви не можете відкрити чат з користувачем"
if (isOnline === true && isFriend === true && isDnd === false){
    alert(youCan)
    console.log(youCan)
} else{
    alert(youCant)
    console.log(youCant)
}