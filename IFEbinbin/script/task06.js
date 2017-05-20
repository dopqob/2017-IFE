var leftin = document.getElementById("left-in");
var rightin = document.getElementById("right-in");
var leftout = document.getElementById("left-out");
var rightout = document.getElementById("right-out");
var clear = document.getElementById("clear");
var inputContent = document.getElementById("inputContent");
var show = document.getElementById("show");
var searchbox = document.getElementById("searchBox");
var searchbtn = document.getElementById("searchBtn");

function insertNode(describe) {
	if(inputContent.value.replace(/(^\s*)|(\s*$)/g, "") === "") {
		alert("内容不能为空，请输入内容！");
		inputContent.focus();
	} else {
		var content = inputContent.value.replace(/(^\s*)|(\s*$)/g, "");
		var arr = content.split(/,|，|、|\s+/g);
		if(describe === "left") {
			for (var i = arr.length - 1; i >= 0 ; i--) {
				var span = document.createElement("span");
				span.innerText = arr[i];
				show.insertBefore(span, show.firstChild);
			}
		} else if(describe === "right") {
			for (var i = 0; i < arr.length; i++) {
				var span = document.createElement("span");
				span.innerText = arr[i];
				show.appendChild(span);
			}
		}
	}
}

function deleteNode(describe) {
	if(!show.children.length) return;
	if(describe === "left") {
		show.removeChild(show.firstChild);
	} else if(describe === "right") {
		show.removeChild(show.lastChild);
	} else {
		if(event.target.nodeName === "SPAN") {
			show.removeChild(event.target);
		}
	}
}

function clearAll() {
	if(!show.innerHTML) {
		alert("已经是空的啦！");
	} else {
		show.innerHTML = "";
	}
}
/**
 * [模糊匹配]
 * {regs} [转换成二进制，用来全局替换]
 * {temp} [用来储存去掉<i>和</i>后的临时字符串]
 * {content} [替换成功后的完整字符串]
 */
function search() {
	var arr = show.children;
	var str = searchbox.value;
	var regs = new RegExp(str, "g");
	var content;
	if (show.innerHTML.indexOf("<i>") >= 0) {
		var temp = show.innerHTML.replace(/<i>|<\/i>/g, "");
		show.innerHTML = temp;
	}
	if(show.innerText.indexOf(str) < 0) {
		searchbox.setAttribute("placeholder", "搜到0条相关信息");
		searchbox.value = "";
		// alert("搜索完成，没有匹配的字符！");
	} else {
		for (var i = 0; i < arr.length; i++) {
			// if(arr[i].innerHTML.indexOf("<i>") >= 0) {
			// 	temp = arr[i].innerHTML.replace(/<i>|<\/i>/g, "");
			// 	content = temp.replace(regs, "<i>"+str+"</i>");
			// 	arr[i].innerHTML = content;
			// } else {
				content = arr[i].innerHTML.replace(regs, "<i>"+str+"</i>");
				arr[i].innerHTML = content;
			// }
		} 
		var re = new RegExp(str, "g");
		var arr1 = show.innerText.match(re);
		searchbox.setAttribute("placeholder", "搜到"+arr1.length+"条相关信息");
		searchbox.value = "";
	}
}


window.onload = function() {
	leftin.onclick = function() {
		insertNode("left");
	};
	rightin.onclick = function() {
		insertNode("right");
	};
	leftout.onclick = function() {
		deleteNode("left");
	}
	rightout.onclick = function() {
		deleteNode("right");
	}
	show.onclick = deleteNode;
	clear.onclick = clearAll;
	searchbtn.onclick = search;
}
