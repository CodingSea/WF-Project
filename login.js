/* Fahad JS script */

function register()
{
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var mNumber = document.getElementById("mNumber").value;
    var email = document.getElementById("email").value;

    if(fName.length < 3)
    {
        alert("First name needs to be 3 letters or more");
    }
    else if(lName.length < 3)
    {
        alert("Last name needs to be 3 letters or more");
    }
    else if(mNumber.length != 8)
    {
        alert("Mobile number needs to be 8 digits");
    }
    else
    {
        sessionStorage.setItem("first_name", fName);
        sessionStorage.setItem("last_name", lName);
        sessionStorage.setItem("mobile_number", mNumber);
        sessionStorage.setItem("email", email);
        
        alert("Your account has been successfully created");
    }
}

function getUsername()
{
    if(sessionStorage.hasOwnProperty("first_name") && sessionStorage.hasOwnProperty("last_name"))
    {
        var username = sessionStorage.getItem("first_name") + " " + sessionStorage.getItem("last_name");

        document.getElementById("username").innerHTML = username;
    }
    
    
}