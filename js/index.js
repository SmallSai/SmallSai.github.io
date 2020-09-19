// window.onload=function(){
// 	// 两个标题
// 	var bigTitle=document.getElementsByClassName("big_title");
// 	var vitaeTitle=bigTitle[0];
// 	var workTitle=bigTitle[1];
	
// 	// 两个三角
// 	var triangle=document.getElementsByClassName("icon");
// 	var vitaeTriangle=triangle[0];
// 	var workTriangle=triangle[1];
	
	
// }

$(document).ready(function(){
	// 两个三角
	var triangle=document.getElementsByClassName("icon");
	var vitaeTriangle=triangle[0];
	var workTriangle=triangle[1];
	
	var vitaeDown=true;
	var workDown=false;
	
	vitaeTriangle.style.transform="rotate(-90deg)";
	
	$("#vitae_title").click(function(){
		vitaeDown=!vitaeDown;
		workDown=!workDown;
		
		if(vitaeDown){
			//个人简历变为拉下状态
			workTriangle.style.transform="rotate(0deg)";
			$("#work_content").slideUp("slow",function(){
				vitaeTriangle.style.transform="rotate(-90deg)";
				$("#vitae_content").slideDown();
			});
		}else{
			vitaeTriangle.style.transform="rotate(0deg)";
			$("#vitae_content").slideUp("slow",function(){
				workTriangle.style.transform="rotate(-90deg)";
				$("#work_content").slideDown();
			});
		}
		
		// $("#vitae_content").slideToggle("slow",function(){
		// 	if(workDown){
		// 		//变为拉下状态
		// 		workTriangle.style.transform="rotate(-90deg)";
		// 	}else{
		// 		workTriangle.style.transform="rotate(0deg)";
		// 	}
		// 	$("#work_content").slideToggle();
		// });
		
	});
	
	$("#work_title").click(function(){
		vitaeDown=!vitaeDown;
		workDown=!workDown;
		
		if(workDown){
			//作品展示变为拉下状态
			vitaeTriangle.style.transform="rotate(0deg)";
			$("#vitae_content").slideUp("slow",function(){
				workTriangle.style.transform="rotate(-90deg)";
				$("#work_content").slideDown();
			});
		}else{
			workTriangle.style.transform="rotate(0deg)";
			$("#work_content").slideUp("slow",function(){
				vitaeTriangle.style.transform="rotate(-90deg)";
				$("#vitae_content").slideDown();
			});
		}
		
		// $("#work_content").slideToggle("slow",function(){
		// 	if(vitaeDown){
		// 		//变为拉下状态
		// 		vitaeTriangle.style.transform="rotate(-90deg)";
		// 	}else{
		// 		vitaeTriangle.style.transform="rotate(0deg)";
		// 	}
		// 	$("#vitae_content").slideToggle();
		// });
		
	});
})