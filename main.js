var shows=document.getElementsByClassName('show')[0],
yearPre=document.getElementsByClassName('year-pre')[0],
yearNext=document.getElementsByClassName('year-next')[0],
monthPre=document.getElementsByClassName('month-pre')[0],
monthNext=document.getElementsByClassName('month-next')[0],
monthNumber=document.getElementsByClassName('month-number')[0],
yearNumber=document.getElementsByClassName('year-number')[0],
days=document.getElementsByClassName('day')[0],
dayList=days.children,
nowTimes=document.getElementsByClassName('now-date')[0],
clears=document.getElementsByClassName('clear')[0],
calendars=document.getElementsByClassName('calendar')[0],
layouts=document.getElementsByClassName('layout')[0];

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

var nowDate=new Date();
var nowMonth=nowDate.getMonth()+1;
var nowYear=nowDate.getFullYear();
var nowWeek=nowDate.getDay();
var nowDay=nowDate.getDate();
function playDate(year,month){
	var setDate=new Date();
	setDate.setFullYear(year);
	setDate.setMonth(month);
	setDate.setDate(1);
	var setDay=setDate.getDate();
	var setWeek=setDate.getDay();
	var j=1,i=0;
	monthNumber.innerHTML=parseInt(month+1);
	yearNumber.innerHTML=parseInt(year);
	setDays(year);
	var num=setMonthDays[setDate.getMonth()];
	for(i=0;i<setWeek;i++){
		dayList[i].innerHTML='';
		dayList[i].style.backgroundColor= '#ccc';
		dayList[i].onclick=function(){
			shows.value='';
		}
		dayList[i].onmouseover=function(){
		this.style.backgroundColor= '#ccc';
		}
		dayList[i].onmouseout=function(){
			this.style.backgroundColor= '#ccc';
		}	
		
	}
for(i=(setWeek+num);i<42;i++){
	dayList[i].innerHTML='';
		dayList[i].onclick=function(){
			shows.value='';
		}
	dayList[i].style.backgroundColor= '#ccc';
		dayList[i].onmouseover=function(){
		this.style.backgroundColor= '#ccc';
		}
		dayList[i].onmouseout=function(){
			this.style.backgroundColor= '#ccc';
		}
}
	for(i=setWeek;i<(setWeek+num);i++){
	if(j<=num){
		dayList[i].innerHTML=j;
		dayList[i].style.backgroundColor= '#999';
		dayList[i].onmouseover=function(){
		this.style.backgroundColor= '#0099ff';
		}
		dayList[i].onmouseout=function(){
			this.style.backgroundColor= '#999';
		}	
	dayList[i].onclick=function(){
		var clickYear=parseInt(year);
		var clickMonth=parseInt(month+1);
		var clickDay=parseInt(this.innerHTML);
		shows.value=clickYear+'-'+clickMonth+'-'+clickDay;
	}
	dayList[setWeek+nowDay-1].style.backgroundColor='#0099ff';
	dayList[setWeek+nowDay-1].onmouseout=function(){
			this.style.backgroundColor= '#0099ff';
		}
	j++;	
	}
	}
}

function nowTime(){
	playDate(nowYear,nowMonth-1);
	
		shows.value=nowYear+'-'+nowMonth+'-'+nowDay;
}

function isLeapYear(year){
	if(((year%400!==0)&&(year%4===0))||(year%400===0)) {
		return true;
	}else {
		return false;
	}
}
function setDays(year){
	if(isLeapYear(year)){
		setMonthDays=[31,29,31,30,31,30,31,31,30,31,30,31]
	}	else {
		setMonthDays=[31,28,31,30,31,30,31,31,30,31,30,31]
	}
}

function playMonthPre(){
	var setDate=new Date();
	var nowMonthNumber=monthNumber.innerHTML;
	var nowYearNumber=yearNumber.innerHTML;
	if(parseInt(nowMonthNumber)===1){
		setDate.setFullYear(nowYearNumber-1);
		setDate.setMonth(11);
		playDate(nowYearNumber-1,11)
	}else if(nowMonthNumber>1) {
		setDate.setMonth(nowMonthNumber-2);
		setDate.setFullYear(nowYearNumber);
		playDate(nowYearNumber,nowMonthNumber-2)
	}
}
function playMonthPre(){
	var setDate=new Date();
	var nowMonthNumber=parseInt(monthNumber.innerHTML);
	var nowYearNumber=parseInt(yearNumber.innerHTML);
	if(parseInt(nowMonthNumber)===1){
		setDate.setFullYear(nowYearNumber-1);
		setDate.setMonth(11);
		playDate(nowYearNumber-1,11)
	}else if(nowMonthNumber>1) {
		setDate.setMonth(nowMonthNumber-2);
		setDate.setFullYear(nowYearNumber);
		playDate(nowYearNumber,nowMonthNumber-2)
	}
}
function playMonthNext(){
	var setDate=new Date();
	var nowMonthNumber=parseInt(monthNumber.innerHTML);
	var nowYearNumber=parseInt(yearNumber.innerHTML);
	if(parseInt(nowMonthNumber)===12){
		setDate.setFullYear(nowYearNumber+1);
		setDate.setMonth(0);
		playDate(nowYearNumber+1,0)
	}else if(nowMonthNumber<12) {
		setDate.setMonth(nowMonthNumber);
		setDate.setFullYear(nowYearNumber);
		playDate(nowYearNumber,nowMonthNumber)
	}
}
function playYearPre(){
	var setDate=new Date();
	var nowMonthNumber=parseInt(monthNumber.innerHTML);
	var nowYearNumber=parseInt(yearNumber.innerHTML);
	playDate(nowYearNumber-1,nowMonthNumber-1)
}
function playYearNext(){
	var setDate=new Date();
	var nowMonthNumber=parseInt(monthNumber.innerHTML);
	var nowYearNumber=parseInt(yearNumber.innerHTML);
	playDate(nowYearNumber+1,nowMonthNumber-1)
}
nowTimes.onclick=function(){
		nowTime();
}
clears.onclick=function(){
	shows.value='';
}
 var c;
 c=0;
	layouts.style.display=
'none';
	shows.onclick=function(){
	nowTime();
	shows.value='';
	c++;
	if(c%2===0){
		layouts.style.display='none';
	}else {
		layouts.style.display='block';
	}
}

	


