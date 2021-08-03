
    function login(){   
    var e=document.getElementById("e1").value;  
    var p=document.getElementById("p1").value;  
   
    //Code for password validation  
            var letters = /^[A-Za-z]+$/;  
            var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
    //other validations required code  
    if(e==''||p==''){  
    alert("Enter each details correctly");  
    }  
    else if (!email_val.test(e))  
            {  
                alert('Invalid email format please enter valid email id');  
            }  
    
    else if(document.getElementById("p1").value.length > 12)  
    {  
    alert("Password maximum length is 12");  
    }  
    else if(document.getElementById("p1").value.length < 6)  
    {  
    alert("Password minimum length is 6");  
    }  
    else{  
    window.location="file:///C:/my%20html%20file/Login%20CV/cvfile/index.html";  
    }  
    }  
    
