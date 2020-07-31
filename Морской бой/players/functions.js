function createpole(x){
	document.getElementById("pole1").style.width=(sizePole*x)+"px";
	document.getElementById("pole2").style.width=(sizePole*x)+"px";
	document.getElementById("pole1").style.height=(sizePole*x)+"px";
	document.getElementById("pole2").style.height=(sizePole*x)+"px";
	for(let i=0; i<x; i++){
		for(let j=0; j<x; j++){
			let newElement1=document.createElement("div");
			newElement1.className="pole open";
			newElement1.id="pole1_"+i+"_"+j;
			document.getElementById("pole1").append(newElement1);
			newElement1.style.width=sizePole+"px";
			newElement1.style.height=sizePole+"px";
			newElement1.style.top=(j*sizePole)+"px";
			newElement1.style.left=(i*sizePole)+"px";
			newElement1.dataset.pole=0;
			newElement1.dataset.x=i;
			newElement1.dataset.y=j;
			let newElement2=document.createElement("div");
			newElement2.className="pole close";
			newElement2.id="pole2_"+i+"_"+j;
			document.getElementById("pole2").append(newElement2);
			newElement2.style.width=sizePole+"px";
			newElement2.style.height=sizePole+"px";
			newElement2.style.top=(j*sizePole)+"px";
			newElement2.style.left=(i*sizePole)+"px";
			newElement2.dataset.pole=0;
			newElement2.dataset.x=i;
			newElement2.dataset.y=j;
		};
	};
};

function shipnewplace(y,placeX,placeY){
	if(rotate){
    	if ((placeX<(sizePlan)) && (placeX>=0) && (placeY<=(sizePlan-longship)) && (placeY>=0)){
	    	for(let i=0; i<longship; i++){
    			document.getElementById("pole1_"+(x1)+"_"+(y1+i)).style.backgroundColor=null;
				document.getElementById("pole1_"+(x1)+"_"+(y1+i)).style.border=null;
	     	};
		    for(let i=0; i<longship; i++){
			    document.getElementById("pole1_"+(placeX)+"_"+(placeY+i)).style.backgroundColor="#478";
				document.getElementById("pole1_"+(placeX)+"_"+(placeY+i)).style.border="4px #478 outset";
		    };
		    x1=placeX;
			y1=placeY;
		};
	}
	else{
    	if ((placeX<=(sizePlan-longship)) && (placeX>=0) && (placeY<sizePlan) && (placeY>=0)){
	    	for(let i=0; i<longship; i++){
    			document.getElementById("pole1_"+(x1+i)+"_"+(y1)).style.backgroundColor=null;
				document.getElementById("pole1_"+(x1+i)+"_"+(y1)).style.border=null;
	     	};
		    for(let i=0; i<longship; i++){
			    document.getElementById("pole1_"+(placeX+i)+"_"+(placeY)).style.backgroundColor="#478";
				document.getElementById("pole1_"+(placeX+i)+"_"+(placeY)).style.border="4px #478 outset";
		    };
		    x1=placeX;
			y1=placeY;
		};
	};
};

function shiprotate(y){
	if (rotate){
		if (x1<=(sizePlan-longship)){
		    rotate=0;
		    for(let i=0; i<longship; i++){
			    document.getElementById("pole1_"+(x1)+"_"+(y1+i)).style.backgroundColor=null;
				document.getElementById("pole1_"+(x1)+"_"+(y1+i)).style.border=null;
		    };
		    for(let i=0; i<longship; i++){
		    	document.getElementById("pole1_"+(x1+i)+"_"+(y1)).style.backgroundColor="#478";
				document.getElementById("pole1_"+(x1+i)+"_"+(y1)).style.border="4px #478 outset";
		    };
		};
	}
	else{
		if (y1<=(sizePlan-longship)){
		rotate=1;
	        for(let i=0; i<longship; i++){
			    document.getElementById("pole1_"+(x1+i)+"_"+(y1)).style.backgroundColor=null;
				document.getElementById("pole1_"+(x1+i)+"_"+(y1)).style.border=null;
		    };
		    for(let i=0; i<longship; i++){
			    document.getElementById("pole1_"+(x1)+"_"+(y1+i)).style.backgroundColor="#478";
				document.getElementById("pole1_"+(x1)+"_"+(y1+i)).style.border="4px #478 outset";
		    };
		};
    };
};

function shipstay(y){
	let z=0;
	if(rotate){
		for(let i=(-1); i<=1; i++){
			for(let j=(-1); j<=longship; j++){
				if( ((x1+i)>=0) && ((x1+i)<sizePlan) && ((y1+j)>=0) && ((y1+j)<sizePlan)){
					if(document.getElementById("pole1_"+(x1+i)+"_"+(y1+j)).dataset.pole==0){
					}
					else{
						z++;
					};
				};
			};
		};
	}
	else{
		for(let i=(-1); i<=longship; i++){
			for(let j=(-1); j<=1; j++){
				if( ((x1+i)>=0) && ((x1+i)<sizePlan) && ((y1+j)>=0) && ((y1+j)<sizePlan)){
					if(document.getElementById("pole1_"+(x1+i)+"_"+(y1+j)).dataset.pole==0){
					}
					else{
						z++;
					};
				};
			};
		};
	};
	if(z==0){
		allships++;
	    if(rotate){
		    for(let i=0; i<longship; i++){
	            document.getElementById("pole1_"+(x1)+"_"+(y1+i)).className="pole open ship ship"+numbership;
		        document.getElementById("pole1_"+(x1)+"_"+(y1+i)).dataset.pole=numbership;
	    		document.getElementById("pole1_"+(x1)+"_"+(y1+i)).style.backgroundColor=null;
				document.getElementById("pole1_"+(x1)+"_"+(y1+i)).style.border=null;
		    };
	    }
	    else{
		    for(let i=0; i<longship; i++){
	            document.getElementById("pole1_"+(x1+i)+"_"+y1).className="pole open ship ship"+numbership;
		        document.getElementById("pole1_"+(x1+i)+"_"+y1).dataset.pole=numbership;
			    document.getElementById("pole1_"+(x1+i)+"_"+y1).style.backgroundColor=null;
				document.getElementById("pole1_"+(x1+i)+"_"+y1).style.border=null;
		    };
	    };
	    if(colvo<(y-longship+1)){
		    colvo++;
	    }
	    else{
		    colvo=1;
		    longship++;
	    };
		if(longship<=y){
	        for(x1=0; x1<longship; x1++){
		        document.getElementById("pole1_"+x1+"_"+0).style.backgroundColor="#478";
			    document.getElementById("pole1_"+x1+"_"+0).style.border="4px #478 outset";
	        };
	        x1=0;
	        y1=0;
	        rotate=0;
	        numbership++;
		}
	    else{
			document.getElementById("buttonright").style.display="none";
			document.getElementById("buttonleft").style.display="none";
			document.getElementById("buttonup").style.display="none";
			document.getElementById("buttondown").style.display="none";
			document.getElementById("buttonrotate").style.display="none";
			document.getElementById("buttonstay").style.display="none";
		    let h1=document.getElementById("pole1").getElementsByClassName("pole");
			document.getElementById("helptext").innerHTML="Противник медлит с расстановкой, ждите!";
	        let arrmy=new Array();
	        for (let i=0; i<sizePlan; i++){
		        arrmy[i]=new Array();
		        for (let j=0; j<sizePlan; j++){
		            arrmy[i][j]=document.getElementById("pole1_"+i+"_"+j).dataset.pole;
	            };
	        };
		    let arrmy2 = JSON.stringify(arrmy);
		    let request=new XMLHttpRequest();
            request.open('POST','../creategamebefore2.php',true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.addEventListener('readystatechange', function(){
                if ((request.readyState==4) && (request.status==200)){
			        Timer2Id = setInterval(controlbegin2, 500);
			        let h2=document.getElementsByClassName("pole");
				    for(let i=0; i<h2.length; i++){
			            h2[i].style.backgroundColor=null;
			        };
				    shipnewplace=null;
					shiprotate=null;
					myships=allships;
					enemyships=allships;
                };
            });
            request.send("player="+player+"&choose="+1+"&arrmy="+arrmy2);
	    };
	};
}; 

function rasstanovka(y){
	let h1=document.getElementById("pole1").getElementsByClassName("pole");
	h1[0].style.backgroundColor="#478";
	h1[0].style.border="4px #478 outset";
    x1=0;
	y1=0;
	longship=1;
	colvo=1;
	numbership=1;
	rotate=0; // 0 - horizontal, 1 - vertical
	for (let i=0; i<h1.length; i++){
	    h1[i].onmousedown=function(){
		    shipnewplace(y,Number(h1[i].dataset.x),Number(h1[i].dataset.y));
			if (event.button==2){
				shiprotate(y);;
			};
	    };
    };
	document.getElementById("buttonright").onmousedown=function(){
	    shipnewplace(y,x1-(-1),y1);
	};
	document.getElementById("buttonleft").onmousedown=function(){
	    shipnewplace(y,x1-1,y1);
	};
	document.getElementById("buttonup").onmousedown=function(){
	    shipnewplace(y,x1,y1-1);
	};
	document.getElementById("buttondown").onmousedown=function(){
	    shipnewplace(y,x1,y1-(-1));
	};
	document.onkeydown=function(){
		event.preventDefault();
		if (event.keyCode==37){
			shipnewplace(y,x1-1,y1);
		}
		else if(event.keyCode==38){
			shipnewplace(y,x1,y1-1);
		}
		else if(event.keyCode==39){
			shipnewplace(y,x1-(-1),y1);
		}
		else if(event.keyCode==40){
			shipnewplace(y,x1,y1-(-1));
		}
		else if(event.keyCode==32){ //Пробел
			shiprotate(y);
		}
		else if(event.keyCode==13){ //Enter
			shipstay(y);
		}
		else if(event.keyCode==27){
			localStorage.clear();
		}
	};
	document.getElementById("buttonrotate").onmousedown=function(){
	    shiprotate(y);
	};
	document.getElementById("buttonstay").onmousedown=function(){
		shipstay(y);
	};
};
function showships(){
	//let h5=document.getElementById("pole2").getElementsByClassName("pole");
	let request=new XMLHttpRequest();
    request.open('POST','../showships.php',true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.addEventListener('readystatechange', function(){
        if ((request.readyState==4) && (request.status==200)){
	        let a = JSON.parse(request.responseText);
			for(let i=0; i<a.length; i++){
				for(let j=0; j<a[i].length; j++){
					let u=document.getElementById("pole2_"+i+"_"+j);
					if (u.dataset.pole==0){
						u.dataset.pole=100;
						if (a[i][j]>0){
							u.className="pole open ship";
						};
					};
				};
			};
		};
    });
    request.send("player="+player);
};