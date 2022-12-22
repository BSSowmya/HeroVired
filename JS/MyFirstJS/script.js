console.log("This is my js");



function getValue1(event){
    alert("here")
     var amt= document.getElementById("amt").value;
    var t = document.getElementById("t").value
    var ri = document.getElementById("ri").value
    simpleInterest(amt,t,ri)
    // document.getElementById("total").innerHTML ="INR" + amount;
     

}
function simpleInterest (p,t,r){
    let amount=0;
    var si=0;
    si = (p*t*r)/(12*100)
    console.log("SI = " +si) 
    amount = p+si;
    console.log("AMT = " +amount)
    
}

