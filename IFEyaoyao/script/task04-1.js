function $(id) {
	return document.getElementById(id);
}

var angle = 0;	// 旋转角度

// 左转，逆时针旋转90°
turnLeft.onclick = function() {
	angle = angle - 90;
	$("box").style.transform = "rotate(" + angle + "deg)";
}

// 右转，顺时针旋转90°
turnRight.onclick = function() {
	angle = angle + 90;
	$("box").style.transform = "rotate(" + angle + "deg)";
}

// 翻转，顺时针旋转180°
reversal.onclick = function() {
	angle = angle + 180;
		$("box").style.transform = "rotate(" + angle + "deg)";
}

/**
 * 先获取方块当前tr和td的index，即x,y
 * 然后通过angle的值来判断方块的朝向
 * 最后根据朝向改变x y的值及innerHTML来达到前进效果
 */
function move() {
	var top = 250,
		left = 250;
	angle = angle % 360;
	angle = angle >= 0 ? angle : angle + 360;
	if(angle === 0) {
		top = top -50;
		$("box").style.top = top + "px"; 
	}
	if(angle === 90) {
		left = left + 50;
		$("box").style.left = left + "px"; 
	}
	if(angle === 180) {
		top = top + 50;
		$("box").style.top = top + "px"; 
	}
	if(angle === 270) {
		left = left - 50;
		$("box").style.left = left + "px"; 
	}
}
// 前进按钮绑定事件
$("go").onclick = function() {
	move();
}

// 执行按钮绑定事件
execute.onclick = function() {
	var val = inputBox.value;
	if(!val) {
		alert("请输入命令");
		inputBox.focus();
	}
	switch (val) {
		case "TUN LEF":
			angle = angle - 90;
			box.style.transform = "rotate(" + angle + "deg)";
			break;
		case "TUN RIG":
			angle = angle + 90;
			box.style.transform = "rotate(" + angle + "deg)";
			break;
		case "TUN BAC":
			angle = angle + 180;
			box.style.transform = "rotate(" + angle + "deg)";
			break;
		case "GO":
			move();
			break;
	}
}