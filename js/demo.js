var pc = new particleChar();
var timer = null;
// pc.queueCreate({
// 	text: "DEMO",
// 	fontColor: "#95f0c0",
// 	showNext: false,
// 	showOpen: false,
// });

// function showTime () {
// 	clearTimeout(timer);
// 	pc.queueClear();
// 	pc.setOption({fontSize: 160,dotRadius: 3,dotDistance:8, showOpen: false, showNext: false,showTypeBefore: 'nearby', fontFamily: "Razer Header Light"});
// 	pc.show("TIME");
// 	timer = setInterval(function function_name () {
// 		var my = new Date();
// 		pc.show(my.getHours() + ":" + ("0" + my.getMinutes()).slice(-2) + ":" + ("0"+my.getSeconds()).slice(-2));
// 	}, 1000);
// }

function showQueue () {
	clearTimeout(timer);
	pc.queueClear();
	pc.setOption({fontSize:240, dotRadius: 5,dotDistance: 12, showTypeBefore: "spread", fontFamily: "微软雅黑",showOpen: true, showNext: true});
	pc.queueCreate({
		text: "宋华健",
		fontColorRandom: true,
	},{
		text: "爱",
		fontColorRandom: true,
	},{
		text: "汪会会",
		fontColorRandom: true,
	},{
		text: "一辈子",
		fontColorRandom: true,
	})
};
showQueue();
// document.getElementById('time').addEventListener("click", function  (e) {
// 	e.preventDefault();
// 	if(!e.target.classList.contains("selected")){
// 		e.target.classList.add("selected");
// 		document.getElementById('queue').classList.remove("selected");
// 		showTime();
// 	}
// });
// document.getElementById('queue').addEventListener("click", function  (e) {
// 	e.preventDefault();
// 	if(!e.target.classList.contains("selected")){
// 		e.target.classList.add("selected");
// 		document.getElementById('time').classList.remove("selected");
// 		showQueue();
// 	}
// });
