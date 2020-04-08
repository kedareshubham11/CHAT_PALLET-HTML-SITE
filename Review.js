function NameValid(Name)
	{
		
		reg=/[0-9]/
		if (reg.test(Name))
		{
			alert('You cannot insert number in name field.')
		
		}
		else
		{
			with(document.forms.form1)
			{
				com.disabled=false
			}	
		}
	}
	
function highlight(element)
{
  element.style.color='silver'  
}

function sav()
{
	with(document.forms.form1)
	{
		var name1 = document.getElementById('name') ;
		var nam=name1.value.toUpperCase();
		var comm = document.getElementById('comment') ;
		var comm1 = comm.value;
	}
		MyWindow = window.open('', 'review', 'titlebar=0 status=0, toolbar=0, location=0, menubar=0, directories=0, resizable=0, height=250, width=650,left=400, top=300')	
		MyWindow.document.write('>>	THANK YOU <b>'+nam+ ' </b>FOR GIVING YOUR VALUEABLE TIME FOR REVIEWS!!!</b><br><br>')
		MyWindow.document.write('<b>Your Comment:<br></b>')
		MyWindow.document.write(comm1)
		
}