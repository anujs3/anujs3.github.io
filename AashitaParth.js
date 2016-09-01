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

function determineTimeLeft()
{
		var today = new Date();
		var weddingDate = new Date("09/03/2017");
		var time = weddingDate - today;
		
		if (time <= 0)
		{
			// gold = #CFB53B
			document.getElementById("timeLeft").innerHTML = "000" + " : " + "00" + " : " + "00" + " : " + "00";
			return;
		}

		var days = Math.floor(time/(1000*60*60*24));
		var remainder1 = time%(1000*60*60*24);
		var hours = Math.floor(remainder1/(1000*60*60));
		var remainder2 = remainder1%(1000*60*60);
		var minutes = Math.floor(remainder2/(1000*60));
		var remainder3 = remainder2%(1000*60);
		var seconds = Math.floor(remainder3/(1000));
		
		if (days < 100)
		{
			days = "0" + days;
		}
		else if (days < 10)
		{
			days = "00" + days;
		}
		
		if (hours < 10)
		{
			hours = "0" + hours;
		}
		
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}
		
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}

		document.getElementById("timeLeft").innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;
}

function validateForm()
{
	var first_name = document.forms["rsvp"]["first_name"].value;
	var last_name = document.forms["rsvp"]["last_name"].value;
	var email = document.forms["rsvp"]["email"].value;
	var attending = document.forms["rsvp"]["choice"].value;
	
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
	else if (attending == null || attending == "")
	{
		alert("Select if you are attending or not.");
	}
	else
	{
		return true;
	}
	return false;
}

// document.getElementById("main_pic").style.width = "" + (window.outerWidth-25) + "px";
// document.getElementById("main_pic").style.height = "" + (window.outerWidth-25) + "px";

setInterval(determineTimeLeft, 1000);

var music = document.getElementById("sound");
music.play();

openTab(event, "Home");