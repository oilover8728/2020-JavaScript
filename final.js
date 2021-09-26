const container = document.querySelector(".container");
//console.log(container);
var lastOne;
var keyArray = document.querySelectorAll(".piano");
console.log(keyArray);
var msg = '-';
var name;
/*
function keyDownHandler(e) {
	e = e || window.event;
	tag=`${e.keyCode}`;
	if (tag=='90' || tag=='89' || tag=='220'){
		msg = 'Do';
	}
	else if(tag=='83' || tag=='55'){
		msg='#Do';
	}
	else if (tag=='85' || tag=='88'){
		msg = 'Re';
	}
	else if(tag=='68' || tag=='56'){
		msg='#Re';
	}
	else if (tag=='67' || tag=='73'){
		msg = 'Mi';
	}
	else if (tag=='86' || tag=='79'){
		msg = 'Fa';
	}
	else if(tag=='71' || tag=='48'){
		msg='#Fa';
	}
	else if (tag=='66' || tag=='80'){
		msg = 'Sol';
	}
	else if(tag=='72' || tag=='189'){
		msg='#So';
	}
	else if (tag=='78' || tag=='219'){
		msg = 'La';
	}
	else if(tasdg=='74' || tag=='187'){
		msg='#La';
	}
	else if (tag=='77' || tag=='221'){
		msg = 'Si';
	}
	if(msg=='-'){
		msg=name;
	}
	else{
		msg = msg + " " + name;
	}
	document.getElementById("messageKeyDown").innerHTML = msg;
	setTimeout(function(){msg=msg-name; if(msg=""){msg='-';}},100);
	
}*/


//滑鼠點擊
container.addEventListener("click", (e) => {
    //console.log(e.target.attributes[1].nodeValue);
    const audio = document.querySelector(`audio[data-key="${e.target.attributes[1].nodeValue}"]`)
    const keyboard = document.querySelector(`div[data-key="${e.target.attributes[1].nodeValue}"]`)
	tag=e.target.attributes[1].nodeValue;
	//console.log(e.target.attributes[2].nodeIndex);
	if(document.querySelector(`div[data-key="${e.target.attributes[1].nodeValue}"]`)){
		name=e.target.getAttribute("name");
		//console.log(document.querySelector(`div[data-key="${e.keyCode}"]`).getAttribute("name"));
    }
	/*if (tag=='90' || tag=='89' || tag=='220'){
		msg = 'Do';
	}
	else if(tag=='83' || tag=='55'){
		msg='#Do';
	}
	else if (tag=='85' || tag=='88'){
		msg = 'Re';
	}
	else if(tag=='68' || tag=='56'){
		msg='#Re';
	}
	else if (tag=='67' || tag=='73'){
		msg = 'Mi';
	}
	else if (tag=='86' || tag=='79'){
		msg = 'Fa';
	}
	else if(tag=='71' || tag=='48'){
		msg='#Fa';
	}
	else if (tag=='66' || tag=='80'){
		msg = 'Sol';
	}
	else if(tag=='72' || tag=='189'){
		msg='#So';
	}
	else if (tag=='78' || tag=='219'){
		msg = 'La';
	}
	else if(tag=='74' || tag=='187'){
		msg='#La';
	}
	else if (tag=='77' || tag=='221'){
		msg = 'Si';
	}*/
    if (!audio) return;
	audio.play();
	if(`${e.target.attributes[1].nodeValue}`=='81'){
		name='-';
		
		const sw = document.getElementById("a").value;
		if(sw=='1'){
			audio.pause();
			document.getElementById("a").value='0';
		}
		else{
			document.getElementById("a").value='1';
		}
	}
    keyboard.classList.add("grey");
    audio.currentTime = 0;
	if(msg=='-'){
		msg=name;
	}
	else{
		msg = msg + " " + name;
	}
	document.getElementById("messageKeyDown").innerHTML = msg;
	setTimeout(function(){msg=msg-name; if(msg=""){msg='-';}},100);
	setTimeout(function(){keyboard.classList.remove("grey");},350);

})

//按鍵
var soundArray = document.querySelectorAll("audio");
console.log(soundArray);
window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const keyboard = document.querySelector(`div[data-key="${e.keyCode}"]`)
	//console.log(document.querySelector(`div[data-key="${e.keyCode}"]`));
	if(document.querySelector(`div[data-key="${e.keyCode}"]`) && `${e.keyCode}`!='81'){
		name=document.querySelector(`div[data-key="${e.keyCode}"]`).getAttribute("name");
		//console.log(document.querySelector(`div[data-key="${e.keyCode}"]`).getAttribute("name"));
    }
	//console.log(name);
	if (!audio) return;
	audio.play();
	if(`${e.keyCode}`=='81'){
		name='-';
		const sw = document.getElementById("a").value;
		if(sw=='1'){
			audio.pause();
			document.getElementById("a").value='0';
		}
		else{
			document.getElementById("a").value='1';
		}
	}
    keyboard.classList.add("grey");
    audio.currentTime = 0;
	if(msg=='-'){
		msg=name;
	}
	else{
		msg = msg + " " + name;
	}
	//console.log(name);
	document.getElementById("messageKeyDown").innerHTML = msg;
	setTimeout(function(){msg=msg-name; if(msg=""){msg='-';}},100);
	setTimeout(function(){keyboard.classList.remove("grey");},350);
})


//test
			
/*setTimeout(function(){
var a=document.getElementById('a'); 

 a.play().catch(function (e) {
    console.log("a.play catch>", e);
  });
},1000);*/


if (window.addEventListener) {
	//window.addEventListener("keydown", keyDownHandler);
} else if (window.attachEvent) {
 	// IE8 doesn't support key events on the window.
	document.attachEvent("onkeydown", keyDownHandler);
	document.attachEvent("onkeypress", keyPressHandler);
} else {
	window.onkeydown=keyDownHandler;
	window.onkeypress=keyPressHandler;
}