function register()
{
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var mNumber = document.getElementById("mNumber").value;
    var email = document.getElementById("email").value;
    
    localStorage.setItem("first_name", fName);
    localStorage.setItem("last_name", lName);
    localStorage.setItem("mobile_number", mNumber);
    localStorage.setItem("email", email);
}