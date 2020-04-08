function display() 
		{ 
			var allSnack = '' ;	
			var qnty = document.getElementsByClassName('q1') ;
			var snacks = document.getElementsByClassName("snacks"); 
			for(var i = 0 ; i < snacks.length ;i++ )
			{ 
				if(snacks[i].checked==true)
				{ 
					allSnack += qnty[i].value + ' ' + snacks[i].name + ' , ' ; 	
				}
			}
			alert('Your Selection: ' +allSnack) ;
		}
		
		function Order() 
		{ 
			var allSnack = '' ;		
			var qnty = document.getElementsByClassName('q1') ;
			var snacks = document.getElementsByClassName("snacks"); 
			for(var i = 0 ; i < snacks.length ;i++ )
			{ 
				if(snacks[i].checked==true)
				{ 
					
					   allSnack += qnty[i].value + ' ' + snacks[i].name + ' , ' ; 	
					
					
				}
			
			}
			
			MyWindow = window.open('', 'Snacks list', 'titlebar=0 status=0, toolbar=0, location=0, menubar=0, directories=0, resizable=0, height=250, width=650,left=400, top=300')	
			MyWindow.document.write('<b>>>DO NOT CLOSE THIS WINDOW TILL YOU GET SUCCESSFULL ORDER PLACEMENT NOTIFICATION!!!</b><br><br>')
			MyWindow.document.write('You have selected <i>' + allSnack + '</i> from Mouth Watering Snacks.')
			
		}
	
		function ele1(val)
		{
			var to = val*20 ;
			document.getElementById("t1").value=to;	
		}
		
		function ele2(val)
		{
			var to = val*25 ;
			document.getElementById("t2").value=to;	
		}
		
		function ele3(val)
		{
			var to = val*35 ;
			document.getElementById("t3").value=to;	
		}
		
		function ele4(val)
		{
			var to = val*20 ;
			document.getElementById("t4").value=to;	
		}
		
		function ele5(val)
		{
			var to = val*25 ;
			document.getElementById("t5").value=to;	
		}
		
		function ele6(val)
		{
			var to = val*30 ;
			document.getElementById("t6").value=to;	
		}
		
		function ele7(val)
		{
			var to = val*30 ;
			document.getElementById("t7").value=to;	
		}
		
		function ele8(val)
		{
			var to = val*30 ;
			document.getElementById("t8").value=to;	
		}
		
		function ele9(val)
		{
			var to = val*30 ;
			document.getElementById("t9").value=to;	
		}
		
		function ele10(val)
		{
			var to = val*30 ;
			document.getElementById("t10").value=to;	
		}
		
		function ele11(val)
		{
			var to = val*30 ;
			document.getElementById("t11").value=to;	
		}
		
		function ele12(val)
		{
			var to = val*30 ;
			document.getElementById("t12").value=to;	
		}
