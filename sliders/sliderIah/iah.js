window.addEventListener("load", initIah);
var slider, sliderFilhos, prole, s, x, comeco;
var marginShow, marginHide;
function initIah(){
	slider = document.getElementById("slider");
	sliderFilhos = slider.children;
	prole = sliderFilhos.length - 1;
	sliderFilhos[0].addEventListener("click", sliderLeft);
	sliderFilhos[prole].addEventListener("click", sliderRight);
	
	marginShow = "22.5%";
	marginHide = "115%";
	
	x = 1;
}

function sliderLeft(){
	//gambiarra, melhorar isso!
	if (comeco==true){ x = 1; comeco = false;}

	if (x<prole-1){
		for(i=x+1; i<prole; i++){
				sliderFilhos[i].style.transition = "none";
				sliderFilhos[i].style.left = marginHide;
		}
		
		sliderFilhos[x].style.transition = "left 1s";
		sliderFilhos[x].style.left = "-" + marginHide;
		
		sliderFilhos[x+1].style.transition = "left 1s"; 
		sliderFilhos[x+1].style.left = marginShow;

		x++;
			
	} else {
		for(i=x-1; i>0; i--){
			sliderFilhos[i].style.transition = "none";
			sliderFilhos[i].style.left = marginHide;
		}
		setTimeout(function(){
			sliderFilhos[x].style.left = "-" + marginHide;
			
			sliderFilhos[1].style.transition = "left 1s"; 
			sliderFilhos[1].style.left = marginShow;
		}, 100);
		
		comeco = true;
	}
}

function sliderRight(){
	//gambiarra, melhorar isso!
	if (comeco==true){ x = 1; comeco = false;}
	
	if (x>1){
		for(i=x-1; i>0; i--){
			sliderFilhos[i].style.transition = "none";
			sliderFilhos[i].style.left = "-" + marginHide;
		}
	
		sliderFilhos[x].style.left = marginHide;
		
		sliderFilhos[x-1].style.transition = "left 1s"; 
		sliderFilhos[x-1].style.left = marginShow;
		
		x--;
			
	} else { 
		for(i=x+1; i<prole; i++){
			sliderFilhos[i].style.transition = "none";
			sliderFilhos[i].style.left = "-" + marginHide;
		}
		
		setTimeout(function(){
		sliderFilhos[x].style.left = marginHide;
		
		x = prole-1;
		
		sliderFilhos[x].style.transition = "left 1s"; 
		sliderFilhos[x].style.left = marginShow;
		}, 100);

	}
   
}