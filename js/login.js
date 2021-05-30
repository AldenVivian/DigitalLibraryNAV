function validate()
{
	
	var username = document.getElementById("user").value;
	var password1 = document.getElementById("pass").value;
	
	if( username == "admin" && password1 == "admin")
	{
	
	window.location = "admin.html"; // Redirecting to admin page.
	return false;
	}
	else if(username == "stud" && password1 == "stud")
	{
		
		window.location = "student.html";//redirecting to student page
		return false;
	}
	else
	{
		
		alert("login failed");
		window.location = "loginpage.html";//redirecting to login page;
		return false;
	}
}

