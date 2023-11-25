<!--Fahad Page-->

function register()
{
    var noProblems = Boolean(true);
    
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var mNumber = document.getElementById("mNumber").value;
    var email = document.getElementById("email").value;

    if(fName.length < 3)
    {
        alert("First name needs to be 3 letters or more");
        noProblems = Boolean(false);
    }
    
    if(lName.length < 3)
    {
        alert("Last name needs to be 3 letters or more");
        noProblems = Boolean(false);
    }
    
    if(mNumber.length != 8)
    {
        alert("Mobile number needs to be 8 digits");
        noProblems = Boolean(false);
    }

    if(noProblems == true)
    {
        localStorage.setItem("first_name", fName);
        localStorage.setItem("last_name", lName);
        localStorage.setItem("mobile_number", mNumber);
        localStorage.setItem("email", email);
        
        alert("Your account has been successfully created");
    }
}