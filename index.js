const priceKm = 0.21;
const juniorDisc = 20;
const seniorDisc = 40;
let distance = prompt("how many kl are you traveling ")
let age = prompt("whats your age");




const calc = ((distance * priceKm)*juniorDisc);



const find = ((distance * priceKm)*seniorDisc);


if (age < 18){
    alert(calc)


}

if (age >65){
    alert(find)
}