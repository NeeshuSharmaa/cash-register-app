const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message")
const noOfNotes =document.querySelectorAll(".no-of-notes");

availableNotes =[2000,500,100,50,10,5,1];

checkButton.addEventListener("click",function validateBillAndCashAmount(){
    
    if (billAmount.value>0){
        hideMessage();
        if (cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned); 
        }
        else {
           showMessage("Do you wanna wash plates?") 
        }
    }
    else {
        showMessage("Invalid Bill Amount")   
    }
});
function calculateChange(amountToBeReturned){
    for (let i=0; i<availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned/availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}
function hideMessage() {
    message.style.display="none";
}
function showMessage(msg) {
    message.style.display ="block"
    message.innerText= msg;
}