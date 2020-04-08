
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
	
	function ZipValid(Zip)
	{
		reg=/^\d{7}/
		reg2=/[a-zA-Z]/
		if (reg.test(Zip) | reg2.test(Zip))
		{
			alert('Invalid Zip')
		}
	}
	function EmailValid(Email)
	{
		var valid1 = Email.indexOf('@')
		var valid2 = Email.indexOf('.')
		if(valid1==-1 | valid2==-1)
		{
			alert('Enter valid e-mail id.')
		}
	}
	
	function Order()
	{
		with(document.forms.form1)
		{
			if(Name.value=='')
			{
				alert('Please fill the name field.')
				
			}
			
			else
			{
				document.write('Your order has been successfully placed.<br> Your order is on the way. It will be delivered in the next 30 minutes.')
				
			}
			
		}
		
	}
