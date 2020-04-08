	function RangeOut(val)
	{
		document.getElementById("textInput").value=val;
	}
	
	function NameValid(Name)
	{
		
		reg=/[0-9]/
		if (reg.test(Name))
		{
			alert('You cannot insert number in name field.')
		}
		
	}
	
	function ContactValid(Cont)
	{
		reg=/^\d{11}/
		reg2=/[a-zA-Z]/
		if (reg.test(Cont) | reg2.test(Cont))
		{
			alert('You cannot insert more than 10 digits or enter characters')
		}
	}

	function IMG()
	{
		document.getElementById("img1").border='5'
		document.getElementById("img2").border='5'
		document.getElementById("img3").border='5'
	}
	
	function Category(val)
	{
		document.getElementById("image").value=val	;
	}
	
	function check()
	{
		with(document.forms.form1)
		{
			if(Name.value=='')
			{
				alert('Please fill the name field.')
				
			}
			
			else
			{
				alert('You are good to Book Now.')
				
			}
			
		}
		
	}
	function check1()
	{
		var returnval ;
		with(document.forms.form1)
		{
			if(Name.value=='')
			{
				returnval = false
			}
			
			else
			{
				returnval = true
			}
			return returnval ;
		}
		
	}
	
	function win()
	{		var val=check1() ;
			
				MyWindow = window.open('', 'Your details', 'titlebar=0 status=0, toolbar=0, location=0, menubar=0, directories=0, resizable=0, height=250, width=650,left=400, top=300')
			if(val==true)
			{
				MyWindow.document.write('<b>>>YOUR TABLE HAS BEEN BOOKED SUCCESSFULLY!!!</b><br><br>')
			}
			else
			{
				MyWindow.document.write('<b>>>PLEASE CHECK AVAILABILITY!!!</b><br><br>')
			}
	}
