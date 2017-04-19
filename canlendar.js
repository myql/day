document.body.onselectstart=function(){
	return false;
}
function Calendar(){
	this.bind();
	this.init();
}
Calendar.prototype={
	bind: function(){
		var _this=this
		$shows=this.$shows=$('.show');
		$yearPre=this.$yearPre=$('.year-pre');
		$yearNext=this.$yearNext=$('.year-next');
		$monthNext=this.$monthrNext=$('.month-next');
		$monthPre=this.$monthPre=$('.month-pre');
		$monthNumber=this.$monthNumber=$('.month-number');
		$yearNumber=this.$yearNumber=$('.year-number');
		$days=this.$days=$('.day');
		$dayList=this.$dayList=$days.children();
		$nowTimes=this.$nowTimes=$('.now-date');
		$clears=this.$clears=$('.clear');
		$calendars=this.$calendars=$('.calendar');
		$layouts=this.$layouts=$('.layout');
		
		this.nowDate=new Date();
		this.nowMonth=this.nowDate.getMonth()+1;
		this.nowYear=this.nowDate.getFullYear();
		this.nowWeek=this.nowDate.getDay();
		this.nowDay=this.nowDate.getDate();
		
		this.$setDate=new Date();
		this.nowMonthNumber=this.$monthNumber.text();
		this.nowYearNumber=this.$yearNumber.text();
		$yearPre.on('click',function(){
			_this.playYearPre();
		})
		$monthPre.on('click',function(){
			_this.playMonthPre();
		})
		$yearNext.on('click',function(){
			_this.playYearNext();
			})
		$monthNext.on('click',function(){
			_this.playMonthNext();
		})
		$nowTimes.on('click',function(){
		_this.nowTime();
		})
		$clears.on('click',function(){
			_this.shows.value='';
		})
		
	},
	playMonthPre: function(){
	var setDate=new Date();
	var nowMonthNumber=parseInt(this.$monthNumber.text());
	var nowYearNumber=parseInt(this.$yearNumber.text());
	if(parseInt(nowMonthNumber)===1){
		setDate.setFullYear(nowYearNumber-1);
		setDate.setMonth(11);
		this.playDate(nowYearNumber-1,11)
	}else if(nowMonthNumber>1) {
		setDate.setMonth(nowMonthNumber-2);
		setDate.setFullYear(nowYearNumber);
		this.playDate(nowYearNumber,nowMonthNumber-2)
	}
	},
	playMonthNext: function(){
		var setDate=new Date();
		var nowMonthNumber=parseInt(this.$monthNumber.text());
		var nowYearNumber=parseInt(this.$yearNumber.text());
		if(parseInt(nowMonthNumber)===12){
		this.$setDate.setFullYear(nowYearNumber+1);
		setDate.setMonth(0);
		this.playDate(this.nowYearNumber+1,0)
	}else if(this.nowMonthNumber<12) {
		setDate.setMonth(parseInt(this.nowMonthNumber));
		setDate.setFullYear(parseInt(this.nowYearNumber));
		this.playDate(nowYearNumber,nowMonthNumber)
	}
	},
	playYearPre: function(){
	var setDate=new Date();
	var nowMonthNumber=parseInt(this.$monthNumber.text());
	var nowYearNumber=parseInt(this.$yearNumber.text());
	this.playDate(nowYearNumber-1,nowMonthNumber-1)
},
playYearNext: function(){
	var setDate=new Date();
	var nowMonthNumber=parseInt(this.$monthNumber.text());
	var nowYearNumber=parseInt(this.$yearNumber.text());
	this.playDate(nowYearNumber+1,nowMonthNumber-1)
},
playDate: function(year,month){
	var _this=this;
	this.$setDate.setFullYear(year);
	this.$setDate.setMonth(month);
	this.$setDate.setDate(1);
	this.setDay=this.$setDate.getDate();
	this.setWeek=this.$setDate.getDay();
	var j=1,i=0;
	this.$monthNumber.text(parseInt(month+1));
	this.$yearNumber.text(parseInt(year));
	this.setDays(year);
	this.num=this.setMonthDays[this.$setDate.getMonth()];
	for(i=0;i<this.setWeek;i++){
		this.$dayList.eq(i).text('');
		this.$dayList.eq(i).css({
				background: '#ccc'
		})
		this.$dayList.eq(i).on('click',function(){
			_this.$shows.val('');
		})	
		this.$dayList.children().removeClass('inactive').eq(i).addClass('inactive');
	}
	for(i=(this.setWeek+this.num);i<42;i++){
	this.$dayList.eq(i).text('');
		this.$dayList.eq(i).on(
		'click',function(){
			_this.$shows.val('');
		})
	this.$dayList.eq(i).css({
		backgroundColor: '#ccc'
	})
		this.$dayList.children().removeClass('inactive').eq(i).addClass('inactive');
}
	for(i=this.setWeek;i<(this.setWeek+this.num);i++){
	if(j<=this.num){
		this.$dayList.eq(i).text(j);
		this.$dayList.eq(i).css({
			background:  '#999'
		})
		this.$dayList.children().removeClass('active').eq(i).addClass('active');
		}
		this.$dayList.eq(i).on('click',function(){
		var clickYear=parseInt(year);
		var clickMonth=parseInt(month+1);
		var clickDay=parseInt($(this).text());
		_this.$shows.val(clickYear+'-'+clickMonth+'-'+clickDay);
	})
	this.$dayList.eq(this.setWeek+this.nowDay-1).css({
		background: '#0099ff'
	})
	this.$dayList.eq(this.setWeek+this.nowDay-1).on('mouseout',function(){
			$(this).css({
				backgroundColor: '#0099ff'
		})
	
	})
	j++;
	}
},
setDays: function(year){
	if(this.isLeapYear(year)){
		this.setMonthDays=[31,29,31,30,31,30,31,31,30,31,30,31]
	}	else {
		this.setMonthDays=[31,28,31,30,31,30,31,31,30,31,30,31]
	}
},
isLeapYear: function(year){
	if(((year%400!==0)&&(year%4===0))||(year%400===0)) {
		return true;
	}else {
		return false;
	}
},
nowTime: function(){
		this.playDate(this.nowYear,this.nowMonth-1);
		this.$shows.val(this.nowYear+'-'+this.nowMonth+'-'+this.nowDay);
},
init: function(){
	var c=0,_this=this;
	this.$layouts.css({
		display: 'none'
	})
	this.$shows.on('click',function(){
	 _this.nowTime();
	_this.$shows.val('');
	c++;
	if(c%2===0){
		_this.$layouts.css({
		display: 'none'
	})
	}else {
			_this.$layouts.css({
		display: 'block'
	})
	}
});
}
}
$.fn.calendar=function(){
	this.each(function(){
		new Calendar();
	})
}
$('input').calendar();




	


