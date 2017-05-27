function $(id) {
	return document.getElementById(id);
}

var angle = 0;	// 旋转角度

var	topDis = 250,		//	小方块的初始top和left
	leftDis = 250;	

// 左转，逆时针旋转90°
$("turnLeft").onclick = function() {
	angle = angle - 90;
	$("box").style.transform = "rotate(" + angle + "deg)";
}

// 右转，顺时针旋转90°
$("turnRight").onclick = function() {
	angle = angle + 90;
	$("box").style.transform = "rotate(" + angle + "deg)";
}

// 翻转，顺时针旋转180°
$("reversal").onclick = function() {
	angle = angle + 180;
	$("box").style.transform = "rotate(" + angle + "deg)";
}

/**
 * 过angle的值来判断方块的朝向
 * 根据朝向改变top left的值来达到前进效果
 */
function move() {
	// 定义一个临时变量用来判断方块的朝向
	var temp = angle % 360;
	temp = temp >= 0 ? temp : temp + 360;
	if(temp === 0) {
		if(topDis > 50) {
			topDis = topDis -50;
			console.log("top:"+topDis+"left:"+leftDis);
			$("box").style.top = topDis + "px"; 
		}
	}
	if(temp === 90) {
		if(leftDis < 500) {
			leftDis = leftDis + 50;
			console.log("top:"+topDis+"left:"+leftDis);
			$("box").style.left = leftDis + "px"; 
		}
	}
	if(temp === 180) {
		if(topDis < 500) {
			topDis = topDis + 50;
			console.log("top:"+topDis+"left:"+leftDis);
			$("box").style.top = topDis + "px"; 
		}
	}
	if(temp === 270) {
		if(leftDis > 50) {
			leftDis = leftDis - 50;
			console.log("top:"+topDis+"left:"+leftDis);
			$("box").style.left = leftDis + "px"; 
		}
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
			$("box").style.transform = "rotate(" + angle + "deg)";
			break;
		case "TUN RIG":
			angle = angle + 90;
			$("box").style.transform = "rotate(" + angle + "deg)";
			break;
		case "TUN BAC":
			angle = angle + 180;
			$("box").style.transform = "rotate(" + angle + "deg)";
			break;
		case "GO":
			move();
			break;
	}
}