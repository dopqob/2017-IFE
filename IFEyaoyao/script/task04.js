var trs = document.getElementsByTagName("tr"),
	command = document.getElementById("command");
	inputBox = command.children[0],		// 输入框
	execute = command.children[1],		// 执行按钮
	btns = document.getElementById("btns"),
	go = btns.children[0],				// 前进按钮
	turnLeft = btns.children[1],		// 左转按钮
	turnRight = btns.children[2],		// 右转按钮
	reversal = btns.children[3];		// 翻转按钮
var angle = 0;		// 旋转角度

// 左转，即逆时针旋转90°
turnLeft.onclick = function() {
	angle = angle - 90;
	box.style.transform = "rotate(" + angle + "deg)";
}

// 右转，即顺时针旋转90°
turnRight.onclick = function() {
	angle = angle + 90;
	box.style.transform = "rotate(" + angle + "deg)";
}

// 翻转，即顺时针旋转180°
reversal.onclick = function() {
	angle = angle + 180;
		box.style.transform = "rotate(" + angle + "deg)";
}

/**
 * 先获取方块当前tr和td的index，即x,y
 * 然后通过angle的值来判断方块的朝向
 * 最后根据朝向改变x y的值及innerHTML来达到前进效果
 */
function move() {
	var	box = document.getElementById("box"),
		parentBox = box.parentNode,
		content = parentBox.innerHTML;
	var x,y;
	var temp = angle % 360;
	temp = temp >= 0 ? temp : temp + 360;
	for (var i = 0; i < trs.length; i++) {
		for (var j = 0; j < trs[i].children.length; j++) {
			if(trs[i].children[j] == parentBox) {
				x = i;
				y = j;
				break;
			}
		}
	}
	if(temp == 0) {
		if(x - 1 > 0) {
			x = x - 1;
			trs[x].children[y].innerHTML = content;
			parentBox.innerHTML = "";
		}
	} else if(temp == 90) {
		if(y + 1 < trs.length) {
			y = y + 1;
			trs[x].children[y].innerHTML = content;
			parentBox.innerHTML = "";
		}
	} else if(temp == 180){
		if(x + 1 < trs.length) {
			x = x + 1;
			trs[x].children[y].innerHTML = content;
			parentBox.innerHTML = "";
		}
	} else {
		if(y - 1 > 0) {
			y = y - 1;
			trs[x].children[y].innerHTML = content;
			parentBox.innerHTML = "";
		}
	}
}
// 前进按钮绑定事件
go.onclick = function() {
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