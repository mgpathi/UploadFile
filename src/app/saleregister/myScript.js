dCol='FF3399';//date colour.
fCol='8833FF';//face colour.
sCol='FF0000';//seconds colour.
mCol='00FF00';//minutes colour.
hCol='0000FF';//hours colour.
nCol='ff8833';//New Year '8833FF' nice color
//greann 22CC44
nCol1='ff8833';
nCol2='ff8833';
nCol3='ff8833';
nCol4='3388ff';
nCol5='ff8833';
nCol6='ff8080';
nCol7='ff8833';
nCol8='3388ff';
ClockHeight=40;
ClockWidth=40;
ClockFromMouseY=-50;
ClockFromMouseX=100;
//Alter nothing below! Alignments will be lost!
d=new Array("SUNDAY","MONDAY","TUESDAY","WEDNESDAY", "THURSDAY","FRIDAY","SATURDAY");
m=new Array("JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER");
date=new Date();
day=date.getDate();
year=date.getYear();
if (year < 2000) year=year+1900;
TodaysDate=" "+d[date.getDay()]+" "+day+" "+m[date.getMonth()]+" "+year;
D=TodaysDate.split('');
H='.......';
H=H.split('');
M='........';
M=M.split('');
S='.........';
S=S.split('');
Face='1 2 3 4 5 6 7 8 9 10 11 12';
font='Arial';
New= '. . . Wish . . . . ';
New2=' . . You . . ';
New4=' . . 2020 .. ';
New5=' . . Happy . .';
New3=' . . New . .';
New8=' . . YEAR . .';
New6=' * * * With Warm Regards From Ganesh ..* * * * * * *';
New7=' . . Year. . ';
New1=' . . Prosperous . . ';
size=2;
speed=0.4;
ns=(document.layers);
ie=(document.getElementById);
Face=Face.split(' ');
n=Face.length;
New=New.split(' ');
ny=New.length;
New1=New1.split(' ');
ny1=New1.length;
New2=New2.split(' ');
ny2=New2.length;
New3=New3.split(' ');
ny3=New3.length;
New4=New4.split(' ');
ny4=New4.length;
New5=New5.split(' ');
ny5=New5.length;
New6=New6.split(' ');
ny6=New6.length;
New7=New7.split(' ');
ny7=New7.length;
New8=New8.split(' ');
ny8=New8.length;
a=size*10;
ymouse=0;
xmouse=0;
scrll=0;
props="<font face="+font+" size="+size+" color="+fCol+"><B>";
nprops="<font face="+font+" size="+size+" color="+nCol+"><B>";
nprops11="<font face="+font+" size="+size+" color="+nCol1+"><B>";
nprops22="<font face="+font+" size="+size+" color="+nCol2+"><B>";
nprops33="<font face="+font+" size="+size+" color="+nCol3+"><B>";
nprops44="<font face="+font+" size="+size+" color="+nCol4+"><B>";
nprops55="<font face="+font+" size="+size+" color="+nCol5+"><B>";
nprops66="<font face="+font+" size="+size+" color="+nCol6+"><B>";
nprops77="<font face="+font+" size="+size+" color="+nCol7+"><B>";
nprops88="<font face="+font+" size="+size+" color="+nCol8+"><B>";
props2="<font face="+font+" size="+size+" color="+dCol+"><B>";
Split=360/n;
Dsplit=360/D.length;
HandHeight=ClockHeight/4.5
HandWidth=ClockWidth/4.5
HandY=-7;
HandX=-2.5;
scrll=0;
step=0.03;
currStep=0;
console.log(ns);
console.log(ie);
y=new Array();x=new Array();Y=new Array();X=new Array();
for (i=0; i < n; i++){y[i]=0;x[i]=0;Y[i]=0;X[i]=0}
Dy=new Array();Dx=new Array();DY=new Array();DX=new Array();
for (i=0; i < D.length; i++){Dy[i]=0;Dx[i]=0;DY[i]=0;DX[i]=0}
if (ns){
for (i=0; i < D.length; i++)
document.write('<layer name="nsDate'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+props2+D[i]+'</font></center></layer>');
for (i=0; i < n; i++)
document.write('<layer name="nsFace'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+props+Face[i]+'</font></center></layer>');
for (i=0; i < ny; i++)
document.write('<layer name="nsNew'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+nprops+New[i]+'</font></center></layer>');
for (i=0; i < ny1; i++)
document.write('<layer name="nsNew1'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+nprops11+New1[i]+'</font></center></layer>');
for (i=0; i < ny2; i++)
document.write('<layer name="nsNew2'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+nprops22+New2[i]+'</font></center></layer>');
for (i=0; i < ny3; i++)
document.write('<layer name="nsNew3'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+nprops33+New3[i]+'</font></center></layer>');
for (i=0; i < ny4; i++)
document.write('<layer name="nsNew4'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+nprops44+New4[i]+'</font></center></layer>');
for (i=0; i < ny5; i++)
document.write('<layer name="nsNew5'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+nprops55+New5[i]+'</font></center></layer>');
for (i=0; i < ny6; i++)
document.write('<layer name="nsNew6'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+nprops66+New6[i]+'</font></center></layer>');
for (i=0; i < ny7; i++)
document.write('<layer name="nsNew7'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+nprops77+New7[i]+'</font></center></layer>');
for (i=0; i < ny8; i++)
document.write('<layer name="nsNew8'+i+'" top=0 left=0 height='+a+' width='+a+'><center>'+nprops88+New8[i]+'</font></center></layer>');
for (i=0; i < S.length; i++)
document.write('<layer name=nsSeconds'+i+' top=0 left=0 width=15 height=15><font face=Arial size=3 color='+sCol+'><center><b>'+S[i]+'</b></center></font></layer>');
for (i=0; i < M.length; i++)
document.write('<layer name=nsMinutes'+i+' top=0 left=0 width=15 height=15><font face=Arial size=3 color='+mCol+'><center><b>'+M[i]+'</b></center></font></layer>');
for (i=0; i < H.length; i++)
document.write('<layer name=nsHours'+i+' top=0 left=0 width=15 height=15><font face=Arial size=3 color='+hCol+'><center><b>'+H[i]+'</b></center></font></layer>');
}
if (ie){
document.write('<div id="Od" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < D.length; i++)
document.write('<div id="ieDate" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center">'+props2+D[i]+'</B></font></div>');
document.write('</div></div>');
document.write('<div id="Of" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < n; i++)
document.write('<div id="ieFace" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center">'+props+Face[i]+'</B></font></div>');
document.write('</div></div>');
document.write('<div id="On" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < ny; i++)
document.write('<div id="ieNew" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center">'+nprops+New[i]+'</B></font></div>');
document.write('</div></div>');
document.write('<div id="On1" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < ny1; i++)
document.write('<div id="ieNew1" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center">'+nprops11+New1[i]+'</B></font></div>');
document.write('</div></div>');
document.write('<div id="On2" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < ny2; i++)
document.write('<div id="ieNew2" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center">'+nprops22+New2[i]+'</B></font></div>');
document.write('</div></div>');
document.write('<div id="On3" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < ny3; i++)
document.write('<div id="ieNew3" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center">'+nprops33+New3[i]+'</B></font></div>');
document.write('</div></div>');
document.write('<div id="On4" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < ny4; i++)
document.write('<div id="ieNew4" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center">'+nprops44+New4[i]+'</B></font></div>');
document.write('</div></div>');
document.write('<div id="On5" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < ny5; i++)
document.write('<div id="ieNew5" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center">'+nprops55+New5[i]+'</B></font></div>');
document.write('</div></div>');
document.write('<div id="On6" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < ny6; i++)
document.write('<div id="ieNew6" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center">'+nprops66+New6[i]+'</font></div>');
document.write('</div></div>');
document.write('<div id="On7" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < ny7; i++)
document.write('<div id="ieNew7" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center">'+nprops77+New7[i]+'</B></font></div>');
document.write('</div></div>');
document.write('<div id="On8" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < ny8; i++)
document.write('<div id="ieNew8" style="position:absolute;top:0px;left:0;height:'+a+';width:'+a+';text-align:center">'+nprops88+New8[i]+'</B></font></div>');
document.write('</div></div>');
document.write('<div id="Oh" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < H.length; i++)
document.write('<div id="ieHours" style="position:absolute;width:16px;height:16px;font-family:Arial;font-size:16px;color:'+hCol+';text-align:center;font-weight:bold">'+H[i]+'</div>');
document.write('</div></div>');
document.write('<div id="Om" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < M.length; i++)
document.write('<div id="ieMinutes" style="position:absolute;width:16px;height:16px;font-family:Arial;font-size:16px;color:'+mCol+';text-align:center;font-weight:bold">'+M[i]+'</div>');
document.write('</div></div>')
document.write('<div id="Os" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i=0; i < S.length; i++)
document.write('<div id="ieSeconds" style="position:absolute;width:16px;height:16px;font-family:Arial;font-size:16px;color:'+sCol+';text-align:center;font-weight:bold">'+S[i]+'</div>');
document.write('</div></div>')
}
(ns)?window.captureEvents(Event.MOUSEMOVE):0;
function Mouse(evnt){
ymouse = (ns)?evnt.pageY+ClockFromMouseY-(window.pageYOffset):event.y+ClockFromMouseY;
xmouse = (ns)?evnt.pageX+ClockFromMouseX:event.x+ClockFromMouseX;
}
(ns)?window.onMouseMove=Mouse:document.onmousemove=Mouse;
function ClockAndAssign(){
time = new Date ();
secs = time.getSeconds();
sec = -1.57 + Math.PI * secs/30;
mins = time.getMinutes();
min = -1.57 + Math.PI * mins/30;
hr = time.getHours();
hrs = -1.575 + Math.PI * hr/6+Math.PI*parseInt(time.getMinutes())/360;
if (ie){
Od.style.top=window.document.body.scrollTop;
Of.style.top=window.document.body.scrollTop;
On.style.top=window.document.body.scrollTop;
On1.style.top=window.document.body.scrollTop;
On2.style.top=window.document.body.scrollTop;
On3.style.top=window.document.body.scrollTop;
On4.style.top=window.document.body.scrollTop;
On5.style.top=window.document.body.scrollTop;
On6.style.top=window.document.body.scrollTop;
On7.style.top=window.document.body.scrollTop;
On8.style.top=window.document.body.scrollTop;
Oh.style.top=window.document.body.scrollTop;
Om.style.top=window.document.body.scrollTop;
Os.style.top=window.document.body.scrollTop;
}
for (i=0; i < n; i++){
var F=(ns)?document.getElementById['nsFace'+i]:ieFace[i].style;
F.top=y[i] + ClockHeight*2*Math.sin(-1.0471 + i*Split*Math.PI/180)+scrll;
F.left=x[i] + ClockWidth*2*Math.cos(-1.0471 + i*Split*Math.PI/180);
}
//for (i=0; i < ny; i++){
// var N=(ns)?document.getElementById['nsNew'+i]:ieNew[i].style;
// N.top=y[i] + ClockHeight*3.5*Math.sin(-1.0471 + i*Split*Math.PI/180)+scrll;
// N.left=x[i] + ClockWidth*3.5*Math.cos(-1.0471 + i*Split*Math.PI/180);
// }
for (i=0; i < H.length; i++){
var HL=(ns)?document.getElementById['nsHours'+i]:ieHours[i].style;
HL.top=y[i]+HandY+(i*HandHeight)*Math.sin(hrs)+scrll;
HL.left=x[i]+HandX+(i*HandWidth)*Math.cos(hrs);
}
for (i=0; i < M.length; i++){
var ML=(ns)?document.getElementById['nsMinutes'+i]:ieMinutes[i].style;
ML.top=y[i]+HandY+(i*HandHeight)*Math.sin(min)+scrll;
ML.left=x[i]+HandX+(i*HandWidth)*Math.cos(min);
}
for (i=0; i < S.length; i++){
var SL=(ns)?document.getElementById['nsSeconds'+i]:ieSeconds[i].style;
SL.top=y[i]+HandY+(i*HandHeight)*Math.sin(sec)+scrll;
SL.left=x[i]+HandX+(i*HandWidth)*Math.cos(sec);
}
for (i=0; i < D.length; i++){
var DL=(ns)?document.getElementById['nsDate'+i]:ieDate[i].style;
DL.top=Dy[i] + ClockHeight*2.5*Math.sin(currStep+i*Dsplit*Math.PI/180)+scrll;
DL.left=Dx[i] + ClockWidth*2.5*Math.cos(currStep+i*Dsplit*Math.PI/180);
}
for (i=0; i < ny; i++){
var NY=(ns)?document.getElementById['nsNew'+i]:ieNew[i].style;
NY.top=120+Dy[i] + ClockHeight*1.2*Math.sin(currStep+i*Dsplit*Math.PI/180)+scrll;
NY.left=140+Dx[i] + ClockWidth*1.2*Math.cos(currStep+i*Dsplit*Math.PI/180);
}
for (i=0; i < ny1; i++){
var NY1=(ns)?document.getElementById['nsNew1'+i]:ieNew1[i].style;
NY1.top=120+Dy[i] + ClockHeight*1.2*Math.sin(currStep+i*Dsplit*Math.PI/180)+scrll;
NY1.left=Dx[i] + ClockWidth*1.2*Math.cos(currStep+i*Dsplit*Math.PI/180)-140;
}
for (i=0; i < ny2; i++){
var NY2=(ns)?document.getElementById['nsNew2'+i]:ieNew2[i].style;
NY2.top=150+Dy[i] + ClockHeight*1.2*Math.sin(currStep+i*Dsplit*Math.PI/180)+scrll;
NY2.left=Dx[i] + ClockWidth*1.2*Math.cos(currStep+i*Dsplit*Math.PI/180);
}
for (i=0; i < ny3; i++){
var NY3=(ns)?document.getElementById['nsNew3'+i]:ieNew3[i].style;
NY3.top=Dy[i] + ClockHeight*1.2*Math.sin(currStep+i*Dsplit*Math.PI/180)+scrll-120;
NY3.left=140+Dx[i] + ClockWidth*1.2*Math.cos(currStep+i*Dsplit*Math.PI/180);
}
for (i=0; i < ny4; i++){
var NY4=(ns)?document.getElementById['nsNew4'+i]:ieNew4[i].style;
NY4.top=Dy[i] + ClockHeight*1.2*Math.sin(currStep+i*Dsplit*Math.PI/180)+scrll-120;
NY4.left=Dx[i] + ClockWidth*1.2*Math.cos(currStep+i*Dsplit*Math.PI/180)-140;
}
for (i=0; i < ny5; i++){
var NY5=(ns)?document.getElementById['nsNew5'+i]:ieNew5[i].style;
NY5.top=Dy[i] + ClockHeight*1.2*Math.sin(currStep+i*Dsplit*Math.PI/180)+scrll-150;
NY5.left=Dx[i] + ClockWidth*1.2*Math.cos(currStep+i*Dsplit*Math.PI/180);
}
for (i=0; i < ny6; i++){
var NY6=(ns)?document.getElementById['nsNew6'+i]:ieNew6[i].style;
NY6.top=200+Dy[i] + ClockHeight*2.0*Math.sin(currStep+i*Dsplit*Math.PI/180)+scrll;
NY6.left=220+Dx[i] + ClockWidth*2.0*Math.cos(currStep+i*Dsplit*Math.PI/180);
}
for (i=0; i < ny7; i++){
var NY7=(ns)?document.getElementById['nsNew7'+i]:ieNew7[i].style;
NY7.top=Dy[i] + ClockHeight*1.2*Math.sin(currStep+i*Dsplit*Math.PI/180)+scrll;
NY7.left=160+Dx[i] + ClockWidth*1.2*Math.cos(currStep+i*Dsplit*Math.PI/180);
}
for (i=0; i < ny8; i++){
var NY8=(ns)?document.getElementById['nsNew8'+i]:ieNew8[i].style;
NY8.top=Dy[i] + ClockHeight*1.2*Math.sin(currStep+i*Dsplit*Math.PI/180)+scrll;
NY8.left=Dx[i] + ClockWidth*1.2*Math.cos(currStep+i*Dsplit*Math.PI/180)-160;
}
currStep-=step;
}
function Delay(){
scrll=(ns)?window.pageYOffset:0;
Dy[0]=Math.round(DY[0]+=((ymouse)-DY[0])*speed);
Dx[0]=Math.round(DX[0]+=((xmouse)-DX[0])*speed);
for (i=1; i < D.length; i++){
Dy[i]=Math.round(DY[i]+=(Dy[i-1]-DY[i])*speed);
Dx[i]=Math.round(DX[i]+=(Dx[i-1]-DX[i])*speed);
}
y[0]=Math.round(Y[0]+=((ymouse)-Y[0])*speed);
x[0]=Math.round(X[0]+=((xmouse)-X[0])*speed);
for (i=1; i < n; i++){
y[i]=Math.round(Y[i]+=(y[i-1]-Y[i])*speed);
x[i]=Math.round(X[i]+=(x[i-1]-X[i])*speed);
}
ClockAndAssign();
setTimeout('Delay()',20);
}
if (ns||ie)window.onload=Delay;