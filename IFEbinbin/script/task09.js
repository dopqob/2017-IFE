var root = document.getElementById("root"),
	btn = document.getElementById("btn"),
	preBtn = btn.children[0],
	postBtn = btn.children[1],
	search = document.getElementById("search"),
	preSearchBtn = search.children[0],
	searchInput = search.children[1],
	postSearchBtn = search.children[2],
	addOrDel = document.getElementById("addOrDel"),
	addNode = addOrDel.children[0],
	delNode = addOrDel.children[1],
	timer = 0,
	run = true,
	selElem = null;	//定义一个变量用来储存被选中的节点

//重置所有节点背景色
function resetBgColor(node) {
	if(node){
		node.style.backgroundColor = "#fff";
		for (var i = 0; i < node.children.length; i++) {
			resetBgColor(node.children[i]);
		}
	}
}
// 初始化节点样式
function initialize(node) {
	resetBgColor(node);
	if(selElem) {
		selElem.style = "";
		selElem = null;
	}
}
/*给当前遍历到的节点添加背景色*/
function showNode(node) {
	//当run为true时定时器执行，否则停止执行
	if(run) {
		node.style.backgroundColor = '#fff';
		setTimeout(function() {
			node.style.backgroundColor = '#FF0000';
		}, timer+=300);
		setTimeout(function() {
			node.style.backgroundColor = '#fff';
		}, timer+=300);
	}
}

/*给搜索到的元素上色*/
function colorNode(node) {
	setTimeout(function() {
		node.style.backgroundColor = "#FF7FB6";
		for (var i = 0; i < node.children.length; i++) {
			node.children[i].style.backgroundColor = "#fff";
		}
	}, timer);
}

/*如果没有搜索到弹框提示*/
function msg() {
	if(run) {
		setTimeout(function() {
			alert("没有搜索到相关信息！");
		}, timer);
	}
}

/*前序遍历*/
function preOrder(node) {
	if(node) {
		showNode(node);
		for (var i = 0; i < node.children.length; i++) {
			preOrder(node.children[i]);
		}
	}
}

/*后序遍历*/
function postOrder(node) {
	if(node) {
		for (var i = 0; i < node.children.length; i++) {
			postOrder(node.children[i]);
		}
		showNode(node);
	}
}

/*前序查询*/
function preSearch(node) {
	var str = searchInput.value.trim();
	if(!str) {
		alert("请输入要查询的信息！");
		searchInput.focus();
		run = false;
		return false;
	}
	if(node) {
		if (str && node.childNodes[0].nodeValue.trim() === str) {
			run = false;
			temp = node;
			colorNode(node);
			return false;
		}
		showNode(node);
		for (var i = 0; i < node.children.length; i++) {
			preSearch(node.children[i]);
		}
	}
}

/*后序查询*/
function postSearch(node) {
	var str = searchInput.value.trim();
	if(!str) {
		alert("请输入要查询的信息！");
		searchInput.focus();
		run = false;
		return false;
	}
	if(node) {
		for (var i = 0; i < node.children.length; i++) {
			postSearch(node.children[i]);
		}
		showNode(node);
		if (str && node.childNodes[0].nodeValue.trim() === str) {
			run = false;
			colorNode(node);
			return false;
		}
	}
}

/*置灰按钮，防止多个操作同时进行*/
function disableBtn() {
	var btns = document.getElementsByTagName("button");
	for (var i = 0; i < btns.length; i++) {
		btns[i].setAttribute("disabled", true);
	}
}

/*恢复按钮*/
function enableBtn() {
	var btns = document.getElementsByTagName("button");
	for (var i = 0; i < btns.length; i++) {
		btns[i].removeAttribute("disabled");
	}
}

// 选择节点
function selectElem(elem) {
	var e = elem.target;
	e.style.border = "5px solid red";
	selElem = e;
}
//增加节点
function addElem(elem) {
	var str = searchInput.value;
	if(!str) {
		alert("请输入节点内容");
		searchInput.focus();
		return false;
	}
	if(elem) {
		var div = document.createElement("div");
		div.innerHTML = str;
		elem.appendChild(div);
	} else {
		alert("请选择一个节点！");
	}

}
//删除选中元素
function delElem(elem) {
	if(elem) {
		elem.parentNode.removeChild(elem);
	} else {
		alert("请选择一个节点！");
	}
}

//前序遍历按钮绑定事件
preBtn.onclick = function() {
	initialize(root);
	disableBtn();
	preOrder(root);
	setTimeout(enableBtn, timer);
	timer = 0;
}
//后序遍历按钮绑定事件
postBtn.onclick = function() {
	initialize(root);
	disableBtn();
	postOrder(root);
	setTimeout(enableBtn, timer);
	timer = 0;
}
//前序搜索按钮绑定事件
preSearchBtn.onclick = function() {
	initialize(root);
	disableBtn();
	preSearch(root);
	msg();
	setTimeout(enableBtn, timer);
	timer = 0;
	run = true;
}
//后序搜索按钮绑定事件
postSearchBtn.onclick = function() {
	initialize(root);
	disableBtn();
	postSearch(root);
	msg();
	setTimeout(enableBtn, timer);
	timer = 0;
	run = true;
}
//点击选择节点
root.onclick = function() {
	initialize(root);
	selectElem(event);
}
//添加节点按钮绑定事件
addNode.onclick = function() {
	addElem(selElem);
}
// 删除节点按钮绑定事件
delNode.onclick = function() {
	delElem(selElem);
	selElem = null;
}




