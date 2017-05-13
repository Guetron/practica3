function sumar()
{
	var n1= document.getElementById("n1").value;
	var n2= document.getElementById("n2").value;
	n1=parseInt(n1);
	n2=parseInt(n2);
	var sum=n1+n2;
	document.getElementById("resultado").innerHTML="el resultado es ="  + sum;

}
function restar()
{
	var n1= document.getElementById("n1").value;
	var n2= document.getElementById("n2").value;
	n1=parseInt(n1);
	n2=parseInt(n2);
	var res=n1-n2;
	document.getElementById("resultado").innerHTML="el resultado es ="  + res;

}
function multiplicar ()
{
	var n1= document.getElementById("n1").value;
	var n2= document.getElementById("n2").value;
	n1=parseInt(n1);
	n2=parseInt(n2);
	var mul=n1*n2;
	document.getElementById("resultado").innerHTML="el resultado es ="  + mul;

}
function dividir ()
{
	var n1= document.getElementById("n1").value;
	var n2= document.getElementById("n2").value;
	n1=parseInt(n1);
	n2=parseInt(n2);
	var divi=n1/n2;
	document.getElementById("resultado").innerHTML="el resultado es ="  + divi;

}