var x = document.getElementsByClassName("btn-left"); 
var y = document.getElementsByClassName("btn-right");

window.onscroll = function() {
    var sy = document.documentElement.scrollTop;
	console.log(sy);
	if (sy > 600) {
		var list = document.querySelectorAll(".logo ul li");
		var jum = list.length;

		list.forEach(myFunction);

		function myFunction(item, index) {
			setTimeout(function(){
				list[index].classList.add("style");
			}, 200*(index+1));
		}
	}

}

function left_btn_change(){
	x[0].classList.add("style");
}

function left_btn_remove(){
	x[0].classList.remove("style");
}

function right_btn_change(){
	y[0].classList.add("style");
}

function right_btn_remove(){
	y[0].classList.remove("style");
}

function right_href(){
	window.location.href = 'http://localhost/babastudio/ujian#';
}

function left_href(){
	window.location.href = 'http://localhost/babastudio/ujian#';
}