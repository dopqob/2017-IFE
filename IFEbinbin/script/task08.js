var root = document.getElementById("root");
var btn = document.getElementById("btn"),
	preBtn = btn.children[0],
	postBtn = btn.children[1];
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
		// postOrder(node.children[0]);
		// postOrder(node.children[1]);
		// postOrder(node.children[2]);
		console.log(node.innerText);
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
postBtn.onclick = function() {
	disableBtn();
	postOrder(root);
	setTimeout(enableBtn, timer);
	timer = 0;
}


