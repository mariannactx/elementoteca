document.addEventListener("keydown", function(event) {
	
		var charCode = (typeof event.which == "undefined") ? event.keyCode : event.which;
		// não entendi isso!
	
		switch(charCode){
		case 39:
			if (leftlupa < 510){
				leftlupa = leftlupa + 10;
				poslupa = poslupa - 10;
				
				var styleleftlupa = leftlupa + "px";
				var styleposlupa = poslupa + "px";
				
				document.getElementById("lupa").style.left = styleleftlupa;
				document.getElementById("lupa").style.backgroundPosition = styleposlupa + " 0px" ;
			}
			break;
			

		case 37:
			if (leftlupa > 0){
				leftlupa = leftlupa - 10;
				poslupa = poslupa + 10;
				
				var styleleftlupa = leftlupa + "px";
				var styleposlupa = poslupa + "px";
				
				document.getElementById("lupa").style.left = styleleftlupa;
				document.getElementById("lupa").style.backgroundPosition = styleposlupa	 + " 0px" ;
            
            }
			break;
		}
	}, false);
    