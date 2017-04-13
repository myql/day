var shows=document.getElementsByClassName('show'),
yearPre=document.getElementsByClassName('year-pre')[0],
yearNext=document.getElementsByClassName('year-next')[0],
monthPre=document.getElementsByClassName('month-pre')[0],
monthNext=document.getElementsByClassName('month-next')[0],
months=document.getElementsByClassName('month'),
years=document.getElementsByClassName('year'),
days=document.getElementsByClassName('day')[0],
dayList=days.children;
yearPre.onclick=function(){
	playYearPre();
}
monthPre.onclick=function(){
	playMonthPre();
}
yearNext.onclick=function(){
	playYearNext();
}
monthNext.onclick=function(){
	playMonthNext();
}
window.onload=function(){
	playDate();
}
var nowDate=new Date();
var nowMonth=nowDate.getMonth()+1;
var nowYear=nowDate.getFullYear();
var nowWeek=nowDate.getDay();
var nowDay=nowDate.getDate();

function playDate(){
	var setDate=new Date();
	setDate.setMonth(2);
	setDate.setDate(1);
	var setDay=setDate.getDate();
	var setWeek=setDate.getDay();
	var j=1;
	setDays();
	for(i=setWeek;j<=setMonthDays[setDate.getMonth()];i++)
	{
		dayList[i].innerHTML=j;
		j++;
	}

}
function isLeapYear(year){
	if(((year%400)!==0&&(year%4)===0)||(year%400)===0) {
		return true;
	}else {
		return false;
	}
}
function setDays(){
	if(isLeapYear){
		setMonthDays=[31,29,31,30,31,30,31,31,30,31,30,31]
	}	else {
		setMonthDays=[31,28,31,30,31,30,31,31,30,31,30,31]
	}
}
playDate();
function playMonthPre(){
	var setDate=new Date();
	setDate.setFullYear(nowYear-1);
	var setYear=setDate.getFullYear();
}
