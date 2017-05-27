function $(id) {
	return document.getElementById(id);
}

var	topDis = 250,		//	小方块的初始top和left
	leftDis = 250;	


function transBox(description) {
	switch (description) {
		case "left":
			if(leftDis > 50) {
				leftDis = leftDis - 50;
				$("box").style.left = leftDis + "px"; 
			}
			break;
		case "top":
			if(topDis > 50) {
				topDis = topDis - 50;
				$("box").style.top = topDis + "px"; 
			}
			break;
		case "right":
			if(leftDis < 500) {
				leftDis = leftDis + 50;
				$("box").style.left = leftDis + "px"; 
			}
			break;
		case "bottom":
			if(topDis < 500) {
				topDis = topDis + 50;
				$("box").style.top = topDis + "px"; 
			}
			break;
	}	
}

function moveBox(description) {
	transBox(description);
	switch (description) {
		case "left":
			$("box").style.transform = "rotate(-90deg)";
			break;
		case "top":
			$("box").style.transform = "rotate(0deg)";
			break;
		case "right":
			$("box").style.transform = "rotate(90deg)";
			break;
		case "bottom":
			$("box").style.transform = "rotate(180deg)";
			break;
	}
}

$("transLeft").onclick = function() {
	transBox("left");
}
$("transTop").onclick = function() {
	transBox("top");
}
$("transRight").onclick = function() {
	transBox("right");
}
$("transBottom").onclick = function() {
	transBox("bottom");
}
$("moveLeft").onclick = function() {
	moveBox("left");
}
$("moveTop").onclick = function() {
	moveBox("top");
}
$("moveRight").onclick = function() {
	moveBox("right");
}
$("moveBottom").onclick = function() {
	moveBox("bottom");
}