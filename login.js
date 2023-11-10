var email=document.forms['form']['email'];
var password=document.forms['form']['pass'];

var email_error=document.getElementById('email_error');
var pass_error=document.getElementById('pass_error');

email.addEventListener('textInput',email_verify());
password.addEventListener('textInput',pass_verify());


function login(){
    if(email.value.length <9){
        email.style.border="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
    else{
        email.style.border="1px solid silver";
        email_error.style.display="none";
    }
    if(password.value.length <6){
        password.style.border="1px solid red";
        pass_error.style.display="block";
        password.focus();
        return false;
    }
    else{
        password.style.border="1px solid silver";
        pass_error.style.display="none";
    }

}
