function $(id) {
	return document.getElementById(id);
}

var scroll = true;
$("btn2").onclick = function () {
	if(scroll) {
		// document.getElementsByTagName("body")[0].style.overflow = "hidden";
		this.innerHTML = "点击解锁浮层后背景滚动条";
		scroll = false;
	} else {
		// document.getElementsByTagName("body")[0].style = "";
		this.innerHTML = "点击锁定浮层后背景滚动条";
		scroll = true;
	}
}

$("btn1").onclick = function () {
	$("shade").style.display = "block";
	$("popup").style.display = "block";
	if(!scroll) {
		document.getElementsByTagName("body")[0].style.overflow = "hidden";
	}
};

function hidePopup() {
	$("shade").style = "";
	$("popup").style = "";
	if(!scroll) {
		document.getElementsByTagName("body")[0].style = "";
	}
}

$("confirm").onclick = hidePopup;
$("cancel").onclick = hidePopup;
$("shade").onclick = hidePopup;

setDragable($("popup"));

function setDragable(obj) {
	var deltaX,
		deltaY;

	obj.addEventListener("mousedown", mousedown);
	function mousedown(e) {
		var offsetLeft = obj.offsetLeft,
			offsetTop = obj.offsetTop,
			style = obj.style;

		deltaX = offsetLeft - e.clientX;
		deltaY = offsetTop - e.clientY;
		style.top = offsetTop;
		style.left = offsetLeft;

		document.body.addEventListener("mousemove", mousemove);
		document.addEventListener("mouseup", mouseup);
	}

	function mousemove(e) {
		obj.style.left = e.clientX + deltaX + "px";
		obj.style.top = e.clientY + deltaY + "px";
	}
	function mouseup() {
		document.body.removeEventListener("mousemove", mousemove);
		document.removeEventListener("mouseup", mouseup);
	}
}