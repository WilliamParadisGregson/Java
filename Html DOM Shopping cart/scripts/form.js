function validate (i){

    i.preventDefault();

    var good=true;

    if(info.payment.value === ""){
            document.querySelector('#payment').innerHTML="*Please enter a method of payment";
            good= false;
        }

    if(info.firstName.value === ""){
            document.querySelector('#fnameWarning').innerHTML="*Please enter a First Name";
            good = false;
        }
    

    if(info.lastName.value === ""){
            document.querySelector('#lnameWarning').innerHTML="*Please enter a Last Name";
            good=false;
        }
    if(info.date.value === ""){
            document.querySelector('#dateWarning').innerHTML="*Please enter a date";
            good= false;
        }
    if(info.province.value === ""){
            document.querySelector('#provinceWarning').innerHTML="*Please select your province";
            good = false;
        }

    if(good){
        location.reload();
    }
    return good;
    
};



document.querySelector('#firstName').addEventListener("blur", function(){
    if(this.value !== ""){
        fnameWarning.innerHTML = "";
    }
});

document.querySelector('#lastName').addEventListener("blur", function(){
    if(this.value !== ""){
        lnameWarning.innerHTML = "";
    }
});

document.querySelector('#province').addEventListener("blur", function(){
    if(info.province.value !== ""){
        provinceWarning.innerHTML = "";
    }
});

document.querySelector('#date').addEventListener("blur", function(){
    if(info.date.value !== ""){
        dateWarning.innerHTML = "";
    }
});


document.querySelector('#debit').addEventListener("click", function(){
    payment.innerHTML = "";
});
document.querySelector('#credit').addEventListener("click", function(){
    payment.innerHTML = "";
});

document.querySelector('#paypal').addEventListener("click", function(){
    payment.innerHTML = "";
});



document.info.addEventListener("submit", validate);