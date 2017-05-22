var root = document.getElementById("root");
var btn = document.getElementById("btn"),
	preBtn = btn.children[0],
	inBtn = btn.children[1],
	postBtn = btn.children[2];
var timer = 0;

function showNode(node) {
	node.style.backgroundColor = '#fff';
	setTimeout(function() {
		node.style.backgroundColor = '#FF0000';
	}, timer+=300);
	setTimeout(function() {
		node.style.backgroundColor = '#fff';
	}, timer+=300);
}

/*前序遍历*/
function preOrder(node) {
	if(node) {
		showNode(node);
		preOrder(node.children[0]);
		preOrder(node.children[1]);
	}
}

/*中序遍历*/
function inOrder(node) {
	if(node) {
		inOrder(node.children[0]);
		showNode(node);
		inOrder(node.children[1]);
	}
}

/*后序遍历*/
function postOrder(node) {
	if(node) {
		postOrder(node.children[0]);
		postOrder(node.children[1]);
		showNode(node);
	}
}

/*置灰按钮*/
function disableBtn() {
	for (var i = 0; i < btn.children.length; i++) {
		btn.children[i].setAttribute("disabled", true);
	}
}

/*恢复按钮*/
function enableBtn() {
	for (var i = 0; i < btn.children.length; i++) {
		btn.children[i].removeAttribute("disabled");
	}
}

preBtn.onclick = function() {
	disableBtn();
	preOrder(root);
	setTimeout(enableBtn, timer);
	timer = 0;
}
inBtn.onclick = function() {
	disableBtn();
	inOrder(root);
	setTimeout(enableBtn, timer);
	timer = 0;
}
postBtn.onclick = function() {
	disableBtn();
	postOrder(root);
	setTimeout(enableBtn, timer);
	timer = 0;
}


