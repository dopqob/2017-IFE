var root = document.getElementById("root");
var btn = document.getElementById("btn"),
	preBtn = btn.children[0],
	postBtn = btn.children[1];
var search = document.getElementById("search"),
	preSearchBtn = search.children[0],
	searchInput = search.children[1],
	postSearchBtn = search.children[2];
var timer = 0,
	run = true;
var temp;	//新建一个变量，用来储存查询最后停留的节点，以用于初始化时重置节点背景色
var addOrDel = document.getElementById("addOrDel"),
	addNode = addOrDel.children[0],
	delNode = addOrDel.children[1];
//定义一个变量用来储存被选中的节点
var selElem = null;

// 初始化节点样式
function initialize(node) {
	if(node) {
		node.style.backgroundColor = '#fff';
		for (var i = 0; i < node.children.length; i++) {
			preOrder(node.children[i]);
		}
	}
	if(selElem) {
		selElem.style = "";
		selElem = null;
	}
}
/*给当前遍历到的节点添加背景色*/
function showNode(node) {
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
	// node.style.backgroundColor = '#fff';
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
		// console.log(node.innerText);
		showNode(node);
	}
}

/*前序查询*/
function preSearch(node) {
	//如果temp有值就初始化
	// if(temp) {
	// 	temp.style.backgroundColor = '#fff';
	// }
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
			// temp = node;
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
	//如果temp有值就初始化
	// if(temp) {
	// 	temp.style.backgroundColor = '#fff';
	// }
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
			// temp = node;
			colorNode(node);
			return false;
		}
	}
}

/*置灰按钮*/
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
	// if(temp) {
	// 	temp.style.backgroundColor = '#fff';
	// }
	// if(selElem) {
	// 	selElem.style = "";
	// 	selElem.style.backgroundColor = '#fff';
	// 	selElem = null;
	// }
	var e = elem.target;
	if(!e.style.border) {
		e.style.border = "5px solid red";
		selElem = e;
	}
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
		// console.log(elem);
		elem.parentNode.removeChild(elem);
	} else {
		alert("请选择一个节点！");
	}
}

//前序遍历按钮绑定事件
preBtn.onclick = function() {
	disableBtn();
	preOrder(root);
	setTimeout(enableBtn, timer);
	timer = 0;
}
//后序遍历按钮绑定事件
postBtn.onclick = function() {
	disableBtn();
	postOrder(root);
	setTimeout(enableBtn, timer);
	timer = 0;
}
//前序搜索按钮绑定事件
preSearchBtn.onclick = function() {
	initialize();
	disableBtn();
	preSearch(root);
	msg();
	setTimeout(enableBtn, timer);
	timer = 0;
	run = true;
}
//后序搜索按钮绑定事件
postSearchBtn.onclick = function() {
	initialize();
	disableBtn();
	postSearch(root);
	msg();
	setTimeout(enableBtn, timer);
	timer = 0;
	run = true;
}
//点击选择节点
root.onclick = function() {
	initialize();
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




