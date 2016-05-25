function validate(){

  var contact = document.Registration.con.value;
  var email = document.Registration.email.value;
  var pwd = document.Registration.psd.value;
  var rpwd = document.Registration.rpsd.value;

  if(conval(contact) && evaluate(email) && valrpwd(pwd,rpwd)){
      document.getElementById("status").value="Success!";
     }
  return false;
}

//Contact
function conval(abc){

  var c = abc,clen = abc.length;
  console.log("contact:",c);

  if(clen == 10 && c[0]!=0){
    return true;
  }

  else{
    alert("Invalid number!");
    return false;
  }
      
}   

//Email
function evaluate(email){

  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  console.log('email', email);
  
  if(atpos<1&&(dotpos-atpos)<2){
    alert("Invalid Email")
    email.focus();
    return false; 
  }

  else{
    return true;
  }
       
}
//Password
function valrpwd(pwd,rpwd)
{
  var psd = pwd, rpsd = rpwd;
  console.log('Pass: ' + psd + '; retypePass: ' + rpsd);
  if(rpsd.match(psd)){
    return true;
  }
  else{
    alert("Passwords doesn't match!");
    rpwd.focus();
    return false;
  }
}     
