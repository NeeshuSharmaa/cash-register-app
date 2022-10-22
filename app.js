const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message")
const noOfNotes =document.querySelectorAll(".no-of-notes");

const availableNotes =[2000,500,100,50,10,5,1];

checkButton.addEventListener("click",function validateBillAndCashAmount(){
    billA=billAmount.value;
    cashG=cashGiven.value;
    if(billA && cashG){
        if (Number(billA)>0){
            hideMessage();
            if (Number(cashG) >= Number(billA)){
                const amountToBeReturned = Number(cashG)- Number(billA);
                calculateChange(amountToBeReturned); 
            }
            else {
               showMessage("Do you wanna wash plates? →_→") 
            }
        }
        else {
            showMessage("Invalid Bill Amount")   
        }

    }
    else{
        showMessage("Please input both the values!!")
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