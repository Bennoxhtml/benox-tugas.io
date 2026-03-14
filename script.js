function convert(){

let number=document.getElementById("number").value
let type=document.getElementById("type").value
let decimal

if(type=="desimal")
decimal=parseInt(number)

else if(type=="biner")
decimal=parseInt(number,2)

else if(type=="oktal")
decimal=parseInt(number,8)

else if(type=="heksa")
decimal=parseInt(number,16)

document.getElementById("desimal").innerText=decimal
document.getElementById("biner").innerText=decimal.toString(2)
document.getElementById("oktal").innerText=decimal.toString(8)
document.getElementById("hexa").innerText=decimal.toString(16).toUpperCase()
document.getElementById("romawi").innerText=toRoman(decimal)

}

function toRoman(num){

let val=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
let sym=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

let roman=""

for(let i=0;i<val.length;i++){

while(num>=val[i]){
roman+=sym[i]
num-=val[i]
}

}

return roman
}