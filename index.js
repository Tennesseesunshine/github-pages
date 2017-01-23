$(function(){

// 切换顶部样式
$('li').click(function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
});
// 公共函数
function Toggle(eClick,showStep){
	$(eClick).click(function(){
		$(showStep).not('.article p:last-child').fadeIn().siblings().fadeOut();
	});
};
Toggle('.before','.tips');
Toggle('.ostep','.step1');
Toggle('.sstep','.step2');
Toggle('.tstep','.step3');
Toggle('.4thstep','.step4');
Toggle('.5thstep','.step5');
Toggle('.6thstep','.step6');
Toggle('.7thstep','.step7');

// canvas
var canvas=document.getElementById('canvas');
var context=canvas.getContext("2d");
// 构造函数
function Circle(){
	var R=Math.floor(Math.random()*255);
	var G=Math.floor(Math.random()*255);
	var B=Math.floor(Math.random()*255);
	this.x=Math.random()*canvas.width;
	this.y=Math.random()*canvas.height;
	this.r=Math.random()*15;
	// 绘制圆形方法
	this.paint=function(){
		context.beginPath();
		context.arc(this.x,this.y,this.r,0,Math.PI*2,false);
		context.fillStyle="rgba("+R+","+G+","+B+",0.2)";
		// context.fillStyle="rgba(200,200,200,0.2)";
		context.fill();
		// context.fill();
	}
	// 控制圆形上下的方法
	this.step=function(){
		this.y--;
	}
}
// 空数组
var circles=[];
// 定义函数-创建圆对象
function createCircle(){
	var circle=new Circle();
	circles[circles.length]=circle;
}
// 控制绘制所有的圆
function paintCircle(){
	for(var i=0;i<circles.length;i++){
		circles[i].paint();
	}
}
// 控制所有圆运动
function stepCircle(){
	for(var i=0;i<circles.length;i++){
		circles[i].step();
	}
}
var circle=new Circle();
var myimg=new Image();
myimg.src="images/bj.png";
var flag=0;
setInterval(function(){
	// 数量太多用来控制
	flag++;
	if(flag%8==0){
	createCircle();
	}
	// 画背景图
	context.drawImage(myimg,0,0);
	paintCircle();
	stepCircle();
},10);
// 鼠标跟随
var oTop = document.getElementById("to_top");
document.onmousemove = function(evt){
var oEvent = evt || window.event;
var scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
oTop.style.left = oEvent.clientX + scrollleft+20 +"px";
oTop.style.top = oEvent.clientY + scrolltop +10+ "px";
}
});