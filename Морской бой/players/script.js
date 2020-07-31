var sizePole=30;
var sizePlan;
var zz;
var myships=0;
var enemyships=0;
var allships=0;
var begin1=0;
var begin2=0;
var shoot1=0;
var shoot2=0;

document.oncontextmenu=function(){
	return false;
};
document.getElementById("button1").onclick=function(){
	let request=new XMLHttpRequest();
    request.open('POST','../creategame.php',true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.addEventListener('readystatechange', function(){
        if ((request.readyState==4) && (request.status==200)){
			Timer1Id = setInterval(controlbegin, 500);
			document.getElementById("choose").style.display="none";
        };
    });
    request.send("player="+player+"&choose="+1); 
};

if (localStorage.getItem('body'+player)){
    document.body.innerHTML=localStorage.getItem('body'+player);
	sizePlan=localStorage.getItem('sizePlan'+player);
	if(localStorage.getItem('game'+player)){
	    game();
	};
	hod=localStorage.getItem('hod'+player);
	enemyships=localStorage.getItem('enemyships'+player);
	myships=localStorage.getItem('myships'+player);	
	if(hod==0){
	    Timer3Id = setInterval(controlchange, 100);
	};
	document.onkeydown=function(){
        event.preventDefault();
		if(event.keyCode==27){
			localStorage.clear();
		};
	};
};

function controlbegin(){
	let request=new XMLHttpRequest();
    request.open('POST','../creategame1.php',true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.addEventListener('readystatechange', function(){
        if ((request.readyState==4) && (request.status==200) && (request.responseText==1) && (begin1===0)){
            begin1=1;
			clearTimeout(Timer1Id);
			document.getElementById("helptext").innerHTML="Адмирал, расставьте корабли!";
            console.log("begin");
			sizePlan=15;
			createpole(sizePlan);
			rasstanovka(5);
        };
    });
    request.send();
};

function controlbegin2(){
	let request=new XMLHttpRequest();
    request.open('POST','../creategame1.php',true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.addEventListener('readystatechange', function(){
        if ((request.readyState==4) && (request.status==200) && (request.responseText==2) && (begin2===0)){
			begin2=1;
			document.getElementById("helptext").innerHTML="Ваш ход!";
			clearTimeout(Timer2Id);
            console.log("begin2");
			if (player==2){
				document.getElementById("helptext").innerHTML="Враг запускает огонь!";
				Timer3Id = setInterval(controlchange, 100);
			};
			game();
			localStorage.setItem('game'+player,1);
			document.onkeydown=function(){
		        event.preventDefault();
		        if(event.keyCode==27){
			        localStorage.clear();
		        };
	        };
        };
    });
    request.send();
};

function game(){
	document.getElementById("myshipstablo").style.display="block";
	document.getElementById("enemyshipstablo").style.display="block";
	let h2=document.getElementById("pole2").getElementsByClassName("pole");
	for (let i=0; i<h2.length; i++){
		let x=h2[i];
		x.onclick=function(){
			if ((hod==1) && (x.dataset.pole==0)){
			    shoot1=0;
			    hod=0;
				console.log("press "+x.dataset.x+":"+x.dataset.y);
				shoot(x.dataset.x,x.dataset.y);
			};
		};
	};
};

function controlchange(){
	let request=new XMLHttpRequest();
    request.open('POST','../controlchange.php',true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.addEventListener('readystatechange', function(){
        if ((request.readyState==4) && (request.status==200)){
			let a = JSON.parse(request.responseText);
			console.log(request.responseText);
			console.log(a.length);
			for (let j=0; j<a.length; j++){
			    if (a.length){
				    let z=document.getElementById("pole1_"+a[j][1]+"_"+a[j][2]);
				    let w=z.dataset.pole;
				    if (z.dataset.pole==0){
				        z.style.backgroundColor="#D8F8FF";
					    z.style.border="0px";
					    clearInterval(Timer3Id);
					    hod=1;
					    document.getElementById("helptext").innerHTML="Ваш ход!";
						document.getElementById("text2").style.backgroundColor=null;
				        document.getElementById("text2").style.borderColor=null;
					    z.dataset.pole=100;
				    }
				    else if((z.dataset.pole>0)&&(z.dataset.pole<100)){
					    if(z==zz){
					    }
					    else{
						    document.getElementById("helptext").innerHTML="Адмирал, подбит корабль !!!";
							document.getElementById("text2").style.backgroundColor="#FFC0C0";
							document.getElementById("text2").style.borderColor="#FF8080";
						    z.style.backgroundColor="#F00";
					        z.style.border="4px #F00 outset";
					        z.dataset.pole=101;
						    let h3=document.getElementById("pole1").getElementsByClassName("pole");
						    let q=0;
						    for (let i=0; i<h3.length; i++){
							    if(h3[i].dataset.pole==w){
								    q++;
							    };
						    };
						    if(q==0){
							    document.getElementById("helptext").innerHTML="ПОЛУНДРА!!! У нас потопили судно!!!";
								document.getElementById("text2").style.backgroundColor="#FF8080";
							    document.getElementById("text2").style.borderColor="#FF4040";
								myships--;
								document.getElementById("myshipstext").innerHTML=myships;
							    signdead("pole1",z.dataset.x,z.dataset.y);
							    if (myships==0){
								    document.getElementById("helptext").innerHTML="НЕЕЕЕЕТ!!! Мы проиграли это сражение, какая досада!!!";
									document.getElementById("helptext").style.color="#FFF";
									document.getElementById("text2").style.backgroundColor="#222";
				                    document.getElementById("text2").style.borderColor="#111";
									showships();
									localStorage.clear();
							    };
						    };
					    };
					    zz=z;
					    hod=0;
				    };
					localStorage.setItem('body'+player,document.body.innerHTML);
					localStorage.setItem('hod'+player,hod);
					localStorage.setItem('enemyships'+player,enemyships);
					localStorage.setItem('myships'+player,myships);
					localStorage.setItem('sizePlan'+player,sizePlan);
			    };
            };
		};
    });
    request.send("player="+player);
};

function shoot(poleX,poleY){
	let request=new XMLHttpRequest();
    request.open('POST','../changepole.php',true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.addEventListener('readystatechange', function(){
        if ((request.readyState==4) && (request.status==200) && (shoot1==0)){
            shoot1=1;
		    let a = request.responseText;
			let s = document.getElementById("pole2_"+poleX+"_"+poleY);
		    s.className="pole open";
			console.log("answer: "+a);
	    	if (a==0){
	    		s.style.backgroundColor="#D8F8FF";
				hod=0;
				document.getElementById("helptext").innerHTML="Враг запускает огонь!";
				document.getElementById("text2").style.backgroundColor=null;
				document.getElementById("text2").style.borderColor=null;
				s.dataset.pole=100;
				s.style.border="0px";
				Timer3Id = setInterval(controlchange, 100);
		    }
		    else if (a>0 && a<=99){
				document.getElementById("helptext").innerHTML="Адмирал, мы подбили вражеское судно!";
				document.getElementById("text2").style.backgroundColor="#FFE0C0";
				document.getElementById("text2").style.borderColor="#FFC080";
		    	s.style.backgroundColor="#F00";
				s.style.border="4px #F00 outset";
				s.dataset.pole=101;
				if (a==1){
					enemyships--;
					document.getElementById("enemyshipstext").innerHTML=enemyships;
					document.getElementById("helptext").innerHTML="Судно противника уничтожено! Огонь, юнги!";
					document.getElementById("text2").style.backgroundColor="#FFC080";
				    document.getElementById("text2").style.borderColor="#FF8000";
					signdead("pole2",poleX,poleY);
					if (enemyships==0){
						document.getElementById("helptext").innerHTML="Ураааааа!!! Нам покорны все моря, адмирал!!!";
						document.getElementById("text2").style.backgroundColor="#FFFFFF";
				        document.getElementById("text2").style.borderColor="#F0F0F0";
						localStorage.clear();
					};
				};
				hod=1;
		    };
			localStorage.setItem('body'+player,document.body.innerHTML);
			localStorage.setItem('hod'+player,hod);
			localStorage.setItem('enemyships'+player,enemyships);
			localStorage.setItem('myships'+player,myships);
			localStorage.setItem('sizePlan'+player,sizePlan);
        };
    });
	request.send("player="+player+"&poleX="+poleX+"&poleY="+poleY);
};

function signdead(poleN,poleX,poleY){
	for(let j=0; j<=2; j++){
		for(let k=0; k<=2; k++){
			if( ((poleX-1+j)>=0) && ((poleX-1+j)<sizePlan) && ((poleY-1+k)>=0) && ((poleY-1+k)<sizePlan)){
			    let u=document.getElementById(poleN+"_"+(poleX-1+j)+"_"+(poleY-1+k));
				console.log(u.dataset.pole);
				if(u.dataset.pole==101){
					u.dataset.pole=102;
					signdead(poleN,(poleX-1+j),(poleY-1+k));
					u.style.backgroundColor="#800";
					u.style.border="4px #800 outset";
				}
				else if(u.dataset.pole==0){
					u.className="pole open";
					u.style.backgroundColor="#D8F8FF";
					u.style.border="0px";
					u.dataset.pole=100;
				};
			};
		};
	};
};