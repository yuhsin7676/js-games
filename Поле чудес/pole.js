var lt;
var y;
var a;
var t;
var k;
var s;
var sbornik;
var v;
alert("Отгадайте слово, вы можете ошибиться не более 6 раз!");
sbornik=["АГАТ","АКВЕДУК","АЛКОГОЛЬ","АРБУЗ","АТЛЕТИКА","БАРРАКУДА","БЕГУН","БЕЛЬЭТАЖ","БРИТВА","ВАКХАНАЛИЯ","ВАНДАЛИЗМ","ВЛОЖЕННОСТЬ","ВРУНОМЕТР","ВЫСКОЧКА","ГИЛЬОТИНА","ГЛЯНЕЦ","ГОСТЕПРИИМСТВО","ДЕДОВЩИНА","ДЕКЛАРАЦИЯ","ДЕКРЕМЕНТ","ДЕПРЕССИЯ","ДОВЕРИЕ","ДУБ",
        "ЖЕСТИКУЛЯЦИЯ","ЗАТОН","ЗНАХАРЬ","ЗУБР","КАРМАН","КЛАРНЕТ","КОЛЬЕ","ЛАМА","ЛОДЫРЬ","ЛУБЯНКА","МОНСТР","МУЖЕСТВЕННОСТЬ","НОСОРОГ","ОПИУМ","ПОЗИЦИЯ","РАЗГИЛЬДЯЙ","РАСПУТЬЕ","РЕСТАВРАЦИЯ","РОК","СЫР","ТАБЛИЦА","ТРОЛЛЬ","ТУННЕЛЬ","УРОК","ФЛЕГМАТИК","ХОМЯК",
        "ЭТАЖ","ЮБИЛЕЙ","ЯКУДЗА","ЯНТАРЬ"];
function getRandom(){
    return Math.floor(Math.random()*(sbornik.length-1))
};
v=getRandom();
s=sbornik[v];
a=s.length;
k=0;
t=0;
function progonka(lt,i){
    c=0;
    for (let j=0; j<a; j++){
        if(lt==s[j]){    
            z=document.getElementById('t'+j);
            z.innerHTML="<p style='color:#FFF;'>"+ s[j] +"</p>";
            t++;
            c++;
        };
    };
    if(t==a){
        xx=document.createElement('a');
        xx.href="index.html";
        xx.id="win";
        xx.innerHTML="<div class='winb'><p>"+"Вы отгадали слово:"+s+"<br>"+"Вернуться в начало!"+"</p></div>";
        document.body.prepend(xx);
    };
    if(c==0){
        document.getElementById('let'+i).style.backgroundColor="#FF0000";
        k++;
    };
    if(c>0){
        document.getElementById('let'+i).style.backgroundColor="#00FF00";
    };
    if(k==7){
        xx=document.createElement('a');
        xx.href="index.html";
        xx.id="win";
        xx.innerHTML="<div class='winb'><p>"+"Вы проиграли! Загаданное слово:"+s+"<br>"+"Вернуться в начало!"+"</p></div>";
        document.body.prepend(xx);
    };
};
for (let i=0; i<a; i++){
    x=document.createElement('div');
    x.className="tile";
    x.innerHTML="<p style='color:#00F;'>"+ s[i] +"</p>";
    x.id="t" + i;
    word.append(x);
};
for (let i=32; i>=1; i--){
    x=document.createElement('div');
    x.className="letter";
    x.id="let" + i;
    lt=String.fromCharCode(1039+i);
    x.innerHTML="<p>"+ lt +"</p>";
    document.body.prepend(x);
};
for (let i=32; i>=1; i--){
    z=document.getElementById('let'+i);
    z.onclick=function(){
        progonka(String.fromCharCode(1039+i),i);
    };
};