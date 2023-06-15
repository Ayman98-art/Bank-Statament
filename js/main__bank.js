// global var
var text = document.getElementById("text")
// ******************************************* //
// Bank Misr
var misrBtn = document.getElementById("misr");
var btnMonths1 = document.getElementById("btnMonths1");
var monThree = document.getElementById("monThree")
var monSix = document.getElementById("monSix")

misrBtn.addEventListener("click", closeMonth1)
function closeMonth1(){
    btnMonths1.style.display="block"
    text.style.color="#ffda1491"
    text.innerHTML=Number(`${15000}`)+"  $";
}
monThree.addEventListener("click",function(){
    var replace1 = Number(15000) * Number(0.15)
    var replace2 = Number(15000) + replace1
    var replace3 = replace2 / Number(3)
    text.innerHTML= replace3 + "   $"; 
})
monSix.addEventListener("click",function(){
    var replace1 = Number(15000) * Number(0.15)
    var replace2 = Number(15000) + replace1
    var replace3 = replace2 / Number(6)
    text.innerHTML= replace3 + "   $"; 
})
// *********************************************** //
// NationalBank
var nationalBank = document.getElementById("nationalBank")
var btnMonths2 = document.getElementById("btnMonths2")
var monThree3 = document.getElementById("monThree3")
var monSix6 = document.getElementById("monSix6")
var monNine9 = document.getElementById("monNine9")

nationalBank.addEventListener("click", closeMonth2)
function closeMonth2(){
    btnMonths2.style.display="block"
    text.style.color="green"
    text.innerHTML=Number(`${15000}`)+"  $";
}
monThree3.addEventListener("click",function(){
    var replace1 = Number(15000) * Number(0.15)
    var replace2 = Number(15000) + replace1
    var replace3 = replace2 / Number(3)
    text.innerHTML= replace3 + "   $"; 
})
monSix6.addEventListener("click",function(){
    var replace1 = Number(15000) * Number(0.15)
    var replace2 = Number(15000) + replace1
    var replace3 = replace2 / Number(6)
    text.innerHTML= replace3 + "   $"; 
})
monNine9.addEventListener("click",function(){
    var replace1 = Number(15000) * Number(0.15)
    var replace2 = Number(15000) + replace1
    var replace3 = replace2 / Number(9)
    text.innerHTML= replace3 + "   $"; 
})
// *********************************************** //
// Abu_Dhabi
var abuDhabi = document.getElementById("abuDhabi")
var btnMonths3 = document.getElementById("btnMonths3")
var monTh3 = document.getElementById("monTh3")
var monTh6 = document.getElementById("monTh6")
var monTh9 = document.getElementById("monTh9")
var monTh12 = document.getElementById("monTh12")

abuDhabi.addEventListener("click", closeMonth3)
function closeMonth3(){
    btnMonths3.style.display="block"
    text.style.color="#ee141f"
    text.innerHTML=Number(`${15000}`)+"  $";
}
monTh3.addEventListener("click",function(){
    var replace1 = Number(15000) * Number(0.15)
    var replace2 = Number(15000) + replace1
    var replace3 = replace2 / Number(3)
    text.innerHTML= replace3 + "   $"; 
})
monTh6.addEventListener("click",function(){
    var replace1 = Number(15000) * Number(0.15)
    var replace2 = Number(15000) + replace1
    var replace3 = replace2 / Number(6)
    text.innerHTML= replace3 + "   $"; 
})
monTh9.addEventListener("click",function(){
    var replace1 = Number(15000) * Number(0.15)
    var replace2 = Number(15000) + replace1
    var replace3 = replace2 / Number(9)
    text.innerHTML= replace3 + "   $"; 
})
monTh12.addEventListener("click",function(){
    var replace1 = Number(15000) * Number(0.15)
    var replace2 = Number(15000) + replace1
    var replace3 = replace2 / Number(12)
    text.innerHTML= replace3 + "   $"; 
})
// *********************************************** //
// Banque_du_caire
var banqueCaire = document.getElementById("banqueCaire");
var btnMonths4 = document.getElementById("btnMonths4");
var monS6 = document.getElementById("monS6")
var monS9 = document.getElementById("monS9")

banqueCaire.addEventListener("click", closeMonth4)
function closeMonth4(){
    btnMonths4.style.display="block"
    text.style.color="#f36821"
    text.innerHTML=Number(`${15000}`)+"  $";
}
monS6.addEventListener("click",function(){
    var replace1 = Number(15000) * Number(0.15)
    var replace2 = Number(15000) + replace1
    var replace3 = replace2 / Number(6)
    text.innerHTML= replace3 + "   $"; 
})
monS9.addEventListener("click",function(){
    var replace1 = Number(15000) * Number(0.15)
    var replace2 = Number(15000) + replace1
    var replace3 = replace2 / Number(9)
    text.innerHTML= replace3 + "   $"; 
})

