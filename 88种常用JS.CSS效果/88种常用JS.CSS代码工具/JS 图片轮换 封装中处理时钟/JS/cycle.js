/*
Cycle Slider 
Author: trance
Email:trance2005@163.com
QQ :397902738
Date:2009-06-03
Blog:http://www.cnblogs.com/trance/
*/
$(document).ready(function(){				   
	var dela=false; //触发延时
	var auto=false; //自动切换延时	
	var movetime=700;
	var wait=3000;
	var width=950;
	var index=0;
	var boss=$("#boss");
	var director=$("#director");
	var dirli=director.find("li");
	var dirlen=dirli.length-1;
	var stage=$("#stage");
	var actor=$("#actor");
	var repactor=""; 
	
	
//标记当前
function cur(ele){		
		ele=$(ele)? $(ele):ele;
		ele.addClass("cur").siblings().removeClass("cur");	
		}

dirli.each(function(i){
	dirli.eq(i).mouseover(
		function(){
			if(!$(this).hasClass("cur")){
				dela=setTimeout(
					function(){
					index=i;
					act();
					},300);		
			}
		}).mouseout(
			function(){
				if(dela){
					clearTimeout(dela);
					}
				})
		})


var actauto=function(){
	auto = setInterval(
		function(){
			index++;
			act();		
			if(index>=dirlen){index=-1;}	 
			},wait);
	}
	
var actpause=function(){
	if(auto){
		clearInterval(auto);
		}
	}

boss.hover(actpause,actauto);


var act=function act(){	
	repactor=actor.find("li").eq(index).html();
	cur(director.find("li").eq(index));
	stage.find("li:last").html(repactor);
	stage.animate(
	   {"left":-width+"px"},
	   {queue:false,
	   duration:movetime, 
	   easing:"easeOutQuart",
	   complete: function(){		  
		   	stage.find("li:first").appendTo(stage);		   
		    stage.css({"left":0+"px"});		  
		   }	   
	   });
	//end of actor
	}	
//auto act	
actauto();
//end of doment.ready						   
})
