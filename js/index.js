function openTab(event, tabName)
{
	var i;
	var tabContent;
	var tabLinks;
	
	tabContent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabContent.length; i++)
	{
		tabContent[i].style.display = "none";
	}
	
	tabLinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tabLinks.length; i++)
	{
		tabLinks[i].className = tabLinks[i].className.replace(" active", "");
	}
	
	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";		
}

function validateForm()
{
	var first_name = document.forms["contact_form"]["first_name"].value;
	var last_name = document.forms["contact_form"]["last_name"].value;
	var email = document.forms["contact_form"]["email"].value;
	
	if (first_name == null || first_name == "")
	{
		alert("First name must be filled out.");
	}
	else if (last_name == null || last_name == "")
	{
		alert("Last name must be filled out.");
	}
	else if (/\d/.test(first_name))
	{
		alert("First name cannot contain numbers.");
	}
	else if (/\d/.test(last_name))
	{
		alert("Last name cannot contain numbers.");
	}
	else if (email == null || email == "")
	{
		alert("Email must be filled out.");
	}
	else if (email.indexOf("@") == -1)
	{
		alert("Email should have a '@' symbol.");
	}
	else if (email.lastIndexOf(".") < email.indexOf("@"))
	{
		alert("Please enter a valid email.");
	}
	else
	{
		return true;
	}
	return false;
}

openTab(event, "Home");