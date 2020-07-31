// Нажата ли клавиша?

var PressUp = 0;
var PressDown = 0;

// Начальные параметры реактора

var n = 1;
var c = [1,1,1,1,1,1];
var s = 0;
var ro = 0;
var betta = 0;

// Параметры регулирования стержней

var discret = false;
var sensitive = 0.00003;

// Переменные html

figure1 = document.getElementById("figure1");
figure2 = document.getElementById("figure2");
context1 = figure1.getContext("2d");
context2 = figure2.getContext("2d");

// Параметры времени

var t = 0;
var dt = 5;

// Запуск моделирования в реальном времени

drawAxis(figure1,200);
drawAxis(figure2,300);
begin();
TimerReactor = setInterval(() => requestFunction(),dt);

// Обработчик нажатия клавиш

document.addEventListener("keydown", (event) =>{
	if (event.keyCode == 38){
		PressUp = 1;
	}
	if (event.keyCode == 40){
		PressDown = 1;
	}
});

// Обработчик отжатия клавиш

document.addEventListener("keyup", (event) =>{
	if (event.keyCode == 38){
		PressUp = 0;
	}
	if (event.keyCode == 40){
		PressDown = 0;
	}
});

// Действия функций

function begin(){
	let cArray = JSON.stringify(c);
	
	// Отправка данных на сервер и получение концентрации эммитеров
	
	let request=new XMLHttpRequest();
    request.open('POST','begin.php',true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.addEventListener('readystatechange', function(){
        if ((request.readyState==4) && (request.status==200)){
			let array = JSON.parse(request.responseText);
			c = array[0];
			betta = array[1];
        };
    });
	request.send("n=" + n + " &s=" + s + " &ro=" + ro);
}

function requestFunction(){
	
	// Изменение параметров
	
	let nlast = n;
	let rolast = ro;
	t = t + dt;
	ro = ro + (PressUp - PressDown)*sensitive;
	
	// Отправка данных на сервер и получение параметров 
	
	let cArray = JSON.stringify(c);
	let request=new XMLHttpRequest();
    request.open('POST','calculate.php',true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.addEventListener('readystatechange', function(){
        if ((request.readyState==4) && (request.status==200)){
			let array = JSON.parse(request.responseText);
			n = array[0];
			c = array[1];
			document.getElementById("n").innerHTML = n;
			document.getElementById("ro").innerHTML = ro/betta;
			
			// Рисуем графики
			
			context1.beginPath();
			context1.strokeStyle="#F00";
			context1.moveTo((t - dt)/100,200 - rolast*20000);
			context1.lineTo(t/100,200 - ro*20000);
			context1.stroke();
			
			context2.beginPath();
			context2.strokeStyle="#F0F";
			context2.moveTo((t - dt)/100,320 - nlast*20);
			context2.lineTo(t/100,320 - n*20);
			context2.stroke();
			
			// Условие взрыва реактора
			
			if (n > 1000000){
				alert("бабах!!!");
				clearInterval(TimerReactor);
			}
        };
    });
	request.send("n=" + n + " &c=" + cArray + " &s=" + s + " &ro=" + ro);
}

function drawAxis(canvas,hor){
	let context=canvas.getContext("2d");
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle="#CCC";
	for(let i=10; i<canvas.height; i=i+10){
		context.moveTo(1,i);
		context.lineTo(canvas.width,i);
		context.stroke();
	};
	for(let i=20; i<canvas.width; i=i+20){
		context.moveTo(i,1);
		context.lineTo(i,canvas.height);
		context.stroke();
	};
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle="#000";
	context.moveTo(1,0);
	context.lineTo(1,600);
	context.stroke();
	context.moveTo(0,hor);
	context.lineTo(1000,hor);
	context.stroke();
	for(let i=10; i<canvas.height; i=i+10){
		context.moveTo(1,i);
		context.lineTo(6,i);
		context.stroke();
	};
	for(let i=20; i<canvas.width; i=i+20){
		context.moveTo(i,hor);
		context.lineTo(i,hor-6);
		context.stroke();
	};
};